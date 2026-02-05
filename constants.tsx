import {
  Zap,
  Search,
  UserPlus,
  Mail,
  Calendar,
  FileText,
  Kanban,
  CreditCard,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Share2
} from 'lucide-react';
import type { SalesTool } from './types';

export const TOOLS: SalesTool[] = [
  {
    id: 'geo',
    name: 'GEO',
    title: 'Generative Engine Optimization (GEO)',
    hook: 'Optimize your business to appear inside AI tools like ChatGPT, Claude, and Gemini.',
    benefits: [
      'AI-optimized website structure and content for organic inbound leads.',
      'Comparison pages and schema markup to rank in AI answers.',
      'Drive qualified traffic without ads.'
    ],
    iconName: 'Zap',
    ctaText: 'Integrated seamlessly',
    category: 'Visibility'
  },
  {
    id: 'apollo',
    name: 'Apollo',
    title: 'Lead Generation - Apollo',
    hook: 'Find highly specific customer profiles using filters like role, industry, company size, and funding.',
    benefits: [
      'Build precise, qualified lead lists fast.',
      'Targeted outreach at scale.',
      'Filters for perfect-fit prospects.'
    ],
    iconName: 'Search',
    ctaText: 'Integrated seamlessly',
    category: 'Prospecting'
  },
  {
    id: 'clay',
    name: 'Clay',
    title: 'Lead Enrichment - Clay',
    hook: 'Enrich your lead list with verified emails, social profiles, and real-time activity signals.',
    benefits: [
      'Personalized outreach data in one click.',
      'Verified contacts + signals.',
      'Company intel for better pitches.'
    ],
    iconName: 'UserPlus',
    ctaText: 'Integrated seamlessly',
    category: 'Prospecting'
  },
  {
    id: 'brevo',
    name: 'Brevo',
    title: 'Lead Nurturing - Brevo',
    hook: 'Set up automated sequences to follow up, nurture prospects, and score leads.',
    benefits: [
      'Automated follow-ups until ready.',
      'Lead scoring + engagement tracking.',
      'Higher response rates.'
    ],
    iconName: 'Mail',
    ctaText: 'Integrated seamlessly',
    category: 'Engagement'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    title: 'Meeting Scheduling - Calendly',
    hook: 'Eliminate back-and-forth. Prospects instantly book a meeting slot.',
    benefits: [
      'Fast bookings, higher conversions.',
      'No email chains.',
      'Instant response time boost.'
    ],
    iconName: 'Calendar',
    ctaText: 'Integrated seamlessly',
    category: 'Engagement'
  },
  {
    id: 'gamma',
    name: 'Gamma',
    title: 'Proposal Creation - Gamma',
    hook: 'Generate clean, visually appealing proposals or pitch decks rapidly from notes.',
    benefits: [
      'Quick, pro pitches.',
      'From idea to deck in minutes.',
      'Client-ready visuals.'
    ],
    iconName: 'FileText',
    ctaText: 'Integrated seamlessly',
    category: 'Closing'
  },
  {
    id: 'airtable',
    name: 'Airtable',
    title: 'Deal Management - Airtable',
    hook: 'Track stages, values, and next actions to prevent deals from being lost.',
    benefits: [
      'Visual pipeline visibility.',
      'No deals slip through.',
      'Custom stages + actions.'
    ],
    iconName: 'Kanban',
    ctaText: 'Integrated seamlessly',
    category: 'Closing'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    title: 'Payment Collection - Stripe',
    hook: 'Accept global payments with cards, subscriptions, and automated billing.',
    benefits: [
      'Frictionless global collections.',
      'Cards, UPI, subs ready.',
      'Automated invoicing.'
    ],
    iconName: 'CreditCard',
    ctaText: 'Integrated seamlessly',
    category: 'Revenue'
  },
  {
    id: 'notion',
    name: 'Notion',
    title: 'Delivery Tracking',
    hook: 'Use Notion or custom dashboards to track project progress and client updates.',
    benefits: [
      'Real-time project sync.',
      'Deadlines + deliverables visible.',
      'Client update hub.'
    ],
    iconName: 'CheckCircle2',
    ctaText: 'Integrated seamlessly',
    category: 'Operations'
  },
  {
    id: 'tally',
    name: 'Tally',
    title: 'Feedback System',
    hook: 'Collect reviews and insights using tools like Tally or Typeform.',
    benefits: [
      'Capture testimonials + improvements.',
      'Satisfaction scores.',
      'Actionable insights.'
    ],
    iconName: 'MessageSquare',
    ctaText: 'Integrated seamlessly',
    category: 'Retention'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    title: 'Upsell & Retention',
    hook: 'Automate renewals, upsells, and cross-sells to lower churn.',
    benefits: [
      'Automated revenue growth.',
      'Renewals + upsells.',
      'Lower churn rate.'
    ],
    iconName: 'TrendingUp',
    ctaText: 'Integrated seamlessly',
    category: 'Retention'
  },
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    title: 'Full-Funnel Analytics',
    hook: 'Track leads, conversions, revenue, CAC, and LTV in one place.',
    benefits: [
      'Full-funnel metrics.',
      'CAC, LTV, churn insights.',
      'Campaign ROI tracking.'
    ],
    iconName: 'BarChart3',
    ctaText: 'Integrated seamlessly',
    category: 'Insights'
  },
  {
    id: 'automation',
    name: 'The Hub',
    title: 'Total System Automation',
    hook: 'Businesses break because apps don’t talk. We connect the entire hub.',
    benefits: [
      'One connected hub.',
      'End siloed tools.',
      'Scale without chaos.'
    ],
    iconName: 'Share2',
    ctaText: 'Get started now',
    category: 'Unified'
  }
];

export const getIcon = (name: string, size = 24, className = "") => {
  switch (name) {
    case 'Zap': return <Zap size={size} className={className} />;
    case 'Search': return <Search size={size} className={className} />;
    case 'UserPlus': return <UserPlus size={size} className={className} />;
    case 'Mail': return <Mail size={size} className={className} />;
    case 'Calendar': return <Calendar size={size} className={className} />;
    case 'FileText': return <FileText size={size} className={className} />;
    case 'Kanban': return <Kanban size={size} className={className} />;
    case 'CreditCard': return <CreditCard size={size} className={className} />;
    case 'CheckCircle2': return <CheckCircle2 size={size} className={className} />;
    case 'MessageSquare': return <MessageSquare size={size} className={className} />;
    case 'TrendingUp': return <TrendingUp size={size} className={className} />;
    case 'BarChart3': return <BarChart3 size={size} className={className} />;
    case 'Share2': return <Share2 size={size} className={className} />;
    default: return <Zap size={size} className={className} />;
  }
};
