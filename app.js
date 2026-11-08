const westMap = L.map("west-map", { scrollWheelZoom: false }).setView([40.3, -113.5], 5);
const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
L.tileLayer(tiles, { maxZoom: 19, attribution }).addTo(westMap);
let stateMap;
let activeState;

// Simple clickable circles are used on the overview. Replace with GeoJSON state polygons later if desired.
Object.entries(STATES).forEach(([id, state]) => {
  L.circleMarker(state.center, { radius: 16, color: "#1c1917", weight: 2, fillColor: "#fbbf24", fillOpacity: .92 })
    .addTo(westMap).bindTooltip(state.name, { permanent: true, direction: "top", className: "state-tooltip" })
    .on("click", () => openState(id));
});

function show(id){document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");window.scrollTo(0,0)}
function openState(id){
  activeState=id; const state=STATES[id]; show("state-view");
  document.getElementById("state-title").textContent=`Explore ${state.name}`;
  if(stateMap) stateMap.remove();
  stateMap=L.map("state-map").setView(state.center,state.zoom);
  L.tileLayer(tiles,{maxZoom:19,attribution}).addTo(stateMap);
  const list=document.getElementById("location-list"); list.innerHTML="";
  const matches=PLACES.filter(p=>p.state===id);
  if(!matches.length) list.innerHTML="<p>No pins yet. Add one in data.js.</p>";
  matches.forEach(place=>{
    L.marker([place.lat,place.lng]).addTo(stateMap).bindTooltip(place.name,{permanent:true,direction:"top",offset:[0,-10],className:"place-tooltip"}).bindPopup(`<b>${place.name}</b><br>${place.type}<br><button onclick="openPlace('${place.id}')">View location</button>`).on("click",()=>{});
    const b=document.createElement("button"); b.className="place-link"; b.innerHTML=`<b>${place.name}</b><small>${place.type}</small>`; b.onclick=()=>openPlace(place.id); list.appendChild(b);
  });
  setTimeout(()=>stateMap.invalidateSize(),50);
}
function openPlace(id){
  const p=PLACES.find(x=>x.id===id); if(!p)return; show("place-view");
  document.getElementById("place-title").textContent=p.name; document.getElementById("place-type").textContent=p.type; document.getElementById("place-description").textContent=p.description;
  document.getElementById("activities").innerHTML=p.activities.map(a=>`<span class="tag">${a}</span>`).join("");
  const gallery=document.getElementById("gallery"); gallery.innerHTML=p.images.length?p.images.map(src=>`<img src="${src}" alt="${p.name}">`).join(""):'<div class="photo-placeholder"></div><div class="photo-placeholder"></div><div class="photo-placeholder"></div>';
}
document.querySelector('[data-go="home"]').onclick=()=>show("home-view");
document.querySelector('[data-go="state"]').onclick=()=>openState(activeState);
window.openPlace=openPlace;
