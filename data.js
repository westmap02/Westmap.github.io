const STATES = {
  ut: { name: "Utah", center: [39.32, -111.67], zoom: 6 },
  co: { name: "Colorado", center: [39.00, -105.55], zoom: 6 },
  az: { name: "Arizona", center: [34.25, -111.65], zoom: 6 },
  nm: { name: "New Mexico", center: [34.40, -106.05], zoom: 6 },
  nv: { name: "Nevada", center: [39.30, -116.60], zoom: 6 },
  ca: { name: "California", center: [37.25, -119.65], zoom: 5 },
  or: { name: "Oregon", center: [43.90, -120.55], zoom: 6 },
  wa: { name: "Washington", center: [47.40, -120.70], zoom: 7 },
  id: { name: "Idaho", center: [44.25, -114.55], zoom: 6 },
  mt: { name: "Montana", center: [46.90, -110.35], zoom: 6 },
  wy: { name: "Wyoming", center: [43.00, -107.55], zoom: 6 }
};

const PLACES = [
  {
    id: "uinta-mountains", state: "ut", name: "Uinta Mountains",
    lat: 40.72, lng: -110.87, type: "Camping · Lakes · Trails",
    description: "High alpine basins, cold clear lakes, dispersed campsites, and long ridgeline hikes.",
    activities: ["Backpacking", "Fishing", "Camping", "Scenic drives"], images: []
  },
  {
    id: "moab", state: "ut", name: "Moab & Canyon Country",
    lat: 38.57, lng: -109.55, type: "Trails · Biking · Camping",
    description: "Red rock canyons, sandstone scenery, desert camps, and technical trails.",
    activities: ["Hiking", "Mountain biking", "Camping", "Photography"], images: []
  },
  {
    id: "san-juan-mountains", state: "co", name: "San Juan Mountains",
    lat: 37.81, lng: -107.67, type: "Trails · Peaks · Camping",
    description: "Rugged peaks, mining roads, wildflower basins, and memorable campsites.",
    activities: ["Hiking", "4x4", "Camping", "Photography"], images: []
  }
];
