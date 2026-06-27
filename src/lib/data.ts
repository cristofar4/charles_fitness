/**
 * Single source of truth for Charlie's Total Fitness Center.
 *
 * Visual note: each content item carries a `tone` (drives the bespoke generative
 * art system) and an optional `image` URL. The site ships with cinematic
 * generative art so it looks complete with zero external media. To layer in real
 * photography/video later, set `SHOW_PHOTOS` (see `media.ts`) and ensure the host
 * is reachable — the `image` URLs below are ready-to-use references.
 */

export type Tone = "electric" | "volt" | "aqua" | "ember" | "violet" | "mono";

export const site = {
  name: "Charlie's Total Fitness Center",
  shortName: "Charlie's",
  monogram: "CTF",
  tagline: "Train Like It Matters",
  intro:
    "Port Harcourt's premier fitness & wellness destination — where world-class training, luxury facilities and a relentless community forge total transformation.",
  city: "Port Harcourt",
  region: "Rivers State",
  country: "Nigeria",
  address: "Port Harcourt, Rivers State, Nigeria",
  phone: "+234 814 000 0000",
  phoneHref: "tel:+2348140000000",
  whatsapp: "+234 814 000 0000",
  email: "hello@charliestotalfitness.com",
  emailHref: "mailto:hello@charliestotalfitness.com",
  mapsUrl:
    "https://www.google.com/maps/place/Charlie's+Total+Fitness+Center",
  mapEmbed:
    "https://www.google.com/maps?q=Charlie's+Total+Fitness+Center+Port+Harcourt&output=embed",
  hours: [
    { day: "Monday – Friday", time: "05:00 – 23:00" },
    { day: "Saturday", time: "06:00 – 22:00" },
    { day: "Sunday", time: "07:00 – 21:00" },
  ],
  socials: [
    { label: "Instagram", handle: "@charliestotalfitness", href: "https://instagram.com" },
    { label: "Facebook", handle: "Charlie's Total Fitness", href: "https://facebook.com" },
    { label: "TikTok", handle: "@charliestotalfitness", href: "https://tiktok.com" },
    { label: "YouTube", handle: "Charlie's Total Fitness", href: "https://youtube.com" },
    { label: "X", handle: "@charliesfitness", href: "https://x.com" },
  ],
} as const;

export type NavLink = {
  label: string;
  href: string;
  group?: "main" | "facilities" | "more";
  desc?: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", group: "main", desc: "The Charlie's experience" },
  { label: "About", href: "/about", group: "main", desc: "Our story & philosophy" },
  { label: "Membership", href: "/membership", group: "main", desc: "Join the movement" },
  { label: "Programs", href: "/programs", group: "main", desc: "11 ways to train" },
  { label: "Personal Training", href: "/personal-training", group: "main", desc: "1:1 elite coaching" },
  { label: "Swimming Pool", href: "/swimming-pool", group: "facilities", desc: "Aquatic center" },
  { label: "Sports Facilities", href: "/sports-facilities", group: "facilities", desc: "Pitch, courts & more" },
  { label: "Spa & Wellness", href: "/spa-wellness", group: "facilities", desc: "Recover & restore" },
  { label: "Gallery", href: "/gallery", group: "more", desc: "Inside the center" },
  { label: "Testimonials", href: "/testimonials", group: "more", desc: "Transformation stories" },
  { label: "Pricing", href: "/pricing", group: "more", desc: "Plans & comparison" },
  { label: "Blog", href: "/blog", group: "more", desc: "Fitness & nutrition" },
  { label: "Contact", href: "/contact", group: "more", desc: "Visit & book a tour" },
];

export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Happy Members" },
  { value: 25, suffix: "+", label: "Certified Trainers" },
  { value: 14, label: "Luxury Facilities" },
  { value: 40, suffix: "+", label: "Weekly Classes" },
  { value: 11, label: "Training Programs" },
  { value: 8, suffix: "yrs", label: "Forging Champions" },
];

