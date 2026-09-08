export const site = {
  name: "Drashti Patel",
  title: "Drashti Patel, Fashion Marketing & Brand Strategy",
  description:
    "Fashion marketing and brand strategy portfolio featuring campaigns, consumer insight, cultural storytelling and fashion-business research.",
  location: "Berlin, Germany",
  year: "2026",
};

export const nav = [
  { href: "#about", label: "About", id: "about" },
  { href: "#proof-map", label: "Proof map", id: "proof-map" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const hero = {
  eyebrow: "Fashion intelligence portfolio · Berlin",
  headlineBefore: "I engineer the logic behind ",
  headlineEm: "fashion desire.",
  intro:
    "I translate consumer behaviour and cultural signals into brand systems, campaigns and reasons to belong, combining structured thinking with a strong visual point of view.",
  actions: [
    { href: "#about", label: "Start with my profile", arrow: "↘", quiet: false },
    { href: "#proof-map", label: "Choose the proof you need", arrow: "→", quiet: true },
  ],
  image: {
    src: "/projects/engineering-fashion-editorial.png",
    alt: "Abstract editorial composition combining garment pattern cutting with engineering blueprint logic",
    captionLeft: "DP / Signature 01",
    captionRight: "Structure × instinct",
  },
  axis: ["Engineering", "Design", "Fashion business"] as const,
  manifesto:
    "Aspiring Brand & Marketing Strategist  |  Design + Business Background  |  Fashion, Lifestyle & E-commerce",
};

export const quickProfile = [
  { label: "Based in", value: "Berlin, Germany" },
  { label: "Current study", value: "MSc International Business Management" },
  { label: "Foundation", value: "Computer engineering + design experience" },
  { label: "Open to", value: "Internships · Working student · Collaborations" },
] as const;

export const about = {
  eyebrow: "01 / Professional profile",
  heading: "Design discipline. Business logic. Fashion point of view.",
  signature: ["DESIGN", "BUSINESS", "FASHION"] as const,
  lead: "My path began in computer engineering. The work that shaped my direction, however, was always about people, perception and visual communication.",
  paragraphs: [
    "During my bachelor's in Computer Engineering at SVIT, Vasad, I built hands-on experience in graphic design, packaging and UX through PRAKARSH, B&B Systems and Collabera. That experience taught me how visual decisions influence attention, usability and brand perception.",
    "I am now pursuing an MSc in International Business Management in Germany, bringing that design foundation together with consumer insight, marketing and commercial strategy for the fashion industry. I am most interested in the point where research becomes a clear brand decision, and that decision becomes a campaign people can recognise, feel and act on.",
  ],
  facts: [
    {
      label: "Now",
      lines: ["MSc International Business Management", "University of Europe for Applied Sciences"],
    },
    {
      label: "Foundation",
      lines: ["Bachelor's in Computer Engineering", "SVIT · Vasad, India"],
    },
    {
      label: "Direction",
      lines: ["Fashion marketing · Brand strategy", "Campaign and consumer insight"],
    },
  ],
  journeyHeading: "How the pieces connect",
  journeyCopy:
    "A concise career story for recruiters, not a list of unrelated experiences.",
  journey: [
    {
      label: "01 / Education",
      title: "SVIT",
      copy: "Computer engineering built structured problem-solving and analytical thinking.",
    },
    {
      label: "02 / Graphic design",
      title: "PRAKARSH",
      copy: "Visual communication experience developed creative judgment, consistency and design leadership.",
    },
    {
      label: "03 / Applied design",
      title: "B&B Systems · Collabera",
      copy: "Packaging, brand visuals, UX thinking, user flows and website prototyping.",
    },
    {
      label: "04 / Now",
      title: "Fashion × Business",
      copy: "Commercial strategy, consumer behaviour and cultural storytelling for fashion brands.",
    },
  ],
  profiles: [
    {
      label: "Best-fit roles",
      title: "Where this work positions me",
      items: [
        "Fashion or brand marketing",
        "Campaign and content strategy",
        "Social media and e-commerce content",
        "Consumer insight and trend research",
      ],
    },
    {
      label: "Strategy & research",
      title: "How I think",
      items: [
        "Brand positioning and audits",
        "Consumer-research synthesis",
        "Customer-journey analysis",
        "KPI and test-plan development",
      ],
    },
    {
      label: "Creative execution",
      title: "How I make it tangible",
      items: [
        "Campaign concepts and art direction",
        "Content systems and social rollouts",
        "Editorial presentation design",
        "Photoshop · Illustrator · PowerPoint",
      ],
    },
  ],
};

export const proofMap = {
  eyebrow: "02 / Recruiter proof map",
  heading: "Don't browse everything. Choose what you need to prove.",
  copy: "This portfolio works like a strategic fitting room: select the capability relevant to the role, then go directly to the strongest evidence.",
  routes: [
    {
      href: "#case-solene",
      className: "route-brand",
      number: "01",
      need: "If you need",
      title: "Brand positioning",
      open: "Open Solène",
    },
    {
      href: "#case-vanta",
      className: "route-campaign",
      number: "02",
      need: "If you need",
      title: "Campaign thinking",
      open: "Open VANTA",
    },
    {
      href: "#case-scrolling",
      className: "route-content",
      number: "03",
      need: "If you need",
      title: "Content psychology",
      open: "Open scrolling study",
    },
    {
      href: "#study-consumer",
      className: "route-research",
      number: "04",
      need: "If you need",
      title: "Consumer intelligence",
      open: "Open luxury research",
    },
  ],
  footer: ["One profile", "Four recruiter routes", "Evidence in one click"] as const,
};

export const featured = {
  eyebrow: "03 / Featured case studies",
  heading: "Strategy made visible.",
  copy: "Selected projects showing how I move from a fashion-business question to a coherent creative and commercial response.",
  note: "Each project has a custom visual system here. Open the PDF for the complete process and evidence.",
  cases: [
    {
      id: "case-solene",
      theme: "paper",
      number: "01",
      tags: "Brand strategy · Creative direction · Organic growth",
      title: "From Invisible to Irresistible",
      subtitle: "A conceptual rebrand for Solène",
      statement:
        "How can an unknown fashion label feel distinctive, coherent and desirable before it has recognition or a paid-media budget?",
      visual: "solene" as const,
      insight:
        "In fashion, weak identity creates interchangeability. The response was a decision system, not simply a new logo, built around one strategic axis: quietly powerful.",
      execution:
        "Positioning, naming logic, an eight-tone identity, Instagram architecture, a four-week launch campaign and a zero-budget growth test plan.",
      measure:
        "Proposed measures: saves, profile-to-follow conversion and qualified email sign-ups.",
      meta: ["Brand strategist & creative direction", "Self-initiated · Conceptual brand"],
      files: [
        {
          label: "Open visual case study",
          meta: "PDF presentation · 15 pages ↗",
          href: "/work/solene-visual-case-study.pdf",
        },
        {
          label: "Read the in-depth strategy",
          meta: "In-depth strategy PDF · 31 pages ↗",
          detail: true,
          href: "/work/solene-in-depth-strategy.pdf",
        },
      ],
    },
    {
      id: "case-vanta",
      theme: "night",
      number: "02",
      tags: "Campaign strategy · Art direction · Social rollout",
      title: "After Dark",
      subtitle: "From collection to campaign for VANTA",
      statement:
        "How can an Autumn/Winter collection become a reason to belong, not just another sequence of product posts?",
      visual: "vanta" as const,
      insight:
        "The audience tension became the campaign mechanism: dress for the version of yourself you are stepping into. Dusk, thresholds and movement made that transition visible.",
      execution:
        "Campaign platform, visual rules, hero Reel, carousel, interactive Stories, a ten-day launch sequence and a KPI framework from attention to action.",
      measure:
        "Proposed measures: completion, saves, product taps, collection visits and add-to-bag.",
      meta: [
        "Campaign strategist & creative concept developer",
        "Self-initiated · Fictional AW campaign",
      ],
      files: [
        {
          label: "Open visual case study",
          meta: "PDF presentation · 20 pages ↗",
          href: "/work/vanta-visual-case-study.pdf",
        },
      ],
    },
    {
      id: "case-scrolling",
      theme: "black",
      number: "03",
      tags: "Content psychology · Comparative research · Campaign system",
      title: "Why People Stop Scrolling",
      subtitle: "Zara × Jacquemus content strategy study",
      statement:
        "Two fashion brands stop the scroll through opposite psychological routes: controlled distance and emotional belonging.",
      visual: "scrolling" as const,
      insight:
        "Zara turns garments into visual puzzles; Jacquemus builds a warm, human world. The study translated those mechanisms into an original eight-post campaign architecture.",
      execution:
        "Brand comparison, content principles, campaign arc and testable hypotheses for minimal, emotional and hybrid posts.",
      measure:
        "Evaluation plan: saves, shares, story comments, profile visits and completion.",
      meta: ["Content strategist & researcher", "Independent comparative study"],
      files: [
        {
          label: "Open visual case study",
          meta: "PDF presentation · 13 pages ↗",
          href: "/work/zara-jacquemus-visual-case-study.pdf",
        },
      ],
    },
  ],
};

export const studies = {
  eyebrow: "04 / Selected strategic studies",
  heading: "Focused questions. Useful answers.",
  items: [
    {
      id: "study-consumer",
      number: "01",
      visual: "consumer" as const,
      label: "Consumer insight",
      title: "Who Is the Next Luxury Consumer?",
      copy: "A secondary-research study that reframes the next luxury consumer as an identity-led value auditor, and turns three insights into actions for emerging brands.",
      file: "Open complete study · 13 pages",
      href: "/work/next-luxury-consumer-study.pdf",
      skills: "Research synthesis · Fashion business · Strategic recommendation",
    },
    {
      id: "study-audit",
      number: "02",
      visual: "audit" as const,
      label: "Social & e-commerce",
      title: "House of Sunny: Social-to-Conversion Audit",
      copy: "A customer-journey audit examining the gap between visual attention, purchase confidence and post-purchase trust, followed by a repeatable content intervention.",
      file: "Open complete audit · 10 pages",
      href: "/work/house-of-sunny-audit.pdf",
      skills: "Social audit · Customer journey · Content optimisation",
    },
    {
      id: "study-editorial",
      number: "03",
      visual: "editorial" as const,
      label: "Fashion-business editorial",
      title: "From Product to Symbol",
      copy: "An independent editorial analysing how Telfar, Jacquemus and Wales Bonner build cultural equity through code, community, context and continuity.",
      file: "Open complete editorial · 6 pages",
      href: "/work/from-product-to-symbol-editorial.pdf",
      skills: "Editorial thinking · Cultural analysis · Brand strategy",
    },
  ],
};

export const research = {
  eyebrow: "05 / Current research",
  heading: "Work in progress, with a clear point of view.",
  copy: "These projects will move into Featured Work when the research, execution and recommendations are complete.",
  items: [
    {
      theme: "burgundy",
      mark: "fusion" as const,
      number: "R / 01 · Cultural strategy",
      title: "Translating Indian Craft into European Luxury Language",
      copy: "Cultural origin, contemporary translation, market relevance and responsible luxury storytelling.",
      tags: ["Indian × European", "Luxury", "Market fit"],
    },
    {
      theme: "navy",
      mark: "berlin" as const,
      number: "R / 02 · Trend forecasting",
      title: "Berlin Street Style Signals: A 2027 Trend Forecast",
      copy: "Street observation translated into coded signals, forecast directions and actions for fashion brands.",
      tags: ["Trend research", "Berlin", "2027"],
    },
  ],
};

export const contact = {
  eyebrow: "07 / Contact",
  heading: "Available for fashion marketing, brand and content opportunities in Berlin.",
  linkedin: "https://www.linkedin.com/in/pateldrashti04/",
  email: "datuwork@gmail.com",
  cvHref: "/cv.pdf",
  cvLabel: "Download my CV",
  footer: ["© 2026 Drashti Patel. All rights reserved.", "MEDIA KIT, 2026"] as const,
};
