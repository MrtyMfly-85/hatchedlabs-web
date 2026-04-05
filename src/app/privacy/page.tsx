import { SectionHeading } from "../../components/marketing/section-heading";
import { Card } from "../../components/ui/card";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | Hatched Labs",
  description:
    "Read the Hatched Labs privacy policy covering account data, conversation storage, third-party services, security, and retention.",
  path: "/privacy",
});

const policySections = [
  {
    title: "What We Collect",
    body: [
      "Account Information: Name, email address, Telegram username, and payment information provided during signup.",
      "Conversation Data: Messages exchanged between you and your AI assistant are stored on our servers to maintain conversation history, memory, and context across sessions.",
      "Files & Uploads: Any documents, images, or files you share with your assistant are stored in your private workspace.",
      "Usage Data: Basic metrics such as message count, feature usage, and model token consumption to monitor service health and manage capacity.",
      "Landing Page & Email Capture: If you sign up via our website, we collect your name and email address. This data is stored in a private Google Sheet and is not shared with third parties.",
      "Website Analytics: We use Google Analytics (GA4) to collect anonymous usage data on our website. No personally identifiable information is sent to Google Analytics.",
    ],
  },
  {
    title: "How We Use Your Data",
    body: [
      "Service Delivery: Your conversation data is processed by third-party AI providers (Google, Anthropic, OpenAI) to generate responses, search the web, transcribe voice messages, and generate images.",
      "Service Continuity: Conversation history, memory files, and workspace data are stored so your assistant remembers context across sessions.",
      "Email Communications: Your AI assistant may send emails on your behalf using our email infrastructure (AgentMail). These emails originate from a dedicated address assigned to your assistant.",
      "Billing: Payment information is processed securely through Stripe. We do not store credit card numbers.",
      "Support & Troubleshooting: Authorized Hatched Labs personnel may access your assistant's configuration and logs to diagnose issues. We do not read your conversations unless required for troubleshooting, and we will inform you when we do.",
      "Service Monitoring: Automated health checks run periodically to ensure your assistant is online and functioning.",
    ],
  },
  {
    title: "What We Don't Do",
    body: [
      "We don't sell your data to anyone.",
      "We don't read your conversations except for technical troubleshooting, with your knowledge.",
      "We don't use your data to train AI models.",
      "We don't share your data with other clients.",
      "We don't serve ads.",
      "We don't allow your assistant to access other clients' data.",
    ],
  },
  {
    title: "Data Storage & Security",
    body: [
      "All data is stored on encrypted cloud infrastructure.",
      "Each client's assistant runs in a fully isolated environment.",
      "API keys and credentials are stored using secret-management tooling rather than written into workspace files.",
      "Automated nightly backups ensure data durability.",
      "Infrastructure access is restricted to authorized Hatched Labs personnel.",
      "Your assistant cannot install software, modify its own configuration, or access system-level resources.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "AI providers: Google (Gemini), Anthropic (Claude), and OpenAI for specific supporting functions.",
      "Email provider: AgentMail.",
      "Payments: Stripe.",
      "Website analytics: Google Analytics (GA4).",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Active accounts: Data is retained for the duration of your subscription.",
      "After cancellation: You may request a data export within 30 days. After 30 days, conversation data, memory files, and workspace contents are permanently deleted.",
      "Email capture: If you signed up for early access but did not become a client, your name and email may be retained for marketing purposes until you request removal.",
      "Deletion requests: You may request immediate deletion at any time by emailing privacy@hatchedlabs.ai.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You can request access, correction, deletion, portability, and removal from marketing communications.",
      "To exercise these rights, email privacy@hatchedlabs.ai.",
    ],
  },
  {
    title: "Children, Changes, and Contact",
    body: [
      "Our services are not intended for anyone under 18 years of age.",
      "We may update this policy from time to time and will notify you of material changes before they take effect.",
      "Questions about privacy can be sent to privacy@hatchedlabs.ai.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Privacy Policy"
        title="Hatched Labs, LLC Privacy Policy"
        description="Effective Date: March 17, 2026"
      />
      <div className="mt-12 space-y-6">
        {policySections.map((section) => (
          <Card key={section.title}>
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-300">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