export const heroHighlights: { value: string; label: string }[] = [
  { value: "500+", label: "Happy Members" },
  { value: "25+", label: "Pro Trainers" },
  { value: "14", label: "Luxury Facilities" },
  { value: "40+", label: "Weekly Classes" },
];

export type Value = { index: string; title: string; description: string; tone: Tone };

export const whyChooseUs: Value[] = [
  {
    index: "01",
    title: "State-of-the-Art Equipment",
    description:
      "Imported Technogym & precision strength rigs, calibrated weekly. Train on the same machines as the world's elite — no waiting, no compromise.",
    tone: "electric",
  },
  {
    index: "02",
    title: "Certified Elite Trainers",
    description:
      "Internationally certified coaches who read your biomechanics, not a template. Every rep is supervised, every session intentional.",
    tone: "volt",
  },
  {
    index: "03",
    title: "Personalized Coaching",
    description:
      "Your body, your goals, your blueprint. We program around your life — built, measured and adjusted to the gram and the second.",
    tone: "aqua",
  },
  {
    index: "04",
    title: "Nutrition Guidance",
    description:
      "Performance kitchens and registered nutritionists turn food into fuel — meal architecture that compounds your results.",
    tone: "ember",
  },
  {
    index: "05",
    title: "World-Class Facilities",
    description:
      "An olympic-grade pool, spa, sauna, courts and a championship pitch under one roof. Luxury that makes showing up effortless.",
    tone: "violet",
  },
  {
    index: "06",
    title: "A Relentless Community",
    description:
      "500+ members who push, celebrate and hold the line with you. Energy is contagious here — and it's the kind that builds champions.",
    tone: "mono",
  },
];

