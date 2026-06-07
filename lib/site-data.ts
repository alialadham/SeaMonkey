export const contact = {
  email: "info@seamonkeynetwork.com",
  phoneDisplay: "00962799900914",
  whatsapp: "https://wa.me/962799900914",
  googleReview:
    "https://www.google.com/search?q=SeaMonkey+Wildlife+Jordan+Google+review",
  instagramPlaceholder: "https://instagram.com/seamonkey.network?igshid=OGQ5ZDc2ODk2ZA==",
};

export function whatsappBookingLink(expeditionTitle?: string) {
  const message = expeditionTitle
    ? `Hello SeaMonkey Wildlife, I'm interested in booking the ${expeditionTitle}.`
    : "Hello SeaMonkey Wildlife, I'm interested in booking a wildlife expedition.";

  return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappReviewLink() {
  const message =
    "Hello SeaMonkey Wildlife, I would like to leave a review about my expedition experience.";

  return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappFeedbackLink({
  rating,
  expedition,
  message,
  name,
  contactInfo,
  issue,
}: {
  rating: number;
  expedition: string;
  message: string;
  name?: string;
  contactInfo?: string;
  issue?: string;
}) {
  const feedback = [
    `Hello SeaMonkey Wildlife, I would like to share feedback about my expedition experience. Rating: ${rating}/5.`,
    expedition ? `Expedition: ${expedition}.` : "",
    issue ? `What went wrong: ${issue}.` : "",
    message ? `Details: ${message}.` : "",
    name ? `Name: ${name}.` : "",
    contactInfo ? `Contact: ${contactInfo}.` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `${contact.whatsapp}?text=${encodeURIComponent(feedback)}`;
}

export const assets = {
  // Approved local SeaMonkey logo fallback from the official brand asset.
  logo: "/assets/uploads/seamonkey-logo.jpg",
  // Replace hero video here.
  heroVideo: "/videos/seamonkey-hero.mp4",
  // Replace poster image with a compressed, owned hero still for production.
  heroPoster: "/assets/seamonkey/red-sea-coral.jpeg",
  aboutPrimary: "/assets/seamonkey/water-buffalo-reeds.jpeg",
  aboutSecondary: "/assets/seamonkey/arabian-oryx-herd.jpeg",
  aboutTertiary: "/assets/seamonkey/red-sea-turtle.jpeg",
};

export type GalleryItem = {
  title: string;
  location: string;
  href: string;
  image?: string;
  size: "wide" | "tall" | "square";
  placeholder?: "sand" | "ocean" | "olive";
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Arabian oryx",
    location: "Azraq",
    href: "/expeditions/arabian-oryx-photography-safari",
    image: "/assets/seamonkey/arabian-oryx-herd.jpeg",
    size: "wide",
  },
  {
    title: "Burrowing owl",
    location: "Southern trails",
    href: "/expeditions/camp-in-the-wild",
    image: "/assets/seamonkey/burrowing-owl.jpeg",
    size: "square",
  },
  {
    title: "Red Sea turtle",
    location: "Aqaba",
    href: "/expeditions/scuba-dive-snorkel-cruise-red-sea",
    image: "/assets/seamonkey/red-sea-turtle.jpeg",
    size: "tall",
  },
  {
    title: "Night dive marine life",
    location: "Aqaba",
    href: "/expeditions/night-dive",
    image: "/assets/seamonkey/night-dive-octopus.jpeg",
    size: "wide",
  },
  {
    title: "Rock hyrax",
    location: "Tafilah",
    href: "/expeditions/hike-in-the-wild",
    image: "/assets/seamonkey/rock-hyrax.jpeg",
    size: "square",
  },
  {
    title: "Water buffalo",
    location: "Azraq wetlands",
    href: "/expeditions/water-buffalo-birdwatching-trek",
    image: "/assets/seamonkey/water-buffalo-reeds.jpeg",
    size: "square",
  },
  {
    title: "Azraq wetlands",
    location: "Eastern Jordan",
    href: "/expeditions/water-buffalo-birdwatching-trek",
    image: "/assets/seamonkey/azraq-wetland-boardwalk.jpeg",
    size: "tall",
  },
  {
    title: "Tafilah mountains",
    location: "Dana region",
    href: "/expeditions/hike-in-the-wild",
    image: "/assets/seamonkey/dana-mountains.jpeg",
    size: "square",
  },
  {
    title: "Aqaba coral reefs",
    location: "Red Sea",
    href: "/expeditions/scuba-dive-snorkel-cruise-red-sea",
    image: "/assets/seamonkey/red-sea-coral.jpeg",
    size: "wide",
  },
];

export const faqs = [
  {
    question: "Is spotting wildlife guaranteed?",
    answer:
      "Wildlife sightings are never guaranteed because animals move freely in wild and semi-wild environments. The guides design each route to maximize your chances.",
  },
  {
    question: "What wildlife can we see in Jordan?",
    answer:
      "Depending on the trip, Jordan can reveal Arabian oryx, water buffalo, migratory birds, sea turtles, reef fish, raptors, rock hyrax, Nubian ibex, and other rare desert species.",
  },
  {
    question: "When is the best time to visit?",
    answer:
      "Spring and fall offer the most comfortable weather, but expeditions run year round when conditions are safe.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear sturdy outdoor clothing, sun protection, and trail shoes for hikes. Sea trips need towels and a light layer for the boat.",
  },
  {
    question: "Can solo travelers join?",
    answer:
      "Yes. Solo travelers can inquire about upcoming public group trips, or request a private trip when minimum group sizes are met.",
  },
  {
    question: "Can I bring pets?",
    answer:
      "No. Pets are not allowed inside reserves because they may reduce wildlife sightings and can create safety issues for animals and guests.",
  },
];
