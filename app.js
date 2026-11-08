const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const westMap = L.map("west-map", { scrollWheelZoom: false }).setView([40.3, -113.5], 5);
L.tileLayer(tiles, { maxZoom: 19, attribution }).addTo(westMap);
let stateMap;
let activeState;
const visualCache = new Map();
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
async function openState(id) {
  activeState = id;
  const state = STATES[id];
  if (!state) return navigateHome();
  show("state-view");
  document.getElementById("state-title").textContent = `Explore ${state.name}`;
  document.getElementById("state-subtitle").textContent = `${PLACES.filter(p => p.state === id).length} pinned places • build your own field guide`;
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
  clearPlaceVisuals();
}
const CURATED_PHOTOS = {
  "uinta-mountains": {
    hero: "uintas-11.jpg",
    images: ["uintas-01.jpg","uintas-02.jpg","uintas-03.jpg","uintas-04.jpg","uintas-05.jpg","uintas-06.jpg","uintas-07.jpg","uintas-08.jpg","uintas-09.jpg","uintas-10.jpg","uintas-11.jpg","uintas-12.jpg","uintas-13.jpg"]
  },
  "bonneville-salt-flats": {
    hero: "sand5.jpg",
    images: ["sand1.jpg","sand2.jpg","sand3.jpg","sand4.jpg","sand5.jpg","sand6.jpg","sand7.jpg","sand8.jpg","sand9.jpg"]
  },
  "bear-lake": {
    hero: "bearlake2.jpg",
    images: ["bearlake1.jpg","bearlake2.jpg","bearlake3.jpg","bearlake4.jpg","bearlake5.jpg"]
  },
  "glacier-national-park": {
    hero: "glacier8.jpg",
    images: ["glacier1.jpg","glacier2.jpg","glacier3.jpg","glacier4.jpg","glacier5.jpg","glacier6.jpg","glacier7.jpg","glacier8.jpg","glacier9.jpg","glacier10.jpg","glacier11.jpg","glacier12.jpg","glacier13.jpg","glacier14.jpg","glacier15.jpg","glacier16.jpg"]
  }
};
function clearPlaceVisuals(){
  const gallery=document.getElementById("gallery");
  const hero=document.getElementById("place-hero");
  const credit=document.getElementById("hero-credit");
  const id=location.hash.split("/")[1]||"";
  const curated=CURATED_PHOTOS[id];
  const place=PLACES.find(p=>p.id===id);
  const placeName=place ? place.name : "Destination";
  credit.innerHTML="";
  if(curated){
    hero.style.backgroundImage=`url("${curated.hero}")`;
    gallery.innerHTML=curated.images.map((src,index)=>`<figure class="gallery-item"><a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${placeName} photo ${index+1}" loading="lazy"></a></figure>`).join("");
    return;
  }
  hero.style.backgroundImage="none";
  gallery.innerHTML='<div class="gallery-empty"><span>PHOTO FIELD BOOK</span><strong>Photos coming soon</strong><p>This destination is ready for your hand-picked images.</p></div>';
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