export type Program = {
  slug: string;
  name: string;
  category: "Strength" | "Conditioning" | "Mind & Body" | "Cardio" | "Coaching";
  tagline: string;
  description: string;
  level: "All Levels" | "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  calories: string;
  trainer: string;
  highlights: string[];
  tone: Tone;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "strength-training",
    name: "Strength Training",
    category: "Strength",
    tagline: "Build a body that performs.",
    description:
      "Progressive overload programming on premium racks and platforms. Master the big lifts with coaches who refine every angle.",
    level: "All Levels",
    duration: "60 min",
    calories: "400–600 kcal",
    trainer: "Emeka Obi",
    highlights: ["Compound lifts", "Form mastery", "Strength periodization", "Free-weight floor"],
    tone: "electric",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "weight-loss",
    name: "Weight Loss",
    category: "Conditioning",
    tagline: "Burn smart. Transform completely.",
    description:
      "A metabolic system blending resistance, conditioning and nutrition to strip fat while protecting lean muscle.",
    level: "Beginner",
    duration: "45 min",
    calories: "500–800 kcal",
    trainer: "Ada Nwosu",
    highlights: ["Metabolic circuits", "Body recomposition", "Habit coaching", "Weekly measurements"],
    tone: "volt",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "bodybuilding",
    name: "Bodybuilding",
    category: "Strength",
    tagline: "Sculpt championship aesthetics.",
    description:
      "Hypertrophy-focused splits, mind-muscle precision and contest-grade nutrition for a physique that turns heads.",
    level: "Advanced",
    duration: "75 min",
    calories: "450–650 kcal",
    trainer: "Tunde Bello",
    highlights: ["Hypertrophy splits", "Posing coaching", "Contest prep", "Aesthetic detailing"],
    tone: "ember",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "hiit",
    name: "HIIT",
    category: "Conditioning",
    tagline: "Maximum effort. Minimum time.",
    description:
      "High-intensity intervals that spike your engine and keep burning long after the last round. Explosive, addictive, effective.",
    level: "Intermediate",
    duration: "30 min",
    calories: "400–700 kcal",
    trainer: "Chidi Okafor",
    highlights: ["EPOC afterburn", "Explosive power", "Team energy", "Heart-rate zones"],
    tone: "volt",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "cross-training",
    name: "Cross Training",
    category: "Conditioning",
    tagline: "Functional. Powerful. Complete.",
    description:
      "Constantly varied, functional movements at intensity — the discipline that builds athletes who are good at everything.",
    level: "All Levels",
    duration: "60 min",
    calories: "500–750 kcal",
    trainer: "Ngozi Eze",
    highlights: ["Functional fitness", "Olympic lifts", "Conditioning WODs", "Community scoring"],
    tone: "electric",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "aerobics",
    name: "Aerobics",
    category: "Cardio",
    tagline: "Move to the rhythm of results.",
    description:
      "Choreographed, high-energy cardio that lifts your mood as fast as your heart-rate. Endurance has never felt this good.",
    level: "All Levels",
    duration: "45 min",
    calories: "350–550 kcal",
    trainer: "Bisi Adeyemi",
    highlights: ["Cardio endurance", "Choreography", "Group energy", "Low-impact options"],
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "zumba",
    name: "Zumba",
    category: "Cardio",
    tagline: "A party that burns calories.",
    description:
      "Afro-Latin rhythms meet a serious sweat. Dance your way fit in the most joyful room in Port Harcourt.",
    level: "All Levels",
    duration: "50 min",
    calories: "400–600 kcal",
    trainer: "Bisi Adeyemi",
    highlights: ["Dance cardio", "Afrobeat sets", "Full-body burn", "All ages"],
    tone: "violet",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "yoga",
    name: "Yoga",
    category: "Mind & Body",
    tagline: "Strength, stillness, breath.",
    description:
      "Vinyasa, Hatha and restorative flows in a serene studio — build mobility, balance and a quieter mind.",
    level: "All Levels",
    duration: "60 min",
    calories: "200–400 kcal",
    trainer: "Zainab Musa",
    highlights: ["Mobility & flexibility", "Breathwork", "Stress relief", "Restorative flows"],
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "indoor-cycling",
    name: "Indoor Cycling",
    category: "Cardio",
    tagline: "Ride. Climb. Conquer.",
    description:
      "Cinematic spin in a sound-and-light studio. Climb virtual mountains and sprint to the beat on premium bikes.",
    level: "All Levels",
    duration: "45 min",
    calories: "450–700 kcal",
    trainer: "Chidi Okafor",
    highlights: ["Performance bikes", "Immersive lighting", "Power metrics", "Beat-synced rides"],
    tone: "electric",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    category: "Coaching",
    tagline: "Your goals. One-to-one.",
    description:
      "A dedicated elite coach, a bespoke program, and accountability that guarantees you never plateau.",
    level: "All Levels",
    duration: "60 min",
    calories: "Tailored",
    trainer: "Your dedicated coach",
    highlights: ["1:1 coaching", "Bespoke programming", "Progress tracking", "Priority booking"],
    tone: "volt",
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "nutrition-coaching",
    name: "Nutrition Coaching",
    category: "Coaching",
    tagline: "Fuel the transformation.",
    description:
      "Registered nutritionists translate your goals into meal architecture you'll actually enjoy — and sustain.",
    level: "All Levels",
    duration: "Ongoing",
    calories: "Optimized",
    trainer: "Dr. Halima Sani",
    highlights: ["Personalized macros", "Meal planning", "Supplement strategy", "Lifestyle coaching"],
    tone: "ember",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
  },
];

export type Facility = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tone: Tone;
  image: string;
  page?: string;
};

