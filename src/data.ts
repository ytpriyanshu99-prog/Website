import { StateWonder, Destination, Festival, LivingArt, Expert } from "./types";

export const STATES_DATA: StateWonder[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "NORTHERN INDIA",
    description: "The Land of Kings, where royal history meets the vast Thar Desert and vibrant bazaars.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtTu7FB_AnBxGCvZS1Zh9qZtazrM5iM90Hi8Gfdsp7YFW4OrfJx581T7CI-AxseeRq5B5orOl8IjwTsGKhhadkmMBPwN3YIFgqNVpWAARYJAozMMGnAhXYezXPbZ8XQEUvPtdEDpXbgL5RmKeG5CLlx41OId8HgDPDMwMvo0p96M-6RMcDvK15gtTEcGXMBRvli6aDLrBpDR9BvIhfH2KoJf6fB3inaPZirXX1g52PdpiXULUGxuAi4M3-Hei3lOdA-pNO9xB_iw",
    cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    highlights: ["Amber Palace, Jaipur", "Lake Pichola, Udaipur", "Mehrangarh Fort, Jodhpur", "Golden Fort sand dunes, Jaisalmer"]
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "SOUTHERN INDIA",
    description: "God's Own Country, defined by serene backwaters, palm-fringed canals, Ayurvedic healing, and lush spice plantations.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpr2vQN-Rp5Yi5pXB-6sztvuv9z9CqlPOQd78qjkqqU20KeykNC0eVChFiKpN6e6KPGfLgvoZABU9Yqp9DC0DzARHUt-DYwIOteGAwxJ7uTI2RlwPH4W_jT0GRk2HLWAPcna1OFAEIzaqD89hoe2lhM6_jWw0bRWlUIr22yUfAIj064F5m_gWB6cVCwIE_JZcETKocGkRVyQSc689m1AAJzjF7eYSoaNQqKLFmnesSsmWtXhJrHBwiXQMZ-DtSYB195dPYcWJfSQ",
    cities: ["Alleppey", "Kochi", "Munnar", "Wayanad"],
    highlights: ["Overnight Luxury Houseboat", "Chinese Fishing Nets, Kochi", "Tea Gardens of Munnar", "Periyar Wildlife Sanctuary"]
  },
  {
    id: "himachal",
    name: "Himachal",
    region: "HIMALAYAN FRONTIER",
    description: "Land of Snows, featuring dramatic peaks, precariously perched monasteries, quiet pine valleys, and spiritual trails.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdcjZgcOzAEe3IOMKo89Z6g9q60EgcsTxTFhqr2iRTOXg0Z4Xf1SNWUiDj7ftMyRhoQROv2A2PadAIjA9G_xwSIAf0iPjrGVGZ4GYOkSRtXT2MRR5j2cyBWf8FosB1jqTvlzUfXOMifZV1VZqKibmfmoYWkhV0UeSP4wPLke9NHkDkS6JwV6aaws8xlZCATIWCqBWmx5BF-ETnihur7yrMvHoUrEkGg_CqMZ-ZtdZqyxPn1XfD5-tkOEPolY2VycU0XMBIErr8ow",
    cities: ["Dharamshala", "Manali", "Shimla", "Spiti Valley"],
    highlights: ["Ki Monastery, Spiti", "Tsuglagkhang Temple Complex", "Solang Valley adventure treks", "Jakhoo Temple trail"]
  }
];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: "ranthambore",
    name: "Wilds of Ranthambore",
    tagline: "Experience the thrill of the tiger's call",
    category: "LUXURY SAFARI",
    description: "Experience the thrill of the tiger's call from the comfort of sustainably-led luxury camps in the heart of Rajasthan's dry deciduous forests.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCH-ueTP8LqwYsDtGXL7taDkRJ1E3lgWmFfqipCE6uzkQzwOFjFIxASPStZy43ovKbQQqyPWmzBv0EyyMX4ANbmvf1zsarhDkPNAJsqIL7wwtqC-PlQhwXUtIG6799PpmXtS8V_i8LMpQlFE9kkgxywyDE4wyM5PUYHtNJyjErKR8zzALcghFf4DXE5NgwJ8i8yBjPL43Mlv4IGHT4rKAqRkI0bXtkaQBsp1RBb_xCE-JVg0NzyC-utzCxBq29kMaRdQoBKvpXng",
    price: 2400,
    duration: "4 Days / 3 Nights",
    bestTime: "October to April",
    activities: [
      "Custom 4x4 open-top gypsy safaris led by naturalists",
      "Stargazing and fireside legacy talks",
      "Visits to the 10th-century majestic Ranthambore Fort perched above the forest",
      "Luxury canvas tent stay with local heritage decor"
    ],
    itineraryDays: [
      { day: 1, title: "Arrive & Lantern lit Welcome", desc: "Arrive at the sanctuary camp. Settle into your handcrafted canvas suite. Evening lantern-lit dinner with stories of local conservation." },
      { day: 2, title: "Dawn Tiger Safari & Fort Excursion", desc: "Set off at sunrise in a private open-air vehicle. Spot local flora, fauna, and hope for a glimpse of Machli's descendants. Afternoon visit to the historic fort ruins." },
      { day: 3, title: "Deep Forest Trail & Culinary Experience", desc: "A second safari focused on birdlife and rare leopards. In the evening, learn the secrets of Rajasthani smoked meat & lentil preparations from royal house cooks." },
      { day: 4, title: "Dawn Farewell Walk", desc: "A quiet nature walk along the buffer zone followed by a hearty estate breakfast before departure." }
    ]
  },
  {
    id: "varanasi",
    name: "Varanasi Eternal",
    tagline: "Navigate the oldest living city on Earth",
    category: "SPIRITUAL ODYSSEY",
    description: "Navigate the oldest continuously inhabited city on Earth, witnessing the powerful sunset Aarti ceremonies and the quiet sunrise life along the sacred riverbanks of the Ganges.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpGfthsAKtIFvwKVUp7EBvUtpiBAckScjtPN3vIrDtlWlvofeYqVpZmrV3SVeDdxPylIvZ-Fh2gPRmB27aPlQ0jOPdhqJGxRnIn_ae68g5uOZQHuK-8Hb3lKMn2ywXO_eH3Jd8QxKO3FAqMcbW8se79zee4f-X7yFIgx5l1qAd2pDbj195sWGFmpMf9zNSdUxz6Stkz_aQcLynlZ5MPoCUhXTb4Py-C8HGZR0di1tU6dz4E_aLO4ZrLOTAKlyoS7OEDvrNryxa5g",
    price: 1850,
    duration: "3 Days / 2 Nights",
    bestTime: "November to March",
    activities: [
      "Private hand-rowed boat ride during dawn and dusk prayers",
      "Vipassana and guided meditation overlooking the Ganges",
      "Explore the hidden, narrow, labyrinthine alleys of the old town",
      "Sitar and classical music private concert in a 200-year-old Haveli"
    ],
    itineraryDays: [
      { day: 1, title: "Dust to Flame (Evening Aarti)", desc: "Arrive at a luxury heritage riverfront hotel. Board a private wooden boat to witness the mesmerizing grand flame ritual at Dashashwamedh Ghat." },
      { day: 2, title: "Subah-e-Banaras & Sarnath", desc: "Awaken for a dawn boat ride as the city bathes. Witness devotional rituals. Afternoon trip to Sarnath, where Lord Buddha gave his first sermon." },
      { day: 3, title: "Weaver's Colony & Departure", desc: "Explore the ancient heritage of hand-loomed Banarasi silk in Kabir Chaura, interacting with hereditary master weavers. Departure in the afternoon." }
    ]
  },
  {
    id: "pondicherry",
    name: "Colonial Pondicherry",
    tagline: "Stroll through the pastel-hued French Quarter",
    category: "COASTAL CHARM",
    description: "Stroll through the pastel-hued French Quarter, where Mediterranean architecture meets Tamil soul, bougainvillea drapes golden walls, and artisanal cafes line quiet lanes.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWIrlfio7elfeJu9NVw4Vg18ueZpZ4DFyrql0SfaraMevzBv0xuej1l_iVK2Z_j3rSOPO30M6Xgo_yqarxkDTTDCfBb-PMqGz_UTwhcUEhLMjwZJHKmSp7Q7I6SSKhkjvP4NNOh53GIupub9mKPvgJbBljiPFs3X73kcbIFkKZ6RlTpm2E-ovqInLoRt9THKkBqkTCb9U1h5UgiINmO0mkvwqcQiZNk9btNBTh_M8RC9avPymJ-eJzcgF8-i4NnVO7WRW0whQzuA",
    price: 1200,
    duration: "3 Days / 2 Nights",
    bestTime: "December to February",
    activities: [
      "Architectural heritage walks on bicycle",
      "Private pottery sessions at Auroville craft clusters",
      "French-Tamil fusion cooking class",
      "Sunrise meditation on the rocky Promenade Beach"
    ],
    itineraryDays: [
      { day: 1, title: "French Quarter Bicycle Exploration", desc: "Check in to an elegant restored French townhouse. Leisurely cycle along cobblestone lanes, photographing mustard-colored colonial facades." },
      { day: 2, title: "Auroville & Conscious Craft", desc: "Visit the global township of Auroville and its golden Matrimandir. Participate in paper-making and clay pottery workshops with local artisans." },
      { day: 3, title: "Bouillabaisse & Tamil Spices", desc: "Attend an immersive cooking workshop blending traditional French techniques with South Indian spices before final transfers." }
    ]
  }
];

