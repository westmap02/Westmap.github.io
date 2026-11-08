const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const westMap = L.map("west-map", { scrollWheelZoom: false }).setView([40.3, -113.5], 5);
L.tileLayer(tiles, { maxZoom: 19, attribution }).addTo(westMap);
let stateMap;
let activeState;

Object.entries(STATES).forEach(([id, state]) => {
  L.circleMarker(state.center, { radius: 16, color: "#1c1917", weight: 2, fillColor: "#fbbf24", fillOpacity: .92 })
    .addTo(westMap)
    .bindTooltip(state.name, { permanent: true, direction: "top", className: "state-tooltip" })
    .on("click", () => navigateState(id));
});

function show(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo(0, 0);
}
function navigateState(id) { location.hash = `state/${id}`; }
function navigatePlace(id) { location.hash = `place/${id}`; }
function navigateHome() { location.hash = "home"; }
function shortLabel(name) {
  return name
    .replace(" National Recreation Area", "")
    .replace(" National Monument", "")
    .replace(" National Park", "")
    .replace(" State Park", "")
    .replace(" National Forest", " NF")
    .replace(" Mountains", " Mtns")
    .replace(" Scenic Byway", " Byway");
}

function openState(id) {
  activeState = id;
  const state = STATES[id];
  if (!state) return navigateHome();
  show("state-view");
  document.getElementById("state-title").textContent = `Explore ${state.name}`;
  if (stateMap) stateMap.remove();
  stateMap = L.map("state-map").setView(state.center, state.zoom);
  L.tileLayer(tiles, { maxZoom: 19, attribution }).addTo(stateMap);
  const list = document.getElementById("location-list");
  list.innerHTML = "";
  const matches = PLACES.filter(p => p.state === id);
  if (!matches.length) list.innerHTML = "<p>No pins yet.</p>";

  matches.forEach((place, index) => {
    const marker = L.marker([place.lat, place.lng]).addTo(stateMap);
    const direction = index % 2 ? "right" : "left";
    marker.bindTooltip(shortLabel(place.name), {
      permanent: true,
      direction,
      offset: direction === "right" ? [12, 0] : [-12, 0],
      className: "place-tooltip"
    });
    marker.on("click", () => navigatePlace(place.id));
    const b = document.createElement("button");
    b.className = "place-link";
    b.innerHTML = `<b>${place.name}</b><small>${place.type}</small>`;
    b.onclick = () => navigatePlace(place.id);
    list.appendChild(b);
  });
  setTimeout(() => stateMap.invalidateSize(), 50);
}

function openPlace(id) {
  const p = PLACES.find(x => x.id === id);
  if (!p) return navigateHome();
  activeState = p.state;
  show("place-view");
  document.title = `${p.name} | Western Wilds`;
  document.getElementById("place-title").textContent = p.name;
  document.getElementById("place-type").textContent = p.type;
  document.getElementById("place-description").textContent = p.description;
  document.getElementById("activities").innerHTML = p.activities.map(a => `<span class="tag">${a}</span>`).join("");
  document.getElementById("map-link").href = `https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lng}#map=10/${p.lat}/${p.lng}`;
  loadCuratedCommonsGallery(p, document.getElementById("gallery"));
}

const GOOD = ["sunset", "sunrise", "golden", "panorama", "panoramic", "overlook", "aerial", "reflection", "alpenglow", "autumn", "winter", "wildflower", "milky way", "view"];
const BAD = ["map", "sign", "entrance", "visitor center", "parking", "road sign", "logo", "diagram", "historic", "people", "crowd", "construction", "restroom"];
function plain(v = "") { return v.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").trim(); }
function photoScore(page, place) {
  const i = page.imageinfo?.[0] || {};
  const m = i.extmetadata || {};
  const hay = `${page.title} ${plain(m.ImageDescription?.value)} ${plain(m.Categories?.value)}`.toLowerCase();
  const exact = place.name.toLowerCase().split(" / ")[0];
  let score = hay.includes(exact) ? 60 : 0;
  GOOD.forEach(k => { if (hay.includes(k)) score += 12; });
  BAD.forEach(k => { if (hay.includes(k)) score -= 35; });
  const w = i.width || 0, h = i.height || 1, ratio = w / h;
  score += Math.min(35, Math.log10(Math.max(1, w * h)) * 5);
  if (ratio >= 1.25 && ratio <= 2.4) score += 22;
  else if (ratio < .8 || ratio > 3) score -= 16;
  if ((i.mime || "").includes("jpeg")) score += 8;
  return score;
}

async function commonsRequest(params) {
  const api = "https://commons.wikimedia.org/w/api.php";
  const q = new URLSearchParams({ action: "query", prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "1600", format: "json", origin: "*", ...params });
  const response = await fetch(`${api}?${q}`);
  if (!response.ok) throw new Error("Photo service error");
  const json = await response.json();
  return Object.values(json.query?.pages || {});
}

async function loadCuratedCommonsGallery(p, gallery) {
  gallery.innerHTML = '<p class="gallery-status">Finding the best real photographs...</p>';
  const state = STATES[p.state]?.name || "";
  const searches = [
    `"${p.name}" ${state} landscape`,
    `"${p.name}" sunset OR sunrise`,
    `"${p.name}" panorama OR overlook`
  ];
  try {
    const batches = await Promise.all(searches.map(gsrsearch => commonsRequest({ generator: "search", gsrsearch, gsrnamespace: "6", gsrlimit: "20" })));
    const unique = new Map();
    batches.flat().forEach(page => {
      const info = page.imageinfo?.[0];
      if (info?.thumburl && info.width >= 1200 && info.height >= 700) unique.set(page.title, page);
    });
    const photos = [...unique.values()].sort((a, b) => photoScore(b, p) - photoScore(a, p)).slice(0, 8);
    if (!photos.length) throw new Error("No strong photos found");
    gallery.innerHTML = photos.map(page => {
      const i = page.imageinfo[0], m = i.extmetadata || {};
      const author = plain(m.Artist?.value) || "Wikimedia Commons contributor";
      const license = plain(m.LicenseShortName?.value) || "See source";
      const caption = plain(m.ImageDescription?.value) || page.title.replace(/^File:/, "");
      return `<figure class="gallery-item"><a href="${i.descriptionurl}" target="_blank" rel="noopener"><img src="${i.thumburl}" alt="${caption}" loading="lazy"></a><figcaption><span>${caption}</span><small>${author} · ${license} · <a href="${i.descriptionurl}" target="_blank" rel="noopener">source</a></small></figcaption></figure>`;
    }).join("");
  } catch (error) {
    gallery.innerHTML = '<p class="gallery-status">The photo gallery could not load right now. Try refreshing this page.</p>';
  }
}

function route() {
  const [kind, id] = location.hash.slice(1).split("/");
  if (kind === "state" && id) openState(id);
  else if (kind === "place" && id) openPlace(id);
  else {
    document.title = "Western Wilds Explorer";
    show("home-view");
    setTimeout(() => westMap.invalidateSize(), 50);
  }
}
document.querySelector('[data-go="home"]').onclick = navigateHome;
document.querySelector('[data-go="state"]').onclick = () => navigateState(activeState);
window.addEventListener("hashchange", route);
route();