export const facilities: Facility[] = [
  {
    slug: "gym",
    name: "The Gym Floor",
    tagline: "Where strength is engineered.",
    description:
      "A cathedral of iron and innovation — premium free weights, Technogym selectorized machines, and a vast functional zone.",
    features: ["Technogym machines", "Olympic lifting platforms", "Functional turf", "24/7 climate control"],
    tone: "electric",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "swimming-pool",
    name: "Swimming Pool",
    tagline: "Glide through luxury.",
    description:
      "A temperature-controlled, multi-lane pool for laps, lessons and aqua fitness — the crown jewel of the center.",
    features: ["Multi-lane laps", "Swimming lessons", "Aqua aerobics", "Lifeguard on duty"],
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1600&auto=format&fit=crop",
    page: "/swimming-pool",
  },
  {
    slug: "spa",
    name: "Luxury Spa",
    tagline: "Recovery as ritual.",
    description:
      "Signature treatments and hydrotherapy in a serene sanctuary designed to melt away tension and accelerate recovery.",
    features: ["Signature treatments", "Hydrotherapy", "Couples suites", "Aromatherapy"],
    tone: "violet",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop",
    page: "/spa-wellness",
  },
  {
    slug: "steam-room",
    name: "Steam Room",
    tagline: "Breathe. Release. Restore.",
    description:
      "Eucalyptus-infused steam that opens the airways, soothes muscles and clears the mind after every session.",
    features: ["Eucalyptus infusion", "Detox & circulation", "Muscle recovery", "Tranquil ambiance"],
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1610501428930-3f6d5d5c6a0a?q=80&w=1600&auto=format&fit=crop",
    page: "/spa-wellness",
  },
  {
    slug: "sauna",
    name: "Finnish Sauna",
    tagline: "Heat that heals.",
    description:
      "Authentic dry-heat sauna to boost circulation, recovery and longevity — the elite athlete's secret weapon.",
    features: ["Authentic dry heat", "Cardiovascular boost", "Recovery & longevity", "Cedar interiors"],
    tone: "ember",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop",
    page: "/spa-wellness",
  },
  {
    slug: "massage",
    name: "Massage Therapy",
    tagline: "Hands that understand muscle.",
    description:
      "Sports, deep-tissue and relaxation massage from certified therapists who keep elite bodies performing.",
    features: ["Sports massage", "Deep tissue", "Relaxation", "Certified therapists"],
    tone: "violet",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop",
    page: "/spa-wellness",
  },
  {
    slug: "indoor-sports",
    name: "Indoor Sports",
    tagline: "Play at the highest level.",
    description:
      "Climate-controlled courts for badminton, table tennis, squash and more — competition any day of the week.",
    features: ["Badminton", "Table tennis", "Squash", "Tournament nights"],
    tone: "volt",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1600&auto=format&fit=crop",
    page: "/sports-facilities",
  },
  {
    slug: "football-pitch",
    name: "Football Pitch",
    tagline: "Where legends warm up.",
    description:
      "A pristine pitch for five-a-side leagues, training drills and the beautiful game under the lights.",
    features: ["5-a-side leagues", "Floodlit pitch", "Training drills", "Match nights"],
    tone: "volt",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600&auto=format&fit=crop",
    page: "/sports-facilities",
  },
  {
    slug: "basketball-court",
    name: "Basketball Court",
    tagline: "Own the hardwood.",
    description:
      "A full-size court with pro flooring for pickup games, leagues and skills clinics — bring your A-game.",
    features: ["Full-size court", "Pro flooring", "Leagues & pickup", "Skills clinics"],
    tone: "ember",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
    page: "/sports-facilities",
  },
  {
    slug: "restaurant",
    name: "Performance Restaurant",
    tagline: "Eat for the body you're building.",
    description:
      "A chef-led kitchen serving macro-balanced, delicious meals and smoothies engineered for your goals.",
    features: ["Macro-balanced menu", "Smoothie & juice bar", "Chef-led kitchen", "Post-workout fuel"],
    tone: "ember",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "lounge",
    name: "Members' Lounge",
    tagline: "Recover in style.",
    description:
      "A sophisticated social space to unwind, connect and recharge — Wi-Fi, coffee and great company included.",
    features: ["Premium seating", "Specialty coffee", "High-speed Wi-Fi", "Networking events"],
    tone: "mono",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "salon",
    name: "Beauty Salon",
    tagline: "Leave looking unstoppable.",
    description:
      "A full-service salon so you walk out as polished as you feel — grooming, styling and self-care in one place.",
    features: ["Hair & styling", "Grooming", "Nails & beauty", "Express services"],
    tone: "violet",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "kids-area",
    name: "Kids Area",
    tagline: "They play while you train.",
    description:
      "A safe, supervised and joyful space for children — so the whole family can make fitness a way of life.",
    features: ["Supervised care", "Play & activities", "Safe & secure", "Family memberships"],
    tone: "volt",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "business-centre",
    name: "Business Centre",
    tagline: "Work hard. Train harder.",
    description:
      "Private desks, meeting space and fast Wi-Fi — close a deal and crush a workout without leaving the building.",
    features: ["Private workstations", "Meeting rooms", "High-speed Wi-Fi", "Printing & services"],
    tone: "electric",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
];

export type Membership = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  unit: string;
  cadence: string;
  description: string;
  features: string[];
  popular?: boolean;
  tone: Tone;
  badge?: string;
};