export const FESTIVALS_DATA: Festival[] = [
  {
    id: "pushkar",
    name: "Pushkar Camel Fair",
    date: "NOV 15 - 23, 2024",
    location: "Pushkar, Rajasthan",
    description: "A spectacular display of desert culture, livestock trade, and ancient tradition under the glowing desert full moon.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgIgEBaNl_bOuZit5xninpRV2G2NCFe_-cc6lhJXyVYYfHyeM8D1iVoBBrYuYY1S3x1L5hrteEyZOMIyLlLeY94WB9aC-rVAX25ucJHl4nUf1xZnefMb2U3UhA8DCq93GXasU0NITpoUlbWb_STr-4rZSPOxuBmBaT9hIwJTz4bMKr8_5CK169zqNE03A_yrNmfDBvgGp0RpQSAMAy23Oz8iRrAqHJhsmZJFSFhlJ8zVuLKcSlwxrLfC14CFxYap64DCcuuIedCw",
    tips: [
      "Hire our vetted storyteller for authentic dune walks",
      "Witness the traditional Rajasthani mustache competition",
      "Enjoy sunrise hot-air balloon flights over the desert"
    ]
  },
  {
    id: "holi-mathura",
    name: "Holi in Mathura",
    date: "MAR 25, 2025",
    location: "Mathura & Vrindavan, UP",
    description: "Experience the legendary festival of colors at its spiritual birthplace, overflowing with organic colored powder, devotion, and celestial joy.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDne35N0U6Y2Ghuk6-mQglyUnnpCUBpwcRmc6XrB5ApSsHvXQx98Qb2uxQ5prUOkUEkMUm6wkkwpNRCetUgUYNOEacRD3T8tZl2s9kmyPNHGjCqUC3Hlb4Cx1fYIOVfMlrYJdxVez04Z59W4WiwSZmzc16xlRfLKkt4f1o2WbVc8IFvs3HG-l5OfMJfKASCFUTgReU84JGN7zGPAVMT2pahFfMZUY_bOUK2mWfbRZ4aQf3iM1axVG4oIsPGuEhZqP45SdvGVId2Q",
    tips: [
      "Wear pristine white linen traditional outfits (provided in booking)",
      "Access reserved private viewing balconies at Banke Bihari temple",
      "Sip traditional herbal saffron thandai with local families"
    ]
  },
  {
    id: "hornbill",
    name: "Hornbill Festival",
    date: "DEC 1 - 10, 2024",
    location: "Kohima, Nagaland",
    description: "The ultimate showcase of Naga tribal heritage, intricate crafts, folk songs, traditional sports, and fierce mountain spirit.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn4hE7Rfiovwyh0-_Q6oUxHaM7m18hL9hMliqsvmHe8M3mzZokX2BteimMDrBJtTihBpj7VwncWy5iprj18PaIncjvomyjwRanViZ0PlN0D8Ch0PpATxW5qZhq5my9LEkAP_phjfRqEGt1zUyGzZYslKCJ7vRzRyaB4piXaHKBXGHrM0fEvmCf_N_Ch20srQcTGeRK0o9nS_Cki87NDUCwIkdIMIW6GQiRp3zz5WqXln7qip-0I9uLjAwZ6pJBWz_TnrswCO80JQ",
    tips: [
      "Stay in our warm premium homestays nested in Jakhama village",
      "Savor local smoked delicacies and wild organic honey wines",
      "Attend evening rock concerts showcasing Northeast's incredible music scene"
    ]
  }
];

