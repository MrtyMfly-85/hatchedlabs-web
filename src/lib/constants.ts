export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hatchedlabs.ai";

export const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwhwSuw0kc_v8kWhkN2TSjmsqsj9KeL12sMwqOG_BSbBaAkV-MLUeyc2yN6oMfcHjtieg/exec";

export type TierId = "pro" | "elite";
export type PersonaId =
  | "real_estate"
  | "executive_assistant"
  | "research_analyst"
  | "content_creator"
  | "business_operator"
  | "practice_manager"
  | "custom";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
  { href: "/about", label: "About" },
];

export const tiers = {
  pro: {
    id: "pro" as TierId,
    name: "Pro",
    engine: "Advanced AI Engine With Custom Personality",
    support: "Priority email support (24-hour response)",
    description:
      "For operators who want a dedicated AI assistant that handles research, recurring work, and daily follow-through.",
    ctaHref: "/get-started?tier=pro",
    features: [
      "Custom personality and knowledge base",
      "Available 24/7 via Telegram",
      "Web search and real-time research",
      "Browser access for live website work",
      "Background tasks and scheduled reports",
      "Multi-tasking with sub-agents",
      "Dedicated agent email inbox",
      "Up to 15 automated tasks",
      "Priority email support",
    ],
  },
  elite: {
    id: "elite" as TierId,
    name: "Elite",
    engine: "Advanced AI Engine With Custom Personality",
    support: "Same-day priority support",
    description:
      "For leaders who want deeper intelligence, inbox and calendar execution, and custom workflows built around how they work.",
    ctaHref: "/get-started?tier=elite",
    features: [
      "Everything in Pro",
      "Full email integration",
      "Calendar access and management",
      "Custom skills and industry workflows",
      "Unlimited automated tasks",
      "Same-day priority support",
      "Premium integrations and custom tooling",
      "Dedicated inbox plus personal email/calendar integration",
    ],
  },
};

export const pricingComparisonRows = [
  ["Telegram access", "Included", "Included"],
  ["Web research and browsing", "Included", "Included"],
  ["Agent inbox", "Dedicated inbox", "Dedicated inbox + personal integration"],
  ["Calendar support", "Not included", "Included"],
  ["Automated tasks", "Up to 15", "Unlimited"],
  ["Custom skills", "Core setup", "Industry-specific workflows"],
  ["Support", "24-hour response", "Same-day priority"],
];

export const pricingFaqs = [
  {
    question: "Is there a setup fee?",
    answer:
      "There is a one-time setup fee that covers onboarding, imprint review, initial configuration, custom knowledge base loading, and deployment. It is waived with an annual commitment.",
  },
  {
    question: "Can I upgrade from Pro to Elite later?",
    answer:
      "Yes. We can upgrade your assistant once you are ready for inbox, calendar, and premium workflow support.",
  },

];

export const serviceCategories = [
  {
    title: "Research & Analysis",
    items: ["Market scans", "Competitive tracking", "Briefing memos", "Source-backed summaries"],
  },
  {
    title: "Email & Communication",
    items: ["Inbox triage", "Draft replies", "Follow-ups", "VIP escalation handling"],
  },
  {
    title: "Scheduling & Calendar",
    items: ["Meeting coordination", "Prep notes", "Agenda creation", "Calendar hygiene"],
  },
  {
    title: "Content Creation",
    items: ["LinkedIn posts", "Newsletters", "Thought starters", "Repurposed content"],
  },
  {
    title: "Task Automation",
    items: ["Recurring reminders", "Weekly reports", "Daily briefings", "Status tracking"],
  },
  {
    title: "Web Monitoring",
    items: ["News alerts", "Competitor movement", "Listing checks", "Opportunity spotting"],
  },
  {
    title: "Custom Workflows",
    items: ["CRM updates", "Pipeline summaries", "Operations dashboards", "Industry-specific automations"],
  },
];

export const industryUseCases = [
  {
    industry: "Real Estate",
    useCase:
      "Track listings, monitor neighborhoods, draft outreach, and build polished client-ready market updates.",
  },
  {
    industry: "Professional Services",
    useCase:
      "Handle intake, prepare meeting briefs, keep projects moving, and maintain a sharper client communication rhythm.",
  },
  {
    industry: "Founders & Executives",
    useCase:
      "Protect focus time, summarize moving parts, and keep inbox, calendar, and research from fragmenting the day.",
  },
  {
    industry: "Small Business Owners",
    useCase:
      "Support follow-up workflows, operational reporting, and scheduling coordination.",
  },
];

export const values = [
  {
    title: "Privacy",
    body: "Your assistant should feel personal and controlled, not like a shared commodity product with unclear boundaries.",
  },
  {
    title: "Quality",
    body: "We tune for reliability, useful execution, and white-glove setup instead of raw feature checklists.",
  },
  {
    title: "Personalization",
    body: "Every deployment starts with your imprint so the assistant reflects how you work, communicate, and prioritize.",
  },
];

export const taskOptions = [
  "Email",
  "Scheduling",
  "Research",
  "Content creation",
  "Data entry",
  "Client follow-up",
  "Social media",
  "Reporting",
  "Other",
];

export const toolOptions = [
  "Gmail",
  "Outlook",
  "Google Calendar",
  "Slack",
  "Notion",
  "Trello",
  "Salesforce",
  "HubSpot",
  "Other",
];

export const personalityWordOptions = [
  "Professional",
  "Friendly",
  "Authoritative",
  "Creative",
  "Approachable",
  "Analytical",
  "Bold",
  "Empathetic",
  "Efficient",
  "Witty",
  "Trustworthy",
  "Innovative",
];

export const communicationStyles = [
  { value: "casual", label: "Casual & friendly" },
  { value: "professional", label: "Professional & polished" },
  { value: "direct", label: "Direct & efficient" },
  { value: "warm", label: "Warm & supportive" },
];