export const memberships: Membership[] = [
  {
    slug: "monthly",
    name: "Monthly",
    tagline: "Total flexibility.",
    price: 35000,
    unit: "/month",
    cadence: "Billed monthly",
    description: "Full access, zero commitment. The perfect way to feel the Charlie's difference.",
    features: [
      "Full gym floor access",
      "40+ group classes / week",
      "Locker & towel service",
      "Sauna & steam room",
      "Member app & tracking",
    ],
    tone: "electric",
  },
  {
    slug: "quarterly",
    name: "Quarterly",
    tagline: "Build momentum.",
    price: 90000,
    unit: "/quarter",
    cadence: "₦30,000 / month — billed quarterly",
    description: "Three months to lock in the habit and start seeing the body respond.",
    features: [
      "Everything in Monthly",
      "1 personal training session",
      "Pool & aqua classes",
      "Nutrition starter plan",
      "Guest pass (1 / month)",
    ],
    tone: "aqua",
  },
  {
    slug: "annual",
    name: "Annual",
    tagline: "The transformation plan.",
    price: 300000,
    unit: "/year",
    cadence: "₦25,000 / month — best value",
    description: "A full year of total access at our best rate. This is where real change happens.",
    features: [
      "Everything in Quarterly",
      "Unlimited pool access",
      "4 personal training sessions",
      "Quarterly InBody assessment",
      "2 spa treatments included",
      "Priority class booking",
    ],
    popular: true,
    badge: "Most Popular",
    tone: "volt",
  },
  {
    slug: "vip",
    name: "VIP",
    tagline: "The total experience.",
    price: 75000,
    unit: "/month",
    cadence: "All-access, white-glove",
    description: "Concierge fitness — every facility, every service, every privilege, no limits.",
    features: [
      "Unlimited everything",
      "Dedicated personal trainer",
      "Monthly spa & massage",
      "Salon & grooming credits",
      "Restaurant dining credits",
      "Private locker & valet",
      "Bring a guest, anytime",
    ],
    badge: "Elite",
    tone: "ember",
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "A fitter workforce.",
    price: 28000,
    unit: "/seat / mo",
    cadence: "Volume pricing — 5 seats minimum",
    description: "Wellness programs that boost productivity, morale and retention for your team.",
    features: [
      "Discounted team seats",
      "Business Centre access",
      "Wellness workshops",
      "Team sports leagues",
      "Dedicated account manager",
    ],
    tone: "mono",
  },
  {
    slug: "student",
    name: "Student",
    tagline: "Strong starts young.",
    price: 20000,
    unit: "/month",
    cadence: "Valid student ID required",
    description: "Premium fitness at a student-friendly rate. Build the habit that lasts a lifetime.",
    features: [
      "Full gym floor access",
      "Group classes",
      "Off-peak pool access",
      "Member app & tracking",
      "Study-friendly lounge",
    ],
    tone: "violet",
  },
];

