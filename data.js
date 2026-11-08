const STATES = {
  "ut": {
    "name": "Utah",
    "center": [
      39.32,
      -111.67
    ],
    "zoom": 6
  },
  "co": {
    "name": "Colorado",
    "center": [
      39,
      -105.55
    ],
    "zoom": 6
  },
  "az": {
    "name": "Arizona",
    "center": [
      34.25,
      -111.65
    ],
    "zoom": 6
  },
  "nm": {
    "name": "New Mexico",
    "center": [
      34.4,
      -106.05
    ],
    "zoom": 6
  },
  "nv": {
    "name": "Nevada",
    "center": [
      39.3,
      -116.6
    ],
    "zoom": 6
  },
  "ca": {
    "name": "California",
    "center": [
      37.25,
      -119.65
    ],
    "zoom": 5
  },
  "or": {
    "name": "Oregon",
    "center": [
      43.9,
      -120.55
    ],
    "zoom": 6
  },
  "wa": {
    "name": "Washington",
    "center": [
      47.4,
      -120.7
    ],
    "zoom": 7
  },
  "id": {
    "name": "Idaho",
    "center": [
      44.25,
      -114.55
    ],
    "zoom": 6
  },
  "mt": {
    "name": "Montana",
    "center": [
      46.9,
      -110.35
    ],
    "zoom": 6
  },
  "wy": {
    "name": "Wyoming",
    "center": [
      43,
      -107.55
    ],
    "zoom": 6
  }
};