export const personas = {
  real_estate: {
    id: "real_estate" as PersonaId,
    emoji: "🏠",
    name: "Real Estate Pro",
    short: "Listings, market research, client comms",
    defaults: {
      businessIndustry: "Real estate",
      typicalDay:
        "Managing listings, responding to clients, tracking market shifts, and coordinating showings across a fast-moving calendar.",
      tasks: ["Email", "Scheduling", "Research", "Client follow-up"],
      communicationStyle: "professional",
      communicationNotes:
        "Confident, responsive, and polished with clients. Clear next steps always matter.",
      tools: ["Gmail", "Google Calendar", "Notion"],
      topWish: "Help me stay ahead of listings, follow-ups, and market context without dropping details.",
      audience:
        "Home buyers, sellers, investors, and referral partners who expect speed and trust.",
      personalityWords: ["Professional", "Approachable", "Trustworthy"],
      additionalNotes:
        "Prioritize responsiveness, local market insight, and organized deal flow.",
    },
  },
  executive_assistant: {
    id: "executive_assistant" as PersonaId,
    emoji: "💼",
    name: "Executive Assistant",
    short: "Calendar, email triage, meeting prep",
    defaults: {
      businessIndustry: "Executive support",
      typicalDay:
        "Balancing inbox priorities, coordinating meetings, preparing context, and protecting focus time for leadership.",
      tasks: ["Email", "Scheduling", "Reporting"],
      communicationStyle: "direct",
      communicationNotes:
        "Crisp, calm, and highly organized. Surface priorities fast and avoid unnecessary noise.",
      tools: ["Gmail", "Google Calendar", "Slack"],
      topWish: "Help me keep the principal focused while nothing important slips.",
      audience: "Executives, internal teams, board stakeholders, and external partners.",
      personalityWords: ["Efficient", "Professional", "Trustworthy"],
      additionalNotes:
        "Treat time as a premium asset. Confirm details, resolve ambiguity, and maintain clean follow-through.",
    },
  },
  research_analyst: {
    id: "research_analyst" as PersonaId,
    emoji: "📊",
    name: "Research Analyst",
    short: "Market monitoring, reports, data synthesis",
    defaults: {
      businessIndustry: "Research and analysis",
      typicalDay:
        "Collecting inputs from multiple sources, comparing signals, and turning noisy information into decisions.",
      tasks: ["Research", "Reporting", "Data entry"],
      communicationStyle: "professional",
      communicationNotes:
        "Source-aware, concise, and analytical. Separate evidence from interpretation.",
      tools: ["Notion", "Slack"],
      topWish: "Help me monitor developments continuously and package them into clear decision support.",
      audience: "Internal stakeholders, operators, and decision-makers who need signal, not noise.",
      personalityWords: ["Analytical", "Authoritative", "Professional"],
      additionalNotes:
        "Bias toward accuracy, source quality, and structured synthesis.",
    },
  },
  content_creator: {
    id: "content_creator" as PersonaId,
    emoji: "✍️",
    name: "Content Creator",
    short: "Writing, social media, brainstorming",
    defaults: {
      businessIndustry: "Content and media",
      typicalDay:
        "Turning ideas into posts, scripts, outlines, and campaigns while juggling publishing cadence and audience engagement.",
      tasks: ["Content creation", "Social media", "Research"],
      communicationStyle: "casual",
      communicationNotes:
        "Sharp, human, and energetic. Keep language natural and ideas fresh.",
      tools: ["Notion", "Slack"],
      topWish: "Help me create consistently without losing voice or momentum.",
      audience: "Followers, subscribers, brand partners, and clients who expect clear point of view.",
      personalityWords: ["Creative", "Bold", "Approachable"],
      additionalNotes:
        "Protect brand voice and make ideation feel collaborative, not generic.",
    },
  },
  business_operator: {
    id: "business_operator" as PersonaId,
    emoji: "🏗️",
    name: "Business Operator",
    short: "Project tracking, vendor management, ops",
    defaults: {
      businessIndustry: "Operations",
      typicalDay:
        "Coordinating teams, tracking deadlines, resolving blockers, and making sure critical work moves forward.",
      tasks: ["Reporting", "Scheduling", "Email", "Data entry"],
      communicationStyle: "direct",
      communicationNotes:
        "Clear, decisive, and practical. Highlight blockers, owners, and next actions.",
      tools: ["Slack", "Notion", "Trello"],
      topWish: "Help me see what matters, who owns it, and where execution is slipping.",
      audience: "Internal teams, vendors, and clients relying on clean execution.",
      personalityWords: ["Efficient", "Analytical", "Professional"],
      additionalNotes:
        "Focus on accountability, visibility, and recurring operational rhythm.",
    },
  },
  practice_manager: {
    id: "practice_manager" as PersonaId,
    emoji: "🧑‍⚕️",
    name: "Practice Manager",
    short: "Appointments, client follow-up, compliance",
    defaults: {
      businessIndustry: "Practice management",
      typicalDay:
        "Balancing appointments, follow-up, staff coordination, and process consistency in a high-trust setting.",
      tasks: ["Scheduling", "Client follow-up", "Reporting"],
      communicationStyle: "warm",
      communicationNotes:
        "Warm, reassuring, and professional with clients. Internally, keep instructions crisp.",
      tools: ["Outlook", "Google Calendar"],
      topWish: "Help me keep operations smooth while maintaining a high-touch client experience.",
      audience: "Patients, clients, front-desk staff, and providers.",
      personalityWords: ["Empathetic", "Professional", "Trustworthy"],
      additionalNotes:
        "Consistency, clarity, and a calm client experience matter more than speed alone.",
    },
  },
};


