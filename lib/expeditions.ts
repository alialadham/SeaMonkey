export type ExpeditionAccent = "safari" | "sea" | "mountain" | "camp" | "bird";
export type ExpeditionCategory =
  | "Scuba Diving"
  | "Snorkel and Mask"
  | "Hiking"
  | "Camping and Hiking"
  | "Safari";

export type ItineraryStep = {
  time: string;
  title: string;
  description: string;
};

export type WildlifeItem = {
  name: string;
  image: string;
  note: string;
};

export type Expedition = {
  slug: string;
  sourceUrl: string;
  title: string;
  location: string;
  type: string;
  tripType: string;
  categories: ExpeditionCategory[];
  duration: string;
  groupSize: string;
  difficulty?: string;
  bestTime?: string;
  wildlifeSummary: string;
  image: string;
  heroImage: string;
  galleryImages: string[];
  accent: ExpeditionAccent;
  overview: string[];
  routeHighlights: string[];
  itinerary: ItineraryStep[];
  wildlife: WildlifeItem[];
  whatToBring: string[];
  relatedSlugs: string[];
};

const officialImages = {
  // Uploaded SeaMonkey assets from 2026-06-07.
  oryxHero: "/assets/seamonkey/arabian-oryx-herd.jpeg",
  oryxDetail: "/assets/seamonkey/oryx-safari-vehicle.jpeg",
  oryxSecond: "/assets/seamonkey/oryx-guides.jpeg",
  buffaloHero: "/assets/seamonkey/water-buffalo-reeds.jpeg",
  buffaloDetail: "/assets/seamonkey/azraq-wetland-boardwalk.jpeg",
  birds: "/assets/seamonkey/burrowing-owl.jpeg",
  turtle: "/assets/seamonkey/red-sea-turtle.jpeg",
  marine: "/assets/seamonkey/red-sea-coral.jpeg",
  plane: "/assets/seamonkey/red-sea-turtle-wide.jpeg",
  hikeHero: "/assets/seamonkey/dana-mountains.jpeg",
  hikeTrail: "/assets/seamonkey/dana-mountains.jpeg",
  hikePortrait: "/assets/seamonkey/rock-hyrax.jpeg",
  nightHero: "/assets/seamonkey/night-dive-octopus.jpeg",
  nightDivers: "/assets/seamonkey/red-sea-turtle-wide.jpeg",
  nightMarine: "/assets/seamonkey/night-dive-octopus.jpeg",
  campHero: "/assets/seamonkey/dana-mountains.jpeg",
  campTrail: "/assets/seamonkey/rock-hyrax.jpeg",
  campWildlife: "/assets/seamonkey/burrowing-owl.jpeg",
  buffaloFish: "/assets/seamonkey/azraq-wetland-boardwalk.jpeg",
  burrowingOwl: "/assets/seamonkey/burrowing-owl.jpeg",
  rockHyrax: "/assets/seamonkey/rock-hyrax.jpeg",
};