export const LIVING_ARTS_DATA: LivingArt[] = [
  {
    id: "chikankari-masterclass",
    title: "Masterclasses",
    subtitle: " Lucknow Chikankari Embroidery",
    description: "One-on-one sessions with Padma Shri awarded artisans in their own studios. Trace the historical courtly art form of shadow-work embroidery on fine muslin fabric.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDelojtjoGzVV4raA0-prZ7pbUpiAmdd8_5tVWQgRK7cGysmPPoUYvawGj8Hf4tAGfvakoQ6ZpdMc-4l7sN8sn21sadiSSWNKH5c9flSeOwUT5l-VEbM4SeElK_6qn5seQbd3aFSejUowMGWSQF1b9jwTwnfaxmSY5nSDob1FXpD5KoklNWEjK-EOhNM1D0I3D5M4kFe0YCv9B9VyPhab7_BNDdWfhhJ3GS2mXe9WS4kAvVSzARWfKEiLSefXHxuo_edtnaoJgg7Q",
    iconName: "brush",
    duration: "1 Day (5 Hours)",
    price: 350
  },
  {
    id: "temple-trails",
    title: "Architectural Trails",
    subtitle: "Stone Semiotics of Southern Temples",
    description: "Deep dives into the semiotics, sacred geometry, and engineering of ancient Chola and Hoysala temples with resident historians.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKlDQ5bOxlZOQHNuevz22VfLKPnOvXljXs6dAzoPd-1BZwhH52w_6a75_F_CTflHN46of0Xmv0ind8Tqk8SKle-en3Gs6KKnIfUcaCJkjAuevlCjLHbrih-RcFpaRpRa4thfpSWqc6MEqW-rrQ51NLeRRWvQiEtZBCXzep2CDTERNsEQaF0gPsoDVV-7ldp5r4Xziv-RJO-FNtiB2R4bD-_siLQXHUa7qfZahp3VQ37TGAAOc0XX4bUq0YvwT5Qr9ThXNywkn9yA", // taj or similar temple-like majestic monument
    iconName: "temple_hindu",
    duration: "2 Days",
    price: 550
  }
];

