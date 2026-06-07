import {
  getExpeditionBySlug,
  type Expedition,
} from "@/lib/expeditions";

type JournalTheme = "wetlands" | "dana" | "redsea" | "hike" | "oryx" | "night";

type PdfPage = {
  page: number;
  text: string;
};

type PdfImage = {
  src: string;
  alt: string;
  page: number;
  source: string;
};

type JournalDraft = {
  slug: string;
  expeditionSlug: string;
  title: string;
  label: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  pdfSource: string;
  locationLabel: string;
  theme: JournalTheme;
  quote: string;
  pdfPages: PdfPage[];
  pdfImages: PdfImage[];
  heroImage?: string;
};

export type JournalPost = JournalDraft & {
  expedition: Expedition;
  heroImage: string;
};

const journalDrafts: JournalDraft[] = [
  // Source: Buffalo PDF.pdf
  {
    slug: "water-buffalo-birdwatching-azraq",
    expeditionSlug: "water-buffalo-birdwatching-trek",
    title: "Water Buffalo and Bird Watching Trek",
    label: "Expedition 01 / Azraq Wetland Reserve",
    subtitle: "Water Buffalo and Bird-Watching Trek",
    excerpt:
      "Welcome to your Water Buffalo and Bird-Watching Trek at the Azraq Wetland Reserve in Jordan!",
    readTime: "6 min read",
    pdfSource: "Buffalo PDF.pdf",
    locationLabel: "Azraq Wetland Reserve",
    theme: "wetlands",
    quote: "Let's make memories and a difference!",
    heroImage: "/assets/seamonkey/water-buffalo-reeds.jpeg",
    pdfImages: [
      {
        src: "/assets/seamonkey/azraq-wetland-boardwalk.jpeg",
        alt: "Water buffalo and bird watching field image",
        page: 2,
        source: "Buffalo PDF.pdf",
      },
    ],
    pdfPages: [
      {
        page: 1,
        text: `Discover the Azraq Wetland Reserve: Home of the Water Buffalo and Azraq Killiﬁsh Sirhani
Welcome to your Water Buffalo and Bird-Watching Trek at the Azraq Wetland Reserve in Jordan! Get ready
for an unforgettable adventure where you'll encounter fascinating wildlife and learn about the importance of
their conservation.
The Mighty Water Buffalo: Guardians of the Wetlands
Did you know?
• The Azraq Wetland Reserve is one of the few places in the world where you can ﬁnd Water
Buffaloes.
• Water Buffaloes play a crucial role in maintaining the wetland's delicate ecosystem by grazing on
aquatic plants and creating channels for water ﬂow.
Why are Water Buffaloes important now?
Though these animals are relatively new to Jordan as they arrived with early Chechen settlers around 150
years ago, these gentle giants now help keep the wetlands healthy by preventing vegetation overgrowth,
which can threaten other wildlife species. By joining our trek, you're supporting efforts to protect these
magniﬁcent creatures.
Bird-Watching Extravaganza: Feathered Wonders of Azraq
Highlights of Azraq's Birdlife:
• Over 300 species of birds have been spotted here, making it a bird-watcher's paradise.
• Look out for iconic species like the Grey Heron, Great White Egret, and the rare Hoopoe.
Why does this wetland matter?
The Azraq Wetland Reserve is a vital stopover for migratory birds traveling between Europe, Asia, and Africa.
By conserving this habitat, we help ensure the survival of these incredible avian travelers.
The Enigmatic Azraq Killiﬁsh Sirhani
Meet the Azraq Killiﬁsh:
• The Azraq Killiﬁsh is endemic to Azraq's Wetland and is found no place else on earth.
• The Azraq Killiﬁsh, scientiﬁcally known as Aphanius Sirhani, is a small, colorful ﬁsh species unique to
the Azraq Wetland Reserve.
• This ﬁsh has adapted to the extreme conditions of the wetlands, including ﬂuctuating water levels
and high salinity.
Why is the Azraq Killiﬁsh important?
•The Azraq Killiﬁsh is an incredible example of adaptation to a specialized environment. Its existence is a
testament to the biodiversity of the Azraq Wetland Reserve, and it serves as a vital link in the wetland's
food web.
•Species like the Azraq Killiﬁsh Sirhani could be a very important candidate for scientists understanding
how certain species can beat the odds of survival.`,
      },
      {
        page: 2,
        text: `The Conservation Connection
What can you do to help?
• Respect the natural environment: Stay on designated paths, keep noise levels down to avoid
disturbing the wildlife and do not litter.
• Support local conservation efforts: Your visit contributes to protecting the Azraq Wetland Reserve
and its inhabitants.
Spread the Word:
Share your experiences and newfound knowledge about Azraq's wildlife with friends and family. The more
people who understand the importance of conservation, the brighter the future for these unique creatures
and their habitats.
We're excited to have you join our Water Buffalo and Bird-Watching Trek at the Azraq Wetland Reserve.
Together, we can explore the wonders of this unique ecosystem, appreciate its inhabitants, and contribute to
their conservation. Let's make memories and a difference!
For booking and more information, visit www.seamonkeynetwork.com
Stay connected with us on social media:
• Instagram: @seamonkey.network
                            @seamonkey.ofﬁcial
Thank you for choosing us to guide you on this incredible journey of wetland exploration and conservation!`,
      },
    ],
  },
  // Source: Camp PDF.pdf
  {
    slug: "camp-in-the-wild-tafilah",
    expeditionSlug: "camp-in-the-wild",
    title: "Camp in the Wild",
    label: "Expedition 02 / Dana Biosphere Reserve",
    subtitle: "Camp In The Wild",
    excerpt:
      "As the sun sets and the desert darkness descends, our campsite becomes a stage for the magical sounds of the night.",
    readTime: "6 min read",
    pdfSource: "Camp PDF.pdf",
    locationLabel: "Dana Biosphere Reserve",
    theme: "dana",
    quote:
      "Together, we will explore the wonders of this extraordinary desert landscape, appreciate its remarkable inhabitants, and actively contribute to their conservation.",
    heroImage: "/assets/seamonkey/dana-mountains.jpeg",
    pdfImages: [
      {
        src: "/assets/seamonkey/rock-hyrax.jpeg",
        alt: "Camp in the Wild field image",
        page: 2,
        source: "Camp PDF.pdf",
      },
    ],
    pdfPages: [
      {
        page: 1,
        text: `Dana Biosphere Reserve: A Desert Oasis
Did you know?
• Dana Biosphere Reserve is Jordan's largest nature reserve, renowned for its rugged canyons,
stunning cliffs, and diverse ecosystems.
• The reserve is home to a unique blend of ﬂora and fauna adapted to desert & semi desert life. The
Enchanting Sounds of the Night
What makes our campsite special?
As the sun sets and the desert darkness descends, our campsite becomes a stage for the magical sounds of
the night. Listen carefully, and you might hear the haunting calls of Arabian wolves echoing in the distance.
Their distant howls and yips serve as a testament to the desert's untamed beauty.
And more:
Beyond the Arabian wolves, the night brings a symphony of sounds from the reserve's diverse nocturnal
creatures. Listen for the soft rustling of small desert mammals, the chirping of insects, and the occasional
hoot of an owl. These sounds collectively paint a picture of the vibrant night-time ecosystem that thrives in
the heart of the Dana Biosphere Reserve.
Why do these sounds matter?
These elusive and rarely seen creatures play a vital role in the desert's ecosystem. Their presence serves as
a reminder of the delicate balance of life in this unique environment.
Meet the Desert's Enigmatic Creatures
Wildlife to look out for:
• Striped Hyenas: These elusive and rarely seen carnivores are vital to the reserve's ecosystem.
• Arabian wolves: As the sun sets, our campsite becomes a stage for the magical sounds of the
night. Listen carefully, and you might hear the haunting calls of Arabian wolves echoing in the
distance.
• Raptors: Watch majestic birds of prey soaring through the desert skies, including eagles, hawks,
owls and vultures.
• Rock Hyrax: Spot these charming small mammals as they bask on rocky outcrops.
• Desert Foxes: Encounter these crafty canids as they search for food under the desert moon.
• Small Animals: Discover the hidden world of reptiles, insects, and arachnids that thrive in the
desert's extreme conditions. Conservation at Dana Biosphere Reserve
Why conservation matters:
• Dana Biosphere Reserve is a sanctuary for these remarkable creatures and a stronghold for
biodiversity in the region.
• By visiting and supporting eco-friendly tourism, you contribute to the preservation of this unique
desert wilderness.
Protecting Rare Species:
• The Striped Hyena, in particular, is listed as near-threatened by the International Union for
Conservation of Nature (IUCN). Your participation in our camps plays a crucial role in their survival.`,
      },
      {
        page: 2,
        text: `Birding Highlights:
• Dana Biosphere Reserve is a bird watcher's paradise with over 215 bird species recorded.
• Keep an eye out for the majestic Bonelli’s Eagle, which soars high above the desert landscape, and
the Burrowing Owl, a desert dweller with striking plumage commonly spotted during the day.
Join Us on This Magical Journey!
We're thrilled to have you join our "Camp In The Wild" adventure at the Dana Biosphere Reserve. Together,
we will explore the wonders of this extraordinary desert landscape, appreciate its remarkable inhabitants,
and actively contribute to their conservation.
For booking and more information, visit www.seamonkeynetwork.com
Stay connected with us on social media:
• Instagram: @seamonkey.network
                            @seamonkey.ofﬁcial
Thank you for choosing us to guide you on this incredible journey of outdoor exploration and conservation!`,
      },
    ],
  },
  // Source: Dive PDF.pdf
  {
    slug: "red-sea-scuba-snorkel-cruise",
    expeditionSlug: "scuba-dive-snorkel-cruise-red-sea",
    title: "Scuba Dive, Snorkel and Cruise the Red Sea",
    label: "Expedition 03 / Aqaba",
    subtitle: "Aqaba's Coral Paradise",
    excerpt:
      "Welcome to your \"Scuba Dive, Snorkel, or Cruise the Red Sea\" Adventure in Aqaba, Jordan!",
    readTime: "7 min read",
    pdfSource: "Dive PDF.pdf",
    locationLabel: "Aqaba",
    theme: "redsea",
    quote:
      "These resilient corals offer hope through artiﬁcial evolution techniques, potentially increasing the overall resilience of coral reefs globally.",
    heroImage: "/assets/seamonkey/red-sea-coral.jpeg",
    pdfImages: [
      {
        src: "/assets/seamonkey/red-sea-turtle.jpeg",
        alt: "Scuba dive Red Sea field image",
        page: 3,
        source: "Dive PDF.pdf",
      },
    ],
    pdfPages: [
      {
        page: 1,
        text: `Explore the Wonders of the Red Sea
Aqaba's Coral Paradise
Welcome to your "Scuba Dive, Snorkel, or Cruise the Red Sea" Adventure in Aqaba, Jordan! Get ready to
discover the mesmerizing world beneath the waves and learn about the remarkable corals and marine life
that call this region home. Here's what makes the Red Sea, and particularly Aqaba, so unique.
Aqaba's Coral Superheroes: Combating Climate Change
Did you know?
The Red Sea's Remarkable Corals:
• The Red Sea is home to some of the world's most resilient corals, with Aqaba standing out as a
hotspot of diversity.
• These corals have adapted to extreme conditions, with the ability to withstand higher temperatures
than most other corals.
The Ice Age Connection:
• The theory is, during the last Ice Age, as the West froze and the Middle East heated up, the
connection between the Arabian Sea and the Red Sea, which was a high inlet connecting the 2
continents (Africa and Asia) created a barrier when water levels drop below it, separating the red sea
from the Arabian sea.
• The Red Sea essentially became a large, isolated lake, as most of the oceans water was stuck in the
west, as well as raising humidity in the Middle East, has left only the corals that could endure the
intense heat to survive.
Why Aqaba's Corals Are Unique Today:
• When the ice melted, water levels rose and ﬂooded back into the Red Sea, ﬂushing many of the Red
Sea's corals north.
• Today, in under a decade we lost 14% of the world's corals because of climate change.
• Corals are responsible for around 50% of the world's oxygen production, making them vital for life on
Earth.
• Aqaba's corals, which endured the heat, retained their genetics from the dawn of the Ice Age. Today,
they are exceptionally heat-resistant, capable of withstanding temperature increases of up to 7
degrees Celsius, being one of the very few group of corals from around the world that are resisting
climate change and surviving.
Why this matters
• Around the world, corals are struggling to survive from as little as a 2-degree Celsius increase in
water temperature, just like a human body going into a fever, highlighting the urgency of protecting
resilient coral ecosystems like Aqaba’s.
• Scientists worldwide study Aqaba's corals to understand how they can beneﬁt other corals
threatened by climate change.
• These resilient corals offer hope through artiﬁcial evolution techniques, potentially increasing the
overall resilience of coral reefs globally.`,
      },
      {
        page: 2,
        text: `Other Marine Life of Aqaba
•Sea Turtles: Aqaba's waters are home to magniﬁcent sea turtles, turtles that are commonly spotted are
Hawksbill turtles. Their presence is a testament to the health of these waters.
•Lion ﬁsh: Lion ﬁsh add a touch of exotic beauty. Lionﬁsh are invasive in many seas and oceans around
the world, seeing them in their natural, original ecosystem adds an element of beauty to our colourful reef.
•Whale Sharks: Aqaba annually welcomes these gentle giants in the summer months. Their presence
signiﬁes the health of the ecosystem and offers a thrilling experience for divers.
•Flying Fish: While cruising the red sea, be sure to scout out the waters surface to view some of Aqaba’s
most famous residence, the ﬂying ﬁsh. These ﬁsh are capable of jumping out of the water for a solid 200
meters per jump, appearing to “ﬂy” on the water’s surface, earning their name.
Why These Species Matter:
• Sea turtles: These reptiles play a vital role in maintaining the balance of marine ecosystems by
controlling sponge, jellyﬁsh and coral populations.
• Lion ﬁsh: These ﬁsh are essential to control high breeding ﬁsh species.
• Whale sharks: As apex predators, they indicate the overall health of Aqaba's marine environment by
preying on small ﬁsh as well as their eggs to keep the population under control.
• Flying Fish: Flying ﬁsh inﬂuence predator-prey dynamics, regulating the populations of their
predators. This in turn, helps maintain a balance within the ecosystem.
Conservation Efforts:
Combating Pollution
The Challenge:
• Pollution, including plastic waste and runoff, threatens Aqaba's marine ecosystem. Corals that have
survived millions of years and still evolving to survive today's planet, are now threatened by waste
pollution.
• Efforts are underway to reduce pollution and educate the community on sustainable practices.
We're excited to have you join us on this extraordinary journey! Together, we'll explore the wonders of this
unique coral paradise, appreciate its remarkable inhabitants, and actively contribute to its conservation.
For booking and more information, visit www.seamonkeynetwork.com
Stay connected with us on social media:
• Instagram: @seamonkey.network
                            @seamonkey.ofﬁcial
Thank you for choosing us to guide you on this incredible journey of underwater exploration and
conservation!`,
      },
    ],
  },
  // Source: Hike PDF.pdf.
  {
    slug: "hike-in-the-wild-tafilah",
    expeditionSlug: "hike-in-the-wild",
    title: "Hike in the Wild",
    label: "Expedition 04 / Dana Biosphere Reserve",
    subtitle: "Hike in the Wild",
    excerpt:
      "Welcome to the Hike in the Wild at the Dana Biosphere Reserve in Jordan!",
    readTime: "6 min read",
    pdfSource: "Hike PDF.pdf",
    locationLabel: "Dana Biosphere Reserve",
    theme: "hike",
    quote:
      "Together, we will uncover the wonders of this extraordinary desert landscape, appreciate its remarkable inhabitants, and actively contribute to their conservation.",
    heroImage: "/assets/seamonkey/dana-mountains.jpeg",
    pdfImages: [
      {
        src: "/assets/seamonkey/rock-hyrax.jpeg",
        alt: "Rock hyrax in Dana mountain habitat",
        page: 1,
        source: "Hike PDF.pdf",
      },
    ],
    pdfPages: [
      {
        page: 1,
        text: `A Hike in the Wild Adventure
Welcome to the Hike in the Wild at the Dana Biosphere Reserve in Jordan! Get ready to explore the stunning
desert & semi desert landscape, encounter fascinating wildlife, and learn about the signiﬁcance of
conservation in this unique environment.
Dana Biosphere Reserve: A Desert Wonderland
Did you know?
• Dana Biosphere Reserve is a treasure trove of natural beauty, known for its dramatic canyons,
majestic cliffs, and diverse ecosystems.
• This reserve boasts a rich variety of plant and animal species specially adapted to desert life.
• Jordan is situated at the crossroads of three major continents: Africa, Asia, and Europe. The
country's topography reﬂects inﬂuences from these diverse regions. Dana Nature Reserve is a prime
location to witness the remarkable diversity of landscapes within a relatively compact area.
Meet the Desert's Remarkable Inhabitants
Wildlife to Discover:
• Striped Hyenas: These enigmatic carnivores are a rare but important presence in the desert
landscape.
• Raptors: Keep an eye on the sky for graceful birds of prey, including eagles, hawks, and owls.
• Rock Hyrax: Spot these small, rock-loving mammals as they sunbathe on the rocky outcrops.
• Desert Foxes: Encounter these crafty canids as they forage for food under the starlit desert sky.
• Small Wonders: Delve into the hidden world of reptiles, insects, and arachnids that thrive in this
harsh environment.
Birdwatchers Delight: Dana Biosphere Reserve
Fascinating Facts for Bird Watchers:
• Dana Biosphere Reserve is a haven for bird watchers, with over 215 bird species recorded within its
boundaries.
• Keep an eye out for the majestic bonelli’s eagle, which soars high above the desert landscape, and
the burrowing owl, a desert dweller with striking plumage often seen during the day.
Why do these creatures matter?
• Striped Hyenas: Despite their elusive nature, Striped Hyenas play a vital role in maintaining the
reserve's ecological balance. They help clean up the ecosystem by scavenging.
• Arabian Wolves: Though rarely seen because of their shy nature, these wolves are the smallest
living wolf species, they are still however a keystone species as they control the entire food chain
from the very top, creating a domino effect all the way to the bottom of the chain.`,
      },
      {
        page: 2,
        text: `• Raptors: Birds of prey contribute to the control of rodent populations and play a critical role in the
desert's intricate food web.
• Rock Hyrax: These small mammals are essential prey for larger predators and add to the unique
biodiversity of the Dana Biosphere Reserve.
• Small Wonders: Reptiles, insects, and arachnids are integral to the desert's complex web of life,
ensuring the ecosystem's resilience.
Conservation at Dana Biosphere Reserve
Why conservation is essential:
• Dana Biosphere Reserve serves as a sanctuary for these extraordinary creatures and is a
stronghold for biodiversity in the region.
• Your visit and support of eco-friendly tourism directly contribute to preserving this exceptional desert
wilderness.
Protecting Rare Species:
• The Striped Hyena, particularly, is listed as near-threatened by the International Union for
Conservation of Nature (IUCN). Your participation in our hikes plays a crucial role in their survival.
We're excited to have you join our "Hike in the Wild" adventure at the Dana Biosphere Reserve! Together, we
will uncover the wonders of this extraordinary desert landscape, appreciate its remarkable inhabitants, and
actively contribute to their conservation.
For booking and more information, visit www.seamonkeynetwork.com
Stay connected with us on social media:
• Instagram: @seamonkey.network
                            @seamonkey.ofﬁcial`,
      },
    ],
  },
  // Source: Oryx PDF.pdf
  {
    slug: "arabian-oryx-field-safari",
    expeditionSlug: "arabian-oryx-photography-safari",
    title: "Arabian Oryx Photography Safari",
    label: "Expedition 05 / Shaumari Wildlife Reserve",
    subtitle: "Capture the Beauty of the Shaumari Wildlife Reserve",
    excerpt:
      "Prepare for a remarkable adventure where you'll witness the captivating Arabian oryx and discover the importance of their conservation.",
    readTime: "6 min read",
    pdfSource: "Oryx PDF.pdf",
    locationLabel: "Shaumari Wildlife Reserve",
    theme: "oryx",
    quote:
      "Preserving the Arabian oryx and its habitat is not only essential for maintaining the health and balance of the ecosystem but also for cultural heritage, tourism, and the overall well-being of the region.",
    heroImage: "/assets/seamonkey/arabian-oryx-herd.jpeg",
    pdfImages: [
      {
        src: "/assets/seamonkey/oryx-safari-vehicle.jpeg",
        alt: "Arabian oryx field image",
        page: 3,
        source: "Oryx PDF.pdf",
      },
    ],
    pdfPages: [
      {
        page: 1,
        text: `Arabian Oryx Safari
Capture the Beauty of the Shaumari Wildlife Reserve. Welcome to the Arabian Oryx Photography Safari at
the Shaumari Wildlife Reserve in Jordan! Prepare for a remarkable adventure where you'll witness the
captivating Arabian oryx and discover the importance of their conservation.
The Graceful Arabian Oryx: Desert Icons
Did you know?
• The Arabian oryx, known locally as "Al Maha," is a symbol of elegance and resilience in the desert.
• These magniﬁcent creatures are perfectly adapted to harsh desert conditions, with their distinctive
long horns and white coats.
Why are Arabian oryx important?
The Arabian oryx is a conservation success story. Once on the brink of extinction, they have been
successfully reintroduced into the wild, and your safari supports their continued survival.
1.Biodiversity: Arabian oryx contribute to the biodiversity of their habitat. They are part of a complex
web of interactions within the ecosystem, influencing the populations of other species and their
behaviors.
2.Keystone Species: As herbivores, they help regulate plant populations by consuming vegetation.
This prevents any single plant species from dominating an area and allows for a diverse range of
flora to flourish.
3.Seed Dispersal: Their feeding habits aid in seed dispersal, helping plants spread to new areas and
contributing to reforestation and maintaining vegetation cover, which is vital for soil stabilization.
4.Habitat Modification: Through their foraging and movement patterns, Arabian oryx can alter
habitats. This can create new niches for other organisms and potentially improve conditions for other
species.
5.Tourism and Conservation: The Arabian oryx is an iconic species that attracts ecotourism, bringing
economic benefits to the region. The attention and funds generated from ecotourism contribute to
conservation efforts, helping protect not only the oryx but also their entire ecosystem.
6.Cultural and Historical Value: The Arabian oryx is deeply embedded in the cultural and historical
heritage of the Arabian Peninsula. It holds symbolic importance and is a representation of the
region's wildlife and conservation efforts.
Preserving the Arabian oryx and its habitat is not only essential for maintaining the health and balance of the
ecosystem but also for cultural heritage, tourism, and the overall well-being of the region.`,
      },
      {
        page: 2,
        text: `Photography Highlights: Arabian oryx in their Natural Habitat
What to look for:
• Observe these gentle giants as they roam freely in the vast desert landscape.
• Capture their regal proﬁles against the backdrop of the rugged Jordanian desert.
Why photographing and visiting the reserve matters?
• Your photographs help raise awareness about the beauty of these creatures and their importance in
desert ecosystems.
• Your safari experience contributes to their ongoing conservation.
The Conservation Connection
How you can contribute:
• Respect the reserve's guidelines: Stay within designated areas and maintain a respectful distance
from the wildlife.
• Support local conservation efforts, by participating in this safari, you actively contribute to the
preservation of the Arabian oryx and their habitat.
• Share your stunning photographs and newfound knowledge about the Arabian oryx and Shaumari
Wildlife Reserve with friends an family. Together, we can inspire more people to appreciate and
conserve our natural world.
We're thrilled to have you join our Arabian Oryx Photography Safari at the Shaumari Wildlife Reserve!
Together, we can explore the wonders of this unique desert ecosystem, capture its beauty, and play a role in
conserving the Arabian oryx.
For booking and more information, visit www.seamonkeynetwork.com
Stay connected with us on social media:
• Instagram: @seamonkey.network
                            @seamonkey.ofﬁcial
Thank you for choosing us to guide you on this incredible journey of outdoor exploration and conservation!`,
      },
    ],
  },
  // Source: Night Dive PDF.pdf
  {
    slug: "night-dive-aqaba",
    expeditionSlug: "night-dive",
    title: "Night Dive",
    label: "Expedition 06 / Aqaba",
    subtitle: "Nocturnal Marine Life of Aqaba",
    excerpt:
      "Prepare to embark on an enchanting underwater journey where you'll explore the hidden wonders of the night.",
    readTime: "5 min read",
    pdfSource: "Night Dive PDF.pdf",
    locationLabel: "Aqaba",
    theme: "night",
    quote:
      "We are dedicated to sustainable diving practices that minimize our impact on the underwater environment, ensuring future generations can also experience the magic of night dives.",
    heroImage: "/assets/seamonkey/night-dive-octopus.jpeg",
    pdfImages: [
      {
        src: "/assets/seamonkey/night-dive-octopus.jpeg",
        alt: "Night dive field image",
        page: 2,
        source: "Night Dive PDF.pdf",
      },
    ],
    pdfPages: [
      {
        page: 1,
        text: `Night Dive
Welcome to your Night Dive adventure in Aqaba, Jordan! Prepare to embark on an enchanting underwater
journey where you'll explore the hidden wonders of the night, encounter elusive cephalopods like octopus,
cuttleﬁsh, and squid, as well as the fascinating Conger and Zebra eels. You'll also witness how other
creatures, like lionﬁsh, transform during their night hunts. Let's dive in and learn about the unique world that
comes alive after dark.
Nocturnal Marine Life of Aqaba
Creatures of the Night:
• Cephalopods: Delve into the realm of these remarkable creatures, including octopus, cuttleﬁsh, and
squid, as they emerge from their daytime hideouts to hunt and display their mesmerizing behaviors.
• Conger Eels: Encounter the elusive Conger eels as they gracefully navigate the reefs under the
cover of darkness, revealing their captivating presence.
• Zebra Eels: Marvel at the striking Zebra eels, known for their distinctive stripes, as they emerge
from their burrows and explore the nocturnal world.
• Lion ﬁsh Night Hunts: Witness the intriguing transformation of lion ﬁsh as they become active
predators under the cover of darkness, a stark contrast to their daytime demeanor.
Why Night Dives Matter
Did you know?
Night Dive Conservation:
• Night dives offer a unique opportunity to observe marine life that behaves differently after dark,
contributing to our understanding of these creatures.
• By practicing responsible diving and respecting marine life during night dives, you actively contribute
to the preservation of these delicate ecosystems.
Conservation Efforts: Protecting Aqaba's Marine Nightlife
The Challenge:
• Aqaba's marine life faces threats such as pollution, habitat degradation, and overﬁshing, which can
disrupt the delicate balance of nocturnal ecosystems.
Our Commitment:
• We are dedicated to sustainable diving practices that minimize our impact on the underwater
environment, ensuring future generations can also experience the magic of night dives.`,
      },
      {
        page: 2,
        text: `Join Us on This Extraordinary Nighttime Exploration!
We're thrilled to have you join our Night Dive Adventure in Aqaba. Together, we'll unveil the mysteries of the
nocturnal marine world, appreciate its unique inhabitants, and actively contribute to its conservation.
For booking and more information, visit www.seamonkeynetwork.com
Stay connected with us on social media:
• Instagram: @seamonkey.network
•                   @seamonkey.ofﬁcial
Thank you for choosing us to guide you on this incredible journey of underwater exploration, conservation,
and the allure of the night!`,
      },
    ],
  },
];

export const journalPosts: JournalPost[] = journalDrafts.map((post) => {
  const expedition = getExpeditionBySlug(post.expeditionSlug);

  if (!expedition) {
    throw new Error(`Missing expedition for journal post: ${post.slug}`);
  }

  return {
    ...post,
    expedition,
    heroImage: post.heroImage ?? expedition.heroImage,
  };
});

export function getJournalPostBySlug(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}

export function getJournalPostByExpeditionSlug(expeditionSlug: string) {
  return journalPosts.find((post) => post.expeditionSlug === expeditionSlug);
}