/** Feature comparison matrix used on /pricing and /membership. */
export const comparisonFeatures: { label: string; plans: Record<string, boolean | string> }[] = [
  { label: "Gym floor access", plans: { Monthly: true, Quarterly: true, Annual: true, VIP: true } },
  { label: "Group classes / week", plans: { Monthly: "40+", Quarterly: "40+", Annual: "Unlimited", VIP: "Unlimited" } },
  { label: "Sauna & steam", plans: { Monthly: true, Quarterly: true, Annual: true, VIP: true } },
  { label: "Swimming pool", plans: { Monthly: false, Quarterly: true, Annual: "Unlimited", VIP: "Unlimited" } },
  { label: "Personal training", plans: { Monthly: false, Quarterly: "1 / qtr", Annual: "4 / yr", VIP: "Unlimited" } },
  { label: "Nutrition coaching", plans: { Monthly: false, Quarterly: "Starter", Annual: "Full", VIP: "Full" } },
  { label: "Spa & massage", plans: { Monthly: false, Quarterly: false, Annual: "2 / yr", VIP: "Monthly" } },
  { label: "Salon & dining credits", plans: { Monthly: false, Quarterly: false, Annual: false, VIP: true } },
  { label: "Guest passes", plans: { Monthly: false, Quarterly: "1 / mo", Annual: "2 / mo", VIP: "Unlimited" } },
  { label: "Priority booking", plans: { Monthly: false, Quarterly: false, Annual: true, VIP: true } },
];

export type Trainer = {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string[];
  bio: string;
  tone: Tone;
  image: string;
};

export const trainers: Trainer[] = [
  {
    name: "Emeka Obi",
    role: "Head of Strength",
    specialty: "Powerlifting · Hypertrophy",
    experience: "12 years",
    certifications: ["NSCA-CSCS", "IPF Coach", "FMS Level 2"],
    bio: "A national powerlifting record-holder who turns raw potential into measured, repeatable strength.",
    tone: "electric",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ada Nwosu",
    role: "Transformation Coach",
    specialty: "Fat Loss · Body Recomposition",
    experience: "9 years",
    certifications: ["NASM-CPT", "Precision Nutrition L2", "Pre/Post-Natal"],
    bio: "Ada has guided 300+ members through life-changing transformations with science and empathy.",
    tone: "volt",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Chidi Okafor",
    role: "Conditioning Specialist",
    specialty: "HIIT · Indoor Cycling",
    experience: "8 years",
    certifications: ["ACE-CPT", "Schwinn Cycling", "TRX Certified"],
    bio: "The most electric room in the building belongs to Chidi — relentless energy, serious results.",
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Zainab Musa",
    role: "Mind & Body Lead",
    specialty: "Yoga · Mobility · Recovery",
    experience: "11 years",
    certifications: ["RYT-500", "FRC Mobility", "Breathwork Coach"],
    bio: "Zainab brings stillness and strength together — the antidote to the city's pace.",
    tone: "violet",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tunde Bello",
    role: "Bodybuilding Coach",
    specialty: "Aesthetics · Contest Prep",
    experience: "14 years",
    certifications: ["IFBB Pro Coach", "ISSA-CPT", "Posing Specialist"],
    bio: "Stage-tested and detail-obsessed, Tunde builds physiques that win — on stage and in life.",
    tone: "ember",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dr. Halima Sani",
    role: "Performance Nutritionist",
    specialty: "Nutrition · Longevity",
    experience: "10 years",
    certifications: ["RD", "PhD Nutrition Science", "ISSN-SNS"],
    bio: "Halima translates the latest science into food you'll love — the fuel behind every result.",
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  },
];

export type Transformation = {
  name: string;
  weeks: number;
  headline: string;
  result: string;
  quote: string;
  tone: Tone;
  before: string;
  after: string;
};

