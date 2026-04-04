# Hatched Labs Website v2 — Build Spec

## Overview
Full marketing website + self-service onboarding flow for Hatched Labs, an AI personal assistant service. Built on Next.js 14 (App Router), Tailwind CSS, deployed to Vercel.

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Database:** Supabase (Postgres) — for onboarding form submissions
- **Payments:** Stripe (placeholder for now — buttons/flow exist but no real Stripe keys)
- **Hosting:** Vercel
- **Fonts:** Inter (Google Fonts)
- **Analytics:** Google Analytics (G-GGC6NT2GNV)

## Branding
- **Primary background:** #000000 (black)
- **Accent/gold:** #c8a44e
- **Secondary gold:** #a07c2a
- **Text:** #ffffff (primary), #999999 (secondary), #555555 (muted)
- **Input borders:** #333333, focus: #c8a44e
- **Input bg:** #111111
- **Font:** Inter (weights: 300, 400, 500, 600, 700)
- **Logo:** SVG file at `../website/logo.svg` — include in public/
- **Overall vibe:** Dark, premium, minimal. Think high-end tech/luxury.

## Site Structure

### Public Marketing Pages

#### 1. Home (`/`)
- Hero section with tagline: "Your AI. Always on. Always yours."
- Value proposition (3-4 key benefits with icons)
- How it works (3 steps: Choose → Customize → Launch)
- Brief pricing cards with CTA to /pricing
- Trust signals / social proof section (placeholder for testimonials)
- Final CTA: "Get Started" → /get-started
- Email capture preserved from current site (Google Apps Script: https://script.google.com/macros/s/AKfycbwhwSuw0kc_v8kWhkN2TSjmsqsj9KeL12sMwqOG_BSbBaAkV-MLUeyc2yN6oMfcHjtieg/exec)

#### 2. Pricing (`/pricing`)
- Two tier cards side-by-side: Pro ($797/mo) and Elite ($997/mo)
- Feature comparison table
- Setup fee: $250 (waived with annual commitment)
- CTA buttons: "Get Started" → /get-started?tier=pro or /get-started?tier=elite
- FAQ section at bottom

**Pro — $797/mo** (Powered by Anthropic Claude Sonnet)
- Custom personality and knowledge base
- Available 24/7 via Telegram
- Web search and real-time research
- Browser access (visit websites, read articles, gather info)
- Background tasks (daily briefings, weekly reports, recurring check-ins)
- Multi-tasking with sub-agents
- Dedicated agent email inbox
- Up to 15 automated tasks
- Priority email support (24-hour response)

**Elite — $997/mo** (Powered by Anthropic Claude Opus)
- Everything in Pro, plus:
- Best-in-class AI intelligence
- Full email integration (Gmail or Microsoft 365)
- Calendar access and management
- Custom skills and industry-specific workflows
- Unlimited automated tasks
- Same-day priority support
- Premium integrations and custom tooling
- Dedicated agent inbox AND personal email/calendar integration

#### 3. Services (`/services`)
- What your AI assistant can do (organized by category):
  - Research & Analysis
  - Email & Communication
  - Scheduling & Calendar
  - Content Creation
  - Task Automation
  - Web Monitoring
  - Custom Workflows
- Use case examples for different industries
- "See it in action" section (placeholder for demo/video)

#### 4. About (`/about`)
- Company story — "Founded by technologists who believe AI assistants should be personal, private, and always available"
- Mission: Making AI accessible to entrepreneurs and professionals
- What makes us different (white-glove, not commodity hosting)
- Team section (placeholder)
- Values: Privacy, Quality, Personalization

#### 5. Contact (`/contact`)
- Contact form (name, email, message) → Supabase
- Email: hello@hatchedlabs.ai
- Support: support@hatchedlabs.ai
- Optional: Calendly embed for discovery calls (placeholder)

#### 6. Privacy Policy (`/privacy`)
- Content from existing `../docs/privacy-policy.md`

### Onboarding Flow (`/get-started`)

Multi-step form flow with progress indicator. All data persisted to Supabase on completion.

#### Step 1: Choose Your Path
- Option A: Pick a **preconfigured persona** (cards with icons + short descriptions):
  - 🏠 **Real Estate Pro** — listings, market research, client comms
  - 💼 **Executive Assistant** — calendar, email triage, meeting prep
  - 📊 **Research Analyst** — market monitoring, reports, data synthesis
  - ✍️ **Content Creator** — writing, social media, brainstorming
  - 🏗️ **Business Operator** — project tracking, vendor management, ops
  - 🧑‍⚕️ **Practice Manager** — appointments, client follow-up, compliance
- Option B: **"Build from scratch"** — starts with blank answers
- Selecting a persona pre-fills the imprint questions but everything remains editable

#### Step 2: Choose Your Tier
- Pro vs Elite cards (same as pricing page but in-flow)
- Pre-selected if they came from /pricing with ?tier= param
- Clear "What's the difference?" expandable section

#### Step 3: The Imprint (6-10 Questions)
Each question is its own card/section for clean UX. Mix of text inputs, textareas, and multi-select.

1. **What's your name?** (text) + **What should your agent call you?** (text — could be first name, nickname, title)
2. **What's your business or industry?** (text + optional dropdown for common industries)
3. **What does a typical day look like for you?** (textarea — helps agent understand context)
4. **What tasks eat up most of your time?** (multi-select chips + freeform: email, scheduling, research, content creation, data entry, client follow-up, social media, reporting, other)
5. **How should your agent communicate?** (select cards: Casual & friendly / Professional & polished / Direct & efficient / Warm & supportive) + optional textarea for specifics
6. **What tools do you already use?** (multi-select: Gmail, Outlook, Google Calendar, Slack, Notion, Trello, Salesforce, HubSpot, Other)
7. **What's the #1 thing you wish you had help with?** (textarea)
8. **Tell us about your clients or audience** (textarea — optional, helps agent understand who they serve)
9. **Pick 3 words that describe how you want to come across** (tag selector from a pool: Professional, Friendly, Authoritative, Creative, Approachable, Analytical, Bold, Empathetic, Efficient, Witty, Trustworthy, Innovative)
10. **Anything else we should know?** (textarea — optional)

#### Step 4: Review Your Agent Profile
- Summary card showing all selections
- Edit buttons to go back to any step
- Agent "preview" — name, personality summary, tier, persona type

#### Step 5: Checkout
- **PLACEHOLDER for now** — show order summary (tier + monthly price + setup fee)
- "Complete Purchase" button that currently just:
  - Saves all data to Supabase
  - Shows a confirmation page: "We're building your agent! You'll hear from us within 48 hours."
  - Sends data to Google Apps Script endpoint for email notification (same as current landing page)
- When Stripe is ready: this becomes a real Stripe Checkout redirect

### Confirmation Page (`/get-started/confirmed`)
- Success animation/message
- "What happens next" timeline:
  1. Our team reviews your imprint
  2. We build and customize your agent (24-48 hours)
  3. You get your Telegram bot link
  4. Say hello to your new assistant!
- Contact info for questions

## Database Schema (Supabase)

### Table: `onboarding_submissions`
```sql
CREATE TABLE onboarding_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Tier & persona
  tier TEXT NOT NULL, -- 'pro' or 'elite'
  persona TEXT, -- 'real_estate', 'executive_assistant', 'research_analyst', 'content_creator', 'business_operator', 'practice_manager', 'custom'
  
  -- Imprint answers
  client_name TEXT NOT NULL,
  agent_name TEXT, -- what agent calls them
  business_industry TEXT,
  typical_day TEXT,
  time_consuming_tasks TEXT[], -- array of selected tasks
  communication_style TEXT, -- 'casual', 'professional', 'direct', 'warm'
  communication_notes TEXT,
  existing_tools TEXT[], -- array of selected tools
  top_wish TEXT,
  client_audience TEXT,
  personality_words TEXT[], -- array of 3 selected words
  additional_notes TEXT,
  
  -- Contact
  email TEXT NOT NULL,
  
  -- Status
  status TEXT DEFAULT 'pending', -- 'pending', 'in_progress', 'deployed', 'cancelled'
  stripe_session_id TEXT,
  stripe_customer_id TEXT,
  
  -- Metadata
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);
```

### Table: `contact_submissions`
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' -- 'new', 'read', 'replied'
);
```

## SEO Requirements
- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- JSON-LD structured data:
  - Organization (on all pages)
  - Service (on services page)
  - FAQPage (on pricing page)
  - LocalBusiness (on about page)
- `sitemap.xml` (auto-generated by Next.js)
- `robots.txt`
- Canonical URLs
- Semantic HTML (proper heading hierarchy h1→h2→h3)
- Alt text on all images
- Fast load (static/SSG where possible)

## Component Architecture
- Shared layout: Header (nav) + Footer
- Header: Logo, nav links (Home, Services, Pricing, About, Contact), "Get Started" CTA button
- Footer: Logo, nav links, social links (placeholder), legal links (Privacy), copyright
- Reusable: Button, Card, Input, Select, Textarea, Badge, ProgressBar
- All components use Tailwind — no CSS modules or styled-components

## Key Design Decisions
- Dark theme throughout (matches existing brand)
- Gold accent for CTAs, highlights, hover states
- Subtle animations (fade-in on scroll, smooth transitions)
- Cards with subtle borders (#333) and hover glow effects
- Mobile-first breakpoints

## File Structure
```
hatched-labs-web/
├── public/
│   ├── logo.svg
│   ├── og-image.png (generate from logo)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx (root layout with nav + footer)
│   │   ├── page.tsx (home)
│   │   ├── pricing/page.tsx
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── get-started/
│   │   │   ├── page.tsx (multi-step form)
│   │   │   └── confirmed/page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/ (Button, Card, Input, etc.)
│   │   ├── layout/ (Header, Footer, Nav)
│   │   ├── marketing/ (Hero, Features, PricingCards, etc.)
│   │   └── onboarding/ (StepIndicator, PersonaPicker, ImprintForm, TierSelector, ReviewCard)
│   ├── lib/
│   │   ├── supabase.ts (client init)
│   │   └── constants.ts (tier data, persona data, etc.)
│   └── styles/
│       └── globals.css (Tailwind directives + custom)
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.example (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_GA_ID)
```

## Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=placeholder
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder
NEXT_PUBLIC_GA_ID=G-GGC6NT2GNV
NEXT_PUBLIC_SITE_URL=https://hatchedlabs.ai
STRIPE_SECRET_KEY=placeholder
STRIPE_WEBHOOK_SECRET=placeholder
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=placeholder
```

## Notes
- Stripe is PLACEHOLDER only — no real keys. Checkout button saves to DB and shows confirmation.
- Supabase can also be placeholder initially — form data can be logged to console if Supabase isn't set up yet.
- Keep the Google Apps Script email capture endpoint working (from current landing page).
- The preconfigured personas should pre-fill the imprint form with sensible defaults but all fields remain editable.
- "Celebrity" personas (Jarvis, Alfred, Q, etc.) are a future add — don't build now, but the persona picker architecture should make them easy to add later.
- Privacy policy content is in `../docs/privacy-policy.md` — copy content into the privacy page.