export const expeditions: Expedition[] = [
  {
    slug: "arabian-oryx-photography-safari",
    sourceUrl: "https://seamonkeynetwork.com/arabian-oryx-photography-safari/",
    title: "Arabian Oryx Photography Safari",
    location: "Azraq, Jordan",
    type: "Vehicle Safari",
    tripType: "Safari",
    categories: ["Safari"],
    duration: "3 hours",
    groupSize: "Min 3 to Max 14",
    difficulty: "Easy vehicle safari",
    bestTime: "Year-round, best in soft morning light",
    wildlifeSummary: "Arabian oryx, onagers, gazelles, birds",
    image: officialImages.oryxHero,
    heroImage: officialImages.oryxHero,
    galleryImages: [officialImages.oryxDetail, officialImages.oryxSecond],
    accent: "safari",
    overview: [
      "Welcome to SeaMonkey Wildlife, where we invite you to experience the mesmerizing Arabian Oryx Photography Safari adventure. Our wildlife tour agency takes you on an unforgettable journey into the heart of the Jordanian desert, to witness Jordan's national animal.",
      "With an expert safari guide by your side, you'll embark on an exciting quest to spot onagers, graceful gazelles, an array of birds, and, of course, the iconic Arabian oryx.",
    ],
    routeHighlights: [
      "Visit the reserve entrance and visitors center to learn about Arabian oryx conservation.",
      "Continue by vehicle into desert habitat for photography and wildlife observation.",
      "Focus on reintroduced Arabian oryx and the wider conservation story of the species.",
    ],
    itinerary: [
      {
        time: "7:30 am",
        title: "Pick-up from Amman",
        description: "Pick-up from your designated location in Amman.",
      },
      {
        time: "9:00 am",
        title: "Reserve entrance and visitors center",
        description:
          "Arrival to the reserve's entrance; visit the visitors center to observe Arabian oryx and other animals up close in a captive setting to learn about their conservation.",
      },
      {
        time: "9:30 am",
        title: "Safari drive",
        description:
          "Embark on the thrilling safari to spot onagers, gazelles, birds, and the remarkable Arabian oryx.",
      },
      {
        time: "12:00 pm",
        title: "Safari concludes",
        description: "Safari concludes, and you'll meet your driver.",
      },
      {
        time: "12:15 pm",
        title: "Depart for Amman",
        description: "Depart for Amman.",
      },
      {
        time: "2:00 pm",
        title: "Drop-off",
        description: "Drop-off at your preferred location in Amman.",
      },
    ],
    wildlife: [
      {
        name: "Arabian oryx",
        image: officialImages.oryxHero,
        note: "Jordan's national animal and the star of the safari.",
      },
      {
        name: "Onagers and gazelles",
        image: officialImages.oryxSecond,
        note: "Desert species that may be spotted during the route.",
      },
      {
        name: "Birds",
        image: officialImages.birds,
        note: "Open desert and wetland routes can reveal diverse birdlife.",
      },
    ],
    whatToBring: [
      "Camera with charged batteries",
      "Comfortable outdoor clothing",
      "Sun protection",
      "Water",
      "Closed shoes",
    ],
    relatedSlugs: ["water-buffalo-birdwatching-trek", "hike-in-the-wild", "camp-in-the-wild"],
  },
  {
    slug: "scuba-dive-snorkel-cruise-red-sea",
    sourceUrl: "https://seamonkeynetwork.com/scuba-dive-or-snorkel-the-red-sea/",
    title: "Scuba Dive, Snorkel and Cruise the Red Sea",
    location: "Aqaba, Jordan",
    type: "Sea Safari",
    tripType: "Scuba Diving / Snorkel and Mask / Red Sea",
    categories: ["Scuba Diving", "Snorkel and Mask"],
    duration: "5 hours",
    groupSize: "No minimum required",
    difficulty: "Water activity; dive certification may apply",
    bestTime: "Year-round, weather dependent",
    wildlifeSummary: "Sea turtles, moray eels, lionfish, eagle rays, reef fish",
    image: officialImages.turtle,
    heroImage: officialImages.turtle,
    galleryImages: [officialImages.marine, officialImages.plane],
    accent: "sea",
    overview: [
      "Discover the enchanting underwater world of Jordan's Red Sea with SeaMonkey Wildlife marine exploration trip, catering to scuba divers, snorkelers, and boat riders alike.",
      "Encounter famous marine life, including sea turtles, moray eels, lionfish, stonefish, and graceful eagle rays. Though rare, whale sharks are sometimes spotted in the summer months.",
    ],
    routeHighlights: [
      "Depart from Ayla Marina by boat.",
      "Explore two dive or snorkel sites with natural reefs and artificial wrecks.",
      "Enjoy lunch on board before returning to the marina.",
      "Please do not make travel arrangements until an 18 hour surface interval from the last dive to abide by PADI rules and regulations for your safety.",
    ],
    itinerary: [
      {
        time: "11:00 am",
        title: "Boat departs",
        description: "Boat departs from Ayla Marina for the sea safari trip.",
      },
      {
        time: "12:00 pm",
        title: "First site",
        description: "Arrival at the first dive/snorkel site.",
      },
      {
        time: "12:15 pm - 1:00 pm",
        title: "First underwater session",
        description: "Divers and snorkelers explore the vibrant underwater world.",
      },
      {
        time: "1:00 pm - 1:30 pm",
        title: "Surface interval",
        description: "Surface interval, during which we head to the second dive/snorkel site.",
      },
      {
        time: "1:45 pm - 2:30 pm",
        title: "Second underwater session",
        description: "Continue exploring Jordan's marine life.",
      },
      {
        time: "2:45 pm",
        title: "Lunch on board",
        description: "Complimentary lunch is served on the boat for all passengers.",
      },
      {
        time: "3:30 pm",
        title: "Return cruise",
        description: "Start heading back to Ayla Marina.",
      },
      {
        time: "4:00 pm",
        title: "Arrival back",
        description: "Arrival back at Ayla Marina.",
      },
    ],
    wildlife: [
      {
        name: "Red Sea turtle",
        image: officialImages.turtle,
        note: "A signature Aqaba sighting when conditions are kind.",
      },
      {
        name: "Marine life",
        image: officialImages.marine,
        note: "Reef fish, moray eels, lionfish, stonefish, and eagle rays may be seen.",
      },
      {
        name: "Coral reefs",
        image: officialImages.plane,
        note: "Natural reefs and artificial wrecks help enhance coral habitat.",
      },
    ],
    whatToBring: [
      "Swimwear",
      "Towel",
      "Reef-safe sun protection",
      "Dive certification card if diving",
      "Light layer for the boat",
      "Waterproof camera if available",
    ],
    relatedSlugs: ["night-dive", "arabian-oryx-photography-safari", "water-buffalo-birdwatching-trek"],
  },
  {
    slug: "hike-in-the-wild",
    sourceUrl: "https://seamonkeynetwork.com/hike-in-thewild/",
    title: "Hike in the Wild",
    location: "Tafilah, Jordan",
    type: "Hiking",
    tripType: "Hiking",
    categories: ["Hiking"],
    duration: "5 hours",
    groupSize: "Min 6 to Max 20",
    difficulty: "Guided wilderness hike",
    bestTime: "Early morning departures",
    wildlifeSummary: "Rock hyrax, Nubian ibex, birds, raptors, reptiles",
    image: officialImages.hikeHero,
    heroImage: officialImages.hikeHero,
    galleryImages: [officialImages.hikeTrail, officialImages.hikePortrait],
    accent: "mountain",
    overview: [
      "Welcome to SeaMonkey Wildlife, where we invite you to embark on a thrilling hike in the wild, as we venture into Jordan's largest nature reserve, teeming with wildlife and natural wonders.",
      "After breakfast at the campsite, we begin our hike at 8 am, immersing ourselves in the stunning Jordanian wilderness. Along the way, we'll be on the lookout for rock hyrax and Nubian ibex.",
    ],
    routeHighlights: [
      "Early departure from Amman to reach the reserve by morning.",
      "A shuttle carries guests from the reserve entrance toward the campsite.",
      "The guided trail focuses on wilderness scenery, raptors, rock hyrax, and Nubian ibex.",
    ],
    itinerary: [
      {
        time: "4:00 am",
        title: "Depart from Amman",
        description: "Depart from Amman.",
      },
      {
        time: "7:00 am",
        title: "Reserve entrance",
        description: "Arrival at the reserve's entrance.",
      },
      {
        time: "7:30 am",
        title: "Breakfast",
        description: "Enjoy a hearty breakfast at the campsite.",
      },
      {
        time: "8:00 am",
        title: "Begin the hike",
        description: "Commence the hike into the Jordanian wilderness.",
      },
      {
        time: "1:00 pm",
        title: "Conclude the hike",
        description: "Conclude the hike.",
      },
      {
        time: "1:15 pm",
        title: "Shuttle return",
        description:
          "Shuttle picks you up from a village towards the end of your hike and takes you back to the campsite.",
      },
      {
        time: "1:30 pm",
        title: "Lunch",
        description: "Enjoy lunch at the campsite.",
      },
      {
        time: "2:00 pm",
        title: "Meet the driver",
        description: "Short 15-minute ride back to meet the driver.",
      },
      {
        time: "5:30 pm",
        title: "Expected arrival",
        description: "Expected arrival back in Amman.",
      },
    ],
    wildlife: [
      {
        name: "Rock hyrax",
        image: officialImages.rockHyrax,
        note: "A key lookout species on the mountain route.",
      },
      {
        name: "Nubian ibex",
        image: officialImages.campWildlife,
        note: "A remarkable inhabitant of Jordan's rugged terrain.",
      },
      {
        name: "Raptors",
        image: officialImages.hikeTrail,
        note: "Keep an eye on the sky during the hike.",
      },
    ],
    whatToBring: [
      "Comfortable hiking shoes",
      "Water",
      "Camera",
      "Sun protection",
      "Breathable hiking clothing",
      "Light jacket for early departure",
    ],
    relatedSlugs: ["camp-in-the-wild", "arabian-oryx-photography-safari", "water-buffalo-birdwatching-trek"],
  },
  {
    slug: "night-dive",
    sourceUrl: "https://seamonkeynetwork.com/night-drive/",
    title: "Night Dive",
    location: "Aqaba, Jordan",
    type: "Sea Safari",
    tripType: "Scuba Diving / Red Sea",
    categories: ["Scuba Diving"],
    duration: "3 hours",
    groupSize: "Min 4 to Max 12",
    difficulty: "Scuba divers only",
    bestTime: "Evening; winter timings are an hour earlier",
    wildlifeSummary: "Cephalopods, conger eels, lionfish, nocturnal marine life",
    image: officialImages.nightHero,
    heroImage: officialImages.nightHero,
    galleryImages: [officialImages.nightDivers, officialImages.nightMarine],
    accent: "sea",
    overview: [
      "Embark on an exhilarating Night Dive adventure with SeaMonkey Wildlife, offering a unique opportunity to explore the mesmerizing underwater world of Aqaba after the sun sets.",
      "Witness the captivating spectacle of marine life that emerges after dark, such as conger eels and lionfish on their nocturnal hunts. Night dives offer the best chance to spot elusive cephalopods, including squid, cuttlefish, and octopus.",
    ],
    routeHighlights: [
      "This activity is not available for snorkelers, but boat riders are welcome to join and witness the magic from the surface.",
      "Dive after dark to see nocturnal behavior that daytime reef trips cannot reveal.",
      "Winter timings are an hour earlier.",
    ],
    itinerary: [
      {
        time: "7:00 pm",
        title: "Boat departs",
        description: "Boat departs from Ayla Marina for the Night Dive Adventure.",
      },
      {
        time: "8:00 pm",
        title: "Night dive site",
        description: "Arrival at the Night Dive site.",
      },
      {
        time: "8:15 pm - 9:00 pm",
        title: "Night dive",
        description:
          "Dive into the captivating world of nocturnal marine life, including cephalopods and other fascinating creatures.",
      },
      {
        time: "9:00 pm",
        title: "Ascend",
        description: "Ascend from the night dive.",
      },
      {
        time: "10:00 pm",
        title: "Return to marina",
        description: "Arrival time back at Ayla Marina.",
      },
    ],
    wildlife: [
      {
        name: "Octopus and cephalopods",
        image: officialImages.nightHero,
        note: "Night dives offer the best chance to spot squid, cuttlefish, and octopus.",
      },
      {
        name: "Nocturnal marine life",
        image: officialImages.nightMarine,
        note: "Conger eels and lionfish may appear on nocturnal hunts.",
      },
      {
        name: "Divers at night",
        image: officialImages.nightDivers,
        note: "A focused evening experience for certified scuba divers.",
      },
    ],
    whatToBring: [
      "Dive certification card",
      "Swimwear",
      "Towel",
      "Warm layer for after the dive",
      "Personal dive gear if preferred",
      "Waterproof camera or dive light if available",
    ],
    relatedSlugs: ["scuba-dive-snorkel-cruise-red-sea", "camp-in-the-wild", "arabian-oryx-photography-safari"],
  },
  {
    slug: "camp-in-the-wild",
    sourceUrl: "https://seamonkeynetwork.com/camp-in-the-wild/",
    title: "Camp in the Wild",
    location: "Tafilah, Jordan",
    type: "Hiking and Camping",
    tripType: "Camping and Hiking",
    categories: ["Camping and Hiking"],
    duration: "1 night",
    groupSize: "Min 6 to Max 20",
    difficulty: "Overnight wilderness camp and guided hike",
    bestTime: "Year-round, weather dependent",
    wildlifeSummary: "Burrowing owls, birds, rock hyrax, Nubian ibex, possible nocturnal wildlife",
    image: officialImages.campHero,
    heroImage: officialImages.campHero,
    galleryImages: [officialImages.campTrail, officialImages.campWildlife],
    accent: "camp",
    overview: [
      "Welcome to SeaMonkey Wildlife, where we invite you to join our thrilling hike in the wild with a camping experience, as we venture into Jordan's largest nature reserve, brimming with wildlife and captivating landscapes.",
      "On the first day, our journey begins with a departure from Amman at 9 am, taking us south into the enchanting wilderness. Upon arrival at 12 pm, you'll settle in at the campsite and enjoy the freedom to explore the surrounding wilderness.",
      "On the second day, after a hearty breakfast, we embark on a guided hike where we will be on the lookout for the majestic rock hyrax and the agile Nubian ibex.",
    ],
    routeHighlights: [
      "Self-guided free exploration around the campsite on day one.",
      "Trails are famous for burrowing owls, birdwatching, and nature-centric activities.",
      "A guided second-day hike searches for rock hyrax and Nubian ibex.",
      "Stay within campsite boundaries at night for safety.",
    ],
    itinerary: [
      {
        time: "Day 1 - 9:00 am",
        title: "Depart from Amman",
        description: "Depart from Amman.",
      },
      {
        time: "Day 1 - 12:00 pm",
        title: "Reserve arrival",
        description: "Arrival at the reserve, check in and get on a 15 minute shuttle ride to the campsite.",
      },
      {
        time: "Day 1 - 12:15 pm",
        title: "Campsite exploration",
        description: "Arrival at the campsite, enjoy self guided free exploration.",
      },
      {
        time: "Day 1 - 2:00 pm",
        title: "Lunch",
        description: "Enjoy lunch.",
      },
      {
        time: "Day 1 - 2:30 pm - 7:30 pm",
        title: "Birdwatching and exploration",
        description: "Continue bird watching and exploration.",
      },
      {
        time: "Day 1 - 8:30 pm",
        title: "Bonfire",
        description: "Gather around fellow adventurers for a bonfire.",
      },
      {
        time: "Day 2 - 7:30 am",
        title: "Breakfast",
        description: "Enjoy a hearty breakfast at the campsite.",
      },
      {
        time: "Day 2 - 8:00 am",
        title: "Guided hike",
        description: "Commence the hike into the Jordanian wilderness.",
      },
      {
        time: "Day 2 - 1:00 pm",
        title: "Conclude hike",
        description: "Conclude the hike.",
      },
      {
        time: "Day 2 - 5:30 pm",
        title: "Expected arrival",
        description: "Expected arrival back in Amman.",
      },
    ],
    wildlife: [
      {
        name: "Burrowing owl",
        image: officialImages.burrowingOwl,
        note: "The official page notes that the trails are famous for burrowing owls.",
      },
      {
        name: "Rock hyrax",
        image: officialImages.rockHyrax,
        note: "A second-day guided hike target species.",
      },
      {
        name: "Nubian ibex",
        image: officialImages.campWildlife,
        note: "A remarkable inhabitant of the rugged terrain.",
      },
    ],
    whatToBring: [
      "Comfortable hiking shoes",
      "Overnight bag",
      "Jacket or warm layer",
      "Camera",
      "Sun protection",
      "Personal toiletries",
      "Reusable water bottle",
    ],
    relatedSlugs: ["hike-in-the-wild", "arabian-oryx-photography-safari", "water-buffalo-birdwatching-trek"],
  },
  {
    slug: "water-buffalo-birdwatching-trek",
    sourceUrl: "https://seamonkeynetwork.com/water-buffalo-birdwatching-trek/",
    title: "Water Buffalo and Bird Watching Trek",
    location: "Azraq, Jordan",
    type: "Hiking",
    tripType: "Hiking",
    categories: ["Hiking"],
    duration: "3 hours",
    groupSize: "Min 3 to Max 20",
    difficulty: "Mild hike",
    bestTime: "Morning wetland trek",
    wildlifeSummary: "Water buffalo, birds, Aphanius Sirhani freshwater fish",
    image: officialImages.buffaloHero,
    heroImage: officialImages.buffaloHero,
    galleryImages: [officialImages.buffaloDetail, officialImages.buffaloFish],
    accent: "bird",
    overview: [
      "Embark on a remarkable Water Buffalo & Bird-Watching Trek with SeaMonkey Wildlife at the pristine oasis of Jordan's eastern desert.",
      "This guided trek takes you through an ecological haven, where you'll encounter diverse bird species, serene water buffaloes, and have the chance to observe the unique Aphanius Sirhani, a fish species endemic to Jordan that is found nowhere else on earth except for this oasis.",
    ],
    routeHighlights: [
      "A mild 3-hour wetland hike through the eastern desert oasis.",
      "Designed for bird watching, water buffalo spotting, and freshwater fish observation.",
      "A route shaped around a rare wetland habitat and responsible nature observation.",
    ],
    itinerary: [
      {
        time: "7:30 am",
        title: "Pick-up from Amman",
        description: "Pick-up from your designated location in Amman.",
      },
      {
        time: "9:00 am",
        title: "Reserve entrance",
        description: "Arrival at the reserve's entrance.",
      },
      {
        time: "9:15 am",
        title: "Begin the trek",
        description:
          "Begin the 3-hour mild hike for bird watching, water buffalo spotting, and fresh water fish observation.",
      },
      {
        time: "12:15 pm",
        title: "Trek concludes",
        description: "Trek concludes, and you'll meet your driver.",
      },
      {
        time: "12:30 pm",
        title: "Depart for Amman",
        description: "Depart for Amman.",
      },
      {
        time: "2:00 pm",
        title: "Drop-off",
        description: "Drop-off at your preferred location in Amman.",
      },
    ],
    wildlife: [
      {
        name: "Water buffalo",
        image: officialImages.buffaloHero,
        note: "Serene water buffaloes are a central sighting on this trek.",
      },
      {
        name: "Birds",
        image: officialImages.buffaloDetail,
        note: "The wetland habitat attracts diverse bird species.",
      },
      {
        name: "Aphanius Sirhani",
        image: officialImages.buffaloFish,
        note: "An endemic freshwater fish found nowhere else on earth except for this oasis.",
      },
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Water",
      "Camera or binoculars",
      "Sun protection",
      "Light breathable clothing",
      "Respectful quiet for wildlife observation",
    ],
    relatedSlugs: ["arabian-oryx-photography-safari", "hike-in-the-wild", "camp-in-the-wild"],
  },
];

export function getExpeditionBySlug(slug: string) {
  return expeditions.find((expedition) => expedition.slug === slug);
}

export function getRelatedExpeditions(slugs: string[]) {
  return slugs
    .map((slug) => getExpeditionBySlug(slug))
    .filter((expedition): expedition is Expedition => Boolean(expedition));
}