export const transformations: Transformation[] = [
  {
    name: "Ifeoma A.",
    weeks: 24,
    headline: "−18kg & a new mindset",
    result: "Lost 18kg, gained confidence",
    quote: "Charlie's didn't just change my body — it rebuilt how I see myself. I've never felt stronger.",
    tone: "volt",
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "David O.",
    weeks: 16,
    headline: "+9kg lean muscle",
    result: "Gained 9kg of lean muscle",
    quote: "The coaching is on another level. Every session had a purpose and the results speak for themselves.",
    tone: "electric",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Grace E.",
    weeks: 20,
    headline: "From couch to 10km",
    result: "Ran her first 10km",
    quote: "I arrived unable to run a lap. Twenty weeks later I crossed a 10km finish line. This place is magic.",
    tone: "aqua",
    before: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  tone: Tone;
};

export const testimonials: Testimonial[] = [
  {
    name: "Chinedu M.",
    role: "Annual Member · 2 years",
    quote:
      "The best fitness center in Port Harcourt, full stop. World-class equipment, trainers who actually care, and a community that pushes you.",
    rating: 5,
    tone: "electric",
  },
  {
    name: "Funmi A.",
    role: "VIP Member",
    quote:
      "From the pool to the spa to the restaurant — it's a complete lifestyle. I came for the gym and stayed for everything else.",
    rating: 5,
    tone: "ember",
  },
  {
    name: "Samuel T.",
    role: "Personal Training Client",
    quote:
      "My coach reads my body better than I do. I'm 40 and in the best shape of my life. Worth every naira.",
    rating: 5,
    tone: "volt",
  },
  {
    name: "Blessing N.",
    role: "Quarterly Member",
    quote:
      "The energy here is unmatched. The classes are addictive and the trainers remember your name and your goals.",
    rating: 5,
    tone: "aqua",
  },
  {
    name: "Kelechi U.",
    role: "Corporate Member",
    quote:
      "We enrolled our whole team. Productivity and morale are noticeably up. Charlie's made wellness part of our culture.",
    rating: 5,
    tone: "violet",
  },
  {
    name: "Aisha B.",
    role: "Student Member",
    quote:
      "Premium everything at a price I can afford as a student. The lounge is my second study spot. Obsessed.",
    rating: 5,
    tone: "mono",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Training" | "Nutrition" | "Wellness" | "Lifestyle";
  readTime: string;
  date: string;
  author: string;
  tone: Tone;
  image: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "build-strength-after-40",
    title: "How to Build Real Strength After 40",
    excerpt:
      "Age is no barrier to power. Here's the science-backed framework our coaches use to make members stronger every decade.",
    category: "Training",
    readTime: "6 min",
    date: "Jun 18, 2026",
    author: "Emeka Obi",
    tone: "electric",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "nigerian-meal-prep",
    title: "Macro-Friendly Nigerian Meal Prep",
    excerpt:
      "Jollof, egusi and suya can absolutely fuel a transformation. Our nutritionist shows you how to balance the plate.",
    category: "Nutrition",
    readTime: "5 min",
    date: "Jun 11, 2026",
    author: "Dr. Halima Sani",
    tone: "ember",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "recovery-secrets",
    title: "The Recovery Secrets of Elite Athletes",
    excerpt:
      "Sauna, sleep, mobility and massage — why what you do between sessions matters as much as the training itself.",
    category: "Wellness",
    readTime: "7 min",
    date: "Jun 04, 2026",
    author: "Zainab Musa",
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "swimming-for-fitness",
    title: "Why Swimming Is the Ultimate Full-Body Workout",
    excerpt:
      "Low impact, high reward. Discover how our aquatic program builds endurance, strength and calm all at once.",
    category: "Training",
    readTime: "4 min",
    date: "May 28, 2026",
    author: "Chidi Okafor",
    tone: "aqua",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "morning-routine",
    title: "The 5AM Routine That Changes Everything",
    excerpt:
      "Our most consistent members share the morning ritual that turns motivation into unbreakable discipline.",
    category: "Lifestyle",
    readTime: "5 min",
    date: "May 21, 2026",
    author: "Ada Nwosu",
    tone: "volt",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "hiit-vs-steady-state",
    title: "HIIT vs Steady-State: Which Burns More Fat?",
    excerpt:
      "We settle the debate with the evidence — and show you how to combine both for the fastest, most sustainable results.",
    category: "Training",
    readTime: "6 min",
    date: "May 14, 2026",
    author: "Chidi Okafor",
    tone: "violet",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1600&auto=format&fit=crop",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Where is Charlie's Total Fitness Center located?",
    answer:
      "We're in the heart of Port Harcourt, Rivers State. Tap 'Get Directions' on the Contact page to open Google Maps, or book a tour and we'll show you around in person.",
  },
  {
    question: "Can I try the center before committing?",
    answer:
      "Absolutely. Book a free guided tour and a complimentary day pass. Experience the gym floor, pool and facilities before you choose a plan.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes — one-to-one coaching with internationally certified trainers is available to all members, with sessions included in the Annual and VIP plans.",
  },
  {
    question: "Is the swimming pool included in membership?",
    answer:
      "Pool access is included from the Quarterly plan upwards, with unlimited access on Annual and VIP. Swimming lessons can be booked separately.",
  },
  {
    question: "Do you have facilities for families?",
    answer:
      "We do. A supervised Kids Area lets you train with peace of mind, and family memberships make fitness a shared lifestyle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Card, bank transfer and mobile payments are all welcome. Corporate and annual plans can be invoiced — just ask our membership team.",
  },
];

export type TimelineItem = { year: string; title: string; description: string };

export const timeline: TimelineItem[] = [
  {
    year: "2018",
    title: "The Vision",
    description: "Charlie's opens its doors with a single belief: Port Harcourt deserves world-class fitness.",
  },
  {
    year: "2020",
    title: "The Aquatic Center",
    description: "We add a temperature-controlled pool and launch swimming lessons for all ages.",
  },
  {
    year: "2022",
    title: "Total Wellness",
    description: "Spa, sauna, steam and massage transform us from a gym into a complete wellness destination.",
  },
  {
    year: "2024",
    title: "The Sports Complex",
    description: "Football pitch, basketball court and indoor sports make Charlie's a home for every athlete.",
  },
  {
    year: "2026",
    title: "500+ Strong",
    description: "A thriving community of 500+ members and 25+ trainers — and we're only getting started.",
  },
];

export const galleryFilters = [
  "All",
  "Gym",
  "Pool",
  "Classes",
  "Spa",
  "Sports",
  "Community",
] as const;

export type GalleryItem = {
  id: number;
  category: (typeof galleryFilters)[number];
  caption: string;
  tone: Tone;
  span: "tall" | "wide" | "square";
  image: string;
};

export const gallery: GalleryItem[] = [
  { id: 1, category: "Gym", caption: "The strength floor", tone: "electric", span: "tall", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, category: "Pool", caption: "Lap lanes at dawn", tone: "aqua", span: "wide", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, category: "Classes", caption: "HIIT in full flight", tone: "volt", span: "square", image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, category: "Spa", caption: "Recovery sanctuary", tone: "violet", span: "tall", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, category: "Sports", caption: "Under the floodlights", tone: "volt", span: "wide", image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, category: "Gym", caption: "Iron & innovation", tone: "electric", span: "square", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, category: "Community", caption: "The Charlie's family", tone: "ember", span: "wide", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, category: "Classes", caption: "Flow & breath", tone: "aqua", span: "tall", image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop" },
  { id: 9, category: "Sports", caption: "Own the court", tone: "ember", span: "square", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop" },
  { id: 10, category: "Spa", caption: "Heat that heals", tone: "ember", span: "square", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop" },
  { id: 11, category: "Pool", caption: "Aqua fitness", tone: "aqua", span: "wide", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop" },
  { id: 12, category: "Community", caption: "Stronger together", tone: "volt", span: "tall", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop" },
];