export const EXPERTS_DATA: Expert[] = [
  {
    id: "vikram",
    name: "Vikram Singh",
    role: "Royal History Expert",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmslHiD7RA5aYK0amqCxyiDDT7XcCpQLxEXJOkKn00kvR0GDaY5tuN9eh14a-W1qrit8mUVdFrsU4fje8qGHlQcE8XUm-I3IT0a3owPX4oA3W5bswqk0Fb2Xri_L-wIybJLDDuH2S_CdA_ULhVcJPDddce4HTx6X6CEvyjuYiShcUU4jdUxULt3EHKyFIbCUe3pbelnQllijxpQw9N0viXxIF88zcC4k7BVBWyGAFPb74wvtnogPhCb57FS_OVGddMU-NiJg0SbQ",
    bio: "Descendant of Jaipur's nobility, specializing in Rajputana history and granting exclusive private palace access to hidden chambers.",
    languages: ["English", "Hindi", "French"],
    verified: true
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Culinary Storyteller",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSwqJ3rQopjWWAjpooV9CQbvXN7NINM2NIRb32WLbQoUm7mTqPuwkjzCysDsVIVAgNsohyv1R4DfAYFRTZiHT46Qdo-VHHnvePpfmUAyEmvPc0AOdx47T2FMtezWCTmL29CigqKDYBU_x9tg_OUF6B_76vxi7neeEDEWOQdcdadu3122vyYyupoW-OfOL3zZ7-RSh7xojWSKCfpZ5dCo-B9_H8yv1Gg82xLq0xlt6Hbd5QLldhRABdgDN9Rod3941g3P4bEPo7w",
    bio: "Anthropologist and food critic exploring the intersection of history, local geography, spices, and authentic subcontinental flavors.",
    languages: ["English", "Hindi", "Spanish"],
    verified: true
  },
  {
    id: "ananda",
    name: "Dr. Ananda Dev",
    role: "Ayurvedic Master",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWYeD980HdotgkMlo_YUn9OJwME8F_x4L_PGdFrnBM2H1vFrJa7gyZ9lxRg2H01KCRLS-7ivlGHTZWQfHUDhy23xziu0mKBLdI7stj1FfhuL7fr_bZ8UGFmzMIgFzVaXmak0DBZejNAftJK8cAHiBMfLgtWLvsB_pUPONMHlrctneTZJ_oxIMEwhrimrfLVqzA_MfqbCHZf1f7mgEvqVnGZIBDlj-rMqbY5P5keIdArO3mK_K5Prpo60iQeh5xKJ-aoXeI9pTY_Q",
    bio: "30 years of deep practice in the foothills of Rishikesh, guiding global guests through ancestral wellness, yoga sadhana, and holistic healing.",
    languages: ["English", "Sanskrit", "German"],
    verified: true
  },
  {
    id: "rohan",
    name: "Rohan Das",
    role: "Wildlife Naturalist",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-8EvIWORCgW8zb9eKPnu2_-FgE1KejXU7PKfOumC4b2asapkqNfyRN-wpZ27FmyLrHyJ4F3atHeBngShmGWCoqXCyTIKvpNDS0ZmC5HRtsPosJAQv-uxM2MnKmjuMTZma_UGAUtABOxchN2kxfBhvT8WvuEOpZVL6P6Jy8OFgmJ-C0_5iBV8dlxVvf76ektVHViPEoXSIQrV2Kdd-sE6XRt84H6cwof4zDyipVaxIsfo8vr_Vt-woMs9IUyasZqcR4SgZjPdScg",
    bio: "Expert tracker, photographer, and veteran conservationist with deep knowledge of Bengal tiger patterns and Eastern Himalayan avian species.",
    languages: ["English", "Hindi", "Bengali"],
    verified: true
  }
];