const PLACES = [
  {
    "id": "arches-national-park",
    "state": "ut",
    "name": "Arches National Park",
    "lat": 38.7331,
    "lng": -109.5925,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Arches National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "canyonlands-national-park",
    "state": "ut",
    "name": "Canyonlands National Park",
    "lat": 38.3269,
    "lng": -109.8783,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Canyonlands National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "zion-national-park",
    "state": "ut",
    "name": "Zion National Park",
    "lat": 37.2982,
    "lng": -113.0263,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Zion National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "bryce-canyon-national-park",
    "state": "ut",
    "name": "Bryce Canyon National Park",
    "lat": 37.6283,
    "lng": -112.1677,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Bryce Canyon National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "capitol-reef-national-park",
    "state": "ut",
    "name": "Capitol Reef National Park",
    "lat": 38.2919,
    "lng": -111.2615,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Capitol Reef National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "grand-staircase-escalante-national-monument",
    "state": "ut",
    "name": "Grand Staircase-Escalante National Monument",
    "lat": 37.4,
    "lng": -111.68,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Grand Staircase-Escalante National Monument is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "bears-ears-national-monument",
    "state": "ut",
    "name": "Bears Ears National Monument",
    "lat": 37.63,
    "lng": -109.86,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Bears Ears National Monument is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "natural-bridges-national-monument",
    "state": "ut",
    "name": "Natural Bridges National Monument",
    "lat": 37.6017,
    "lng": -110.0137,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Natural Bridges National Monument is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "cedar-breaks-national-monument",
    "state": "ut",
    "name": "Cedar Breaks National Monument",
    "lat": 37.6353,
    "lng": -112.8453,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Cedar Breaks National Monument is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "glen-canyon-national-recreation-area-lake-powell",
    "state": "ut",
    "name": "Glen Canyon National Recreation Area / Lake Powell",
    "lat": 37.0,
    "lng": -111.25,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Glen Canyon National Recreation Area / Lake Powell is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "coral-pink-sand-dunes-state-park",
    "state": "ut",
    "name": "Coral Pink Sand Dunes State Park",
    "lat": 37.037,
    "lng": -112.723,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Coral Pink Sand Dunes State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "snow-canyon-state-park",
    "state": "ut",
    "name": "Snow Canyon State Park",
    "lat": 37.205,
    "lng": -113.648,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Snow Canyon State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "sand-hollow-state-park",
    "state": "ut",
    "name": "Sand Hollow State Park",
    "lat": 37.12,
    "lng": -113.38,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Sand Hollow State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "goblin-valley-state-park",
    "state": "ut",
    "name": "Goblin Valley State Park",
    "lat": 38.573,
    "lng": -110.707,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Goblin Valley State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "dead-horse-point-state-park",
    "state": "ut",
    "name": "Dead Horse Point State Park",
    "lat": 38.482,
    "lng": -109.739,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Dead Horse Point State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "deer-creek-reservoir",
    "state": "ut",
    "name": "Deer Creek Reservoir",
    "lat": 40.405,
    "lng": -111.53,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Deer Creek Reservoir is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "bear-lake",
    "state": "ut",
    "name": "Bear Lake",
    "lat": 41.95,
    "lng": -111.33,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Bear Lake is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "jordanelle-reservoir",
    "state": "ut",
    "name": "Jordanelle Reservoir",
    "lat": 40.62,
    "lng": -111.4,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Jordanelle Reservoir is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "kodachrome-basin-state-park",
    "state": "ut",
    "name": "Kodachrome Basin State Park",
    "lat": 37.52,
    "lng": -111.99,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Kodachrome Basin State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "goosenecks-state-park",
    "state": "ut",
    "name": "Goosenecks State Park",
    "lat": 37.174,
    "lng": -109.927,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Goosenecks State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "uinta-mountains",
    "state": "ut",
    "name": "Uinta Mountains",
    "lat": 40.72,
    "lng": -110.87,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Uinta Mountains is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "wasatch-mountains",
    "state": "ut",
    "name": "Wasatch Mountains",
    "lat": 40.55,
    "lng": -111.66,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Wasatch Mountains is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "mount-timpanogos",
    "state": "ut",
    "name": "Mount Timpanogos",
    "lat": 40.3908,
    "lng": -111.645,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Mount Timpanogos is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "dixie-national-forest",
    "state": "ut",
    "name": "Dixie National Forest",
    "lat": 37.62,
    "lng": -112.47,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Dixie National Forest is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "fishlake-national-forest",
    "state": "ut",
    "name": "Fishlake National Forest",
    "lat": 38.7,
    "lng": -111.7,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Fishlake National Forest is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "candy-cliffs",
    "state": "ut",
    "name": "Candy Cliffs",
    "lat": 37.25,
    "lng": -113.24,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Candy Cliffs is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "cosmic-ashtray",
    "state": "ut",
    "name": "Cosmic Ashtray",
    "lat": 37.42,
    "lng": -111.23,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Cosmic Ashtray is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "moqui-sand-caves",
    "state": "ut",
    "name": "Moqui Sand Caves",
    "lat": 37.116,
    "lng": -112.557,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Moqui Sand Caves is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "the-toadstools",
    "state": "ut",
    "name": "The Toadstools",
    "lat": 37.101,
    "lng": -111.873,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "The Toadstools is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "monument-valley-navajo-tribal-park",
    "state": "ut",
    "name": "Monument Valley Navajo Tribal Park",
    "lat": 36.998,
    "lng": -110.098,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Monument Valley Navajo Tribal Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "flaming-gorge",
    "state": "ut",
    "name": "Flaming Gorge",
    "lat": 40.91,
    "lng": -109.42,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Flaming Gorge is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "buckskin-gulch",
    "state": "ut",
    "name": "Buckskin Gulch",
    "lat": 37.02,
    "lng": -112.0,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Buckskin Gulch is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "little-wild-horse-canyon",
    "state": "ut",
    "name": "Little Wild Horse Canyon",
    "lat": 38.583,
    "lng": -110.802,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Little Wild Horse Canyon is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "bonneville-salt-flats",
    "state": "ut",
    "name": "Bonneville Salt Flats",
    "lat": 40.76,
    "lng": -113.89,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Bonneville Salt Flats is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "valley-of-the-gods",
    "state": "ut",
    "name": "Valley of the Gods",
    "lat": 37.264,
    "lng": -109.852,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Valley of the Gods is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "burr-trail",
    "state": "ut",
    "name": "Burr Trail",
    "lat": 37.86,
    "lng": -111.15,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Burr Trail is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "hole-in-the-rock-road",
    "state": "ut",
    "name": "Hole-in-the-Rock Road",
    "lat": 37.5,
    "lng": -111.44,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Hole-in-the-Rock Road is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "mirror-lake-scenic-byway",
    "state": "ut",
    "name": "Mirror Lake Scenic Byway",
    "lat": 40.7,
    "lng": -110.89,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Mirror Lake Scenic Byway is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "rocky-mountain-national-park",
    "state": "co",
    "name": "Rocky Mountain National Park",
    "lat": 40.3428,
    "lng": -105.6836,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Rocky Mountain National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "great-sand-dunes-national-park",
    "state": "co",
    "name": "Great Sand Dunes National Park",
    "lat": 37.7916,
    "lng": -105.5943,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Great Sand Dunes National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "black-canyon-of-the-gunnison-national-park",
    "state": "co",
    "name": "Black Canyon of the Gunnison National Park",
    "lat": 38.5754,
    "lng": -107.7416,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Black Canyon of the Gunnison National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "mesa-verde-national-park",
    "state": "co",
    "name": "Mesa Verde National Park",
    "lat": 37.2309,
    "lng": -108.4618,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Mesa Verde National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "san-juan-mountains",
    "state": "co",
    "name": "San Juan Mountains",
    "lat": 37.81,
    "lng": -107.67,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "San Juan Mountains is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "telluride-ouray-area",
    "state": "co",
    "name": "Telluride / Ouray Area",
    "lat": 38.02,
    "lng": -107.67,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Telluride / Ouray Area is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "maroon-bells",
    "state": "co",
    "name": "Maroon Bells",
    "lat": 39.0708,
    "lng": -106.989,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Maroon Bells is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "colorado-national-monument",
    "state": "co",
    "name": "Colorado National Monument",
    "lat": 39.05,
    "lng": -108.69,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Colorado National Monument is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "grand-teton-national-park",
    "state": "wy",
    "name": "Grand Teton National Park",
    "lat": 43.7904,
    "lng": -110.6818,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Grand Teton National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "yellowstone-national-park",
    "state": "wy",
    "name": "Yellowstone National Park",
    "lat": 44.6,
    "lng": -110.5,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Yellowstone National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "wind-river-range",
    "state": "wy",
    "name": "Wind River Range",
    "lat": 43.02,
    "lng": -109.5,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Wind River Range is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "bighorn-mountains",
    "state": "wy",
    "name": "Bighorn Mountains",
    "lat": 44.6,
    "lng": -107.38,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Bighorn Mountains is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "devils-tower",
    "state": "wy",
    "name": "Devils Tower",
    "lat": 44.5902,
    "lng": -104.7146,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Devils Tower is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "sawtooth-mountains-sawtooth-national-recreation-area",
    "state": "id",
    "name": "Sawtooth Mountains / Sawtooth National Recreation Area",
    "lat": 44.1,
    "lng": -114.93,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Sawtooth Mountains / Sawtooth National Recreation Area is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "craters-of-the-moon",
    "state": "id",
    "name": "Craters of the Moon",
    "lat": 43.4166,
    "lng": -113.5167,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Craters of the Moon is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "salmon-river-country",
    "state": "id",
    "name": "Salmon River Country",
    "lat": 45.18,
    "lng": -114.18,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Salmon River Country is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "grand-canyon-national-park",
    "state": "az",
    "name": "Grand Canyon National Park",
    "lat": 36.1069,
    "lng": -112.1129,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Grand Canyon National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "petrified-forest-national-park",
    "state": "az",
    "name": "Petrified Forest National Park",
    "lat": 34.91,
    "lng": -109.78,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Petrified Forest National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "sedona",
    "state": "az",
    "name": "Sedona",
    "lat": 34.8697,
    "lng": -111.761,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Sedona is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "horseshoe-bend-glen-canyon-area",
    "state": "az",
    "name": "Horseshoe Bend / Glen Canyon Area",
    "lat": 36.879,
    "lng": -111.51,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Horseshoe Bend / Glen Canyon Area is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "vermilion-cliffs",
    "state": "az",
    "name": "Vermilion Cliffs",
    "lat": 36.75,
    "lng": -111.88,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Vermilion Cliffs is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "superstition-mountains",
    "state": "az",
    "name": "Superstition Mountains",
    "lat": 33.43,
    "lng": -111.35,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Superstition Mountains is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "great-basin-national-park",
    "state": "nv",
    "name": "Great Basin National Park",
    "lat": 38.9833,
    "lng": -114.3,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Great Basin National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "valley-of-fire-state-park",
    "state": "nv",
    "name": "Valley of Fire State Park",
    "lat": 36.43,
    "lng": -114.515,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Valley of Fire State Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "red-rock-canyon",
    "state": "nv",
    "name": "Red Rock Canyon",
    "lat": 36.135,
    "lng": -115.427,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Red Rock Canyon is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "lake-tahoe",
    "state": "nv",
    "name": "Lake Tahoe",
    "lat": 39.0968,
    "lng": -120.0324,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Lake Tahoe is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "glacier-national-park",
    "state": "mt",
    "name": "Glacier National Park",
    "lat": 48.7596,
    "lng": -113.787,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Glacier National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "beartooth-highway-beartooth-mountains",
    "state": "mt",
    "name": "Beartooth Highway / Beartooth Mountains",
    "lat": 45.03,
    "lng": -109.42,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Beartooth Highway / Beartooth Mountains is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "flathead-lake",
    "state": "mt",
    "name": "Flathead Lake",
    "lat": 47.9,
    "lng": -114.1,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Flathead Lake is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "white-sands-national-park",
    "state": "nm",
    "name": "White Sands National Park",
    "lat": 32.779,
    "lng": -106.171,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "White Sands National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "carlsbad-caverns-national-park",
    "state": "nm",
    "name": "Carlsbad Caverns National Park",
    "lat": 32.1479,
    "lng": -104.5567,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Carlsbad Caverns National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "bisti-de-na-zin-wilderness",
    "state": "nm",
    "name": "Bisti / De-Na-Zin Wilderness",
    "lat": 36.26,
    "lng": -108.25,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Bisti / De-Na-Zin Wilderness is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "yosemite-national-park",
    "state": "ca",
    "name": "Yosemite National Park",
    "lat": 37.8651,
    "lng": -119.5383,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Yosemite National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "sequoia-kings-canyon",
    "state": "ca",
    "name": "Sequoia / Kings Canyon",
    "lat": 36.566,
    "lng": -118.773,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Sequoia / Kings Canyon is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "joshua-tree-national-park",
    "state": "ca",
    "name": "Joshua Tree National Park",
    "lat": 33.8734,
    "lng": -115.901,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Joshua Tree National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "death-valley-national-park",
    "state": "ca",
    "name": "Death Valley National Park",
    "lat": 36.5054,
    "lng": -117.0794,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Death Valley National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "eastern-sierra",
    "state": "ca",
    "name": "Eastern Sierra",
    "lat": 37.6,
    "lng": -118.95,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Eastern Sierra is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "mount-rainier-national-park",
    "state": "wa",
    "name": "Mount Rainier National Park",
    "lat": 46.8523,
    "lng": -121.7603,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Mount Rainier National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "north-cascades-national-park",
    "state": "wa",
    "name": "North Cascades National Park",
    "lat": 48.7718,
    "lng": -121.2985,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "North Cascades National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "olympic-national-park",
    "state": "wa",
    "name": "Olympic National Park",
    "lat": 47.8021,
    "lng": -123.6044,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Olympic National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "mount-hood",
    "state": "or",
    "name": "Mount Hood",
    "lat": 45.3735,
    "lng": -121.6959,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Mount Hood is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "columbia-river-gorge",
    "state": "or",
    "name": "Columbia River Gorge",
    "lat": 45.7,
    "lng": -121.7,
    "type": "Scenic area \u00b7 Outdoor recreation",
    "description": "Columbia River Gorge is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  },
  {
    "id": "crater-lake-national-park",
    "state": "or",
    "name": "Crater Lake National Park",
    "lat": 42.9446,
    "lng": -122.109,
    "type": "National park \u00b7 Trails \u00b7 Camping",
    "description": "Crater Lake National Park is saved as a Western Wilds destination. Use this page for your photos, trail notes, camping details, seasonal plans, and favorite activities.",
    "activities": [
      "Explore",
      "Hiking",
      "Photography",
      "Trip planning"
    ],
    "images": []
  }
];
