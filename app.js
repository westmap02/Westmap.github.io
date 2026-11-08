const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const westMap = L.map("west-map", { scrollWheelZoom: false }).setView([40.3, -113.5], 5);
L.tileLayer(tiles, { maxZoom: 19, attribution }).addTo(westMap);
let stateMap;
let activeState;
const visualCache = new Map();
const usedVisualKeys = new Set();

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
  setStateBackdrop(id);
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
  loadPlaceVisuals(p);
}

const GOOD = ["sunset","sunrise","golden hour","panorama","panoramic","overlook","aerial","reflection","alpenglow","autumn","winter","wildflower","milky way","vista","dramatic","scenic","lake","mountain","canyon","waterfall"];
const BAD = ["map","sign","entrance","visitor center","parking","road sign","logo","diagram","historic","people","crowd","construction","restroom","building","museum","parking lot","close-up","specimen"];
function plain(v = "") { return v.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#39;/g,"'").trim(); }
function normalizeWords(v=""){return v.toLowerCase().replace(/national park|national monument|state park|national recreation area|wilderness|area|the/g,"").replace(/[^a-z0-9]+/g," ").trim();}
function relevance(page, place){const i=page.imageinfo?.[0]||{},m=i.extmetadata||{};const hay=`${page.title} ${plain(m.ImageDescription?.value)} ${plain(m.Categories?.value)}`.toLowerCase();const tokens=normalizeWords(place.name).split(/\s+/).filter(x=>x.length>3);return tokens.length?tokens.filter(t=>hay.includes(t)).length/tokens.length:0;}
function photoScore(page, place) {
 const i=page.imageinfo?.[0]||{},m=i.extmetadata||{};const hay=`${page.title} ${plain(m.ImageDescription?.value)} ${plain(m.Categories?.value)}`.toLowerCase();let score=relevance(page,place)*90;
 GOOD.forEach(k=>{if(hay.includes(k))score+=10});BAD.forEach(k=>{if(hay.includes(k))score-=30});const w=i.width||0,h=i.height||1,r=w/h;score+=Math.min(32,Math.log10(Math.max(1,w*h))*4.5);if(r>=1.28&&r<=2.65)score+=26;else if(r<.9||r>3.2)score-=22;if(w>=3000)score+=12;if((i.mime||"").includes("jpeg"))score+=5;return score;
}
async function commonsRequest(params) {const api="https://commons.wikimedia.org/w/api.php";const q=new URLSearchParams({action:"query",prop:"imageinfo",iiprop:"url|size|mime|sha1|extmetadata",iiurlwidth:"1800",format:"json",origin:"*",...params});const response=await fetch(`${api}?${q}`);if(!response.ok)throw new Error("Photo service error");const json=await response.json();return Object.values(json.query?.pages||{});}
async function visualSearch(search,limit=30){const key=`${search}|${limit}`;if(visualCache.has(key))return visualCache.get(key);const pages=await commonsRequest({generator:"search",gsrsearch:search,gsrnamespace:"6",gsrlimit:String(Math.min(limit,50))});const usable=pages.filter(page=>{const i=page.imageinfo?.[0];return i?.thumburl&&i.width>=1500&&i.height>=800&&!["image/svg+xml","application/pdf"].includes(i.mime)});visualCache.set(key,usable);return usable;}
function visualKey(page){const i=page.imageinfo?.[0]||{};return i.sha1||i.url||page.title;}
function signature(page){const i=page.imageinfo?.[0]||{},m=i.extmetadata||{};const raw=`${page.title} ${plain(m.ImageDescription?.value)}`.toLowerCase().replace(/file:|jpg|jpeg|png|dsc|img|\d+/g,"");return new Set(raw.split(/[^a-z]+/).filter(x=>x.length>4));}
function similarity(a,b){const A=signature(a),B=signature(b);if(!A.size||!B.size)return 0;let n=0;A.forEach(x=>{if(B.has(x))n++});return n/Math.min(A.size,B.size);}
function chooseDiverse(candidates,place,max=10){const sorted=[...candidates].filter(p=>relevance(p,place)>=.28&&!usedVisualKeys.has(visualKey(p))).sort((a,b)=>photoScore(b,place)-photoScore(a,place));const out=[];for(const page of sorted){if(out.some(x=>similarity(x,page)>.55))continue;out.push(page);if(out.length===max)break;}return out;}
function creditHtml(page){const i=page.imageinfo?.[0],m=i?.extmetadata||{};if(!i)return"";const author=plain(m.Artist?.value)||"Wikimedia Commons contributor";const license=plain(m.LicenseShortName?.value)||"See source";return `${author} · ${license} · <a href="${i.descriptionurl}" target="_blank" rel="noopener">source</a>`;}
async function pickBackdrop(search,target){try{const photos=await visualSearch(search,36);const chosen=photos.sort((a,b)=>photoScore(b,{name:search})-photoScore(a,{name:search})).find(x=>!usedVisualKeys.has(visualKey(x)));if(chosen){usedVisualKeys.add(visualKey(chosen));target.style.backgroundImage=`url("${chosen.imageinfo[0].thumburl}")`;}}catch(e){}}
function setStateBackdrop(id){const state=STATES[id],bg=document.getElementById("state-bg");bg.style.backgroundImage="";pickBackdrop(`"${state.name}" wilderness scenic landscape mountains`,bg);}
function setHomeBackdrop(){pickBackdrop("American West wilderness scenic landscape mountains desert",document.getElementById("home-bg"));}
async function loadPlaceVisuals(p){const gallery=document.getElementById("gallery"),hero=document.getElementById("place-hero"),credit=document.getElementById("hero-credit");gallery.innerHTML='<p class="gallery-status">Curating distinct hero photographs...</p>';hero.style.backgroundImage="";credit.innerHTML="";
 try{const state=STATES[p.state]?.name||"";const searches=[`"${p.name}" ${state} scenic landscape`,`"${p.name}" ${state} panorama overlook`,`"${p.name}" ${state} sunrise sunset`,`"${p.name}" ${state} lake mountain canyon wilderness`,`"${p.name}" ${state} aerial reflection wildflowers winter`];const sets=await Promise.all(searches.map(q=>visualSearch(q,40)));const unique=new Map();sets.flat().forEach(x=>unique.set(visualKey(x),x));const selected=chooseDiverse([...unique.values()],p,11);if(selected.length){const heroShot=selected.shift();usedVisualKeys.add(visualKey(heroShot));hero.style.backgroundImage=`url("${heroShot.imageinfo[0].thumburl}")`;credit.innerHTML=creditHtml(heroShot);}
 const galleryShots=selected.slice(0,10);galleryShots.forEach(x=>usedVisualKeys.add(visualKey(x)));if(!galleryShots.length)throw new Error("No strong unique images");gallery.innerHTML=galleryShots.map(page=>{const i=page.imageinfo[0],m=i.extmetadata||{},author=plain(m.Artist?.value)||"Wikimedia Commons contributor",license=plain(m.LicenseShortName?.value)||"See source",caption=plain(m.ImageDescription?.value)||page.title.replace(/^File:/,"");return `<figure class="gallery-item"><a href="${i.descriptionurl}" target="_blank" rel="noopener"><img src="${i.thumburl}" alt="${caption}" loading="lazy"></a><figcaption><span>${caption}</span><small>${author} · ${license} · <a href="${i.descriptionurl}" target="_blank" rel="noopener">source</a></small></figcaption></figure>`}).join("");
 }catch(e){gallery.innerHTML='<p class="gallery-status">I could not find enough strong, distinct photographs for this location from the licensed image source. I would rather show fewer photos than pad the gallery with weak ones.</p>';}}

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
setHomeBackdrop();
route();
