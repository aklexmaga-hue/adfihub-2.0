import {
  LayoutDashboard,
  Users,
  Building,
  Briefcase,
  Bot,
  DollarSign,
  CreditCard,
  KeyRound,
  ShieldCheck,
  GitMerge,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  auth?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/marketplace', label: 'Marketplace', icon: Briefcase },
  { href: '/ai-tools', label: 'AI Tools', icon: Bot },
  { href: '/partners', label: 'Partners', icon: Building },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/whitelist', label: 'Whitelist', icon: ShieldCheck },
  { href: '/deposit', label: 'Deposit', icon: DollarSign },
  { href: '/withdrawal', label: 'Withdrawal', icon: CreditCard },
  { href: '/roadmap', label: 'Roadmap', icon: GitMerge },
  { href: '/admin', label: 'Admin', icon: KeyRound, auth: true },
];

export type Partner = {
  id: string;
  name: string;
  category:
    | 'Crypto Casinos'
    | 'Ad Agencies'
    | 'Traffic Networks'
    | 'SDK/Tech Partners'
    | 'On-ramp / KYC';
  description: string;
  url: string;
  logoId: string;
  integrationStatus: 'Live' | 'In Progress' | 'Planned';
};

export const PARTNERS: Partner[] = [
  {
    id: 'p1',
    name: 'Stake.com',
    category: 'Crypto Casinos',
    description:
      'Leading crypto casino and sports betting platform with a huge global presence.',
    url: 'https://stake.com',
    logoId: 'partner-stake',
    integrationStatus: 'Live',
  },
  {
    id: 'p6',
    name: '1win',
    category: 'Crypto Casinos',
    description: 'Popular online betting and casino platform with a wide range of games.',
    url: 'https://1win.com',
    logoId: 'partner-1win',
    integrationStatus: 'Live',
  },
  {
    id: 'p2',
    name: 'AdPro Agency',
    category: 'Ad Agencies',
    description: 'Full-service digital marketing agency specializing in Web3.',
    url: '#',
    logoId: 'partner-ad-agency-1',
    integrationStatus: 'Live',
  },
  {
    id: 'p3',
    name: 'ClickFlow Network',
    category: 'Traffic Networks',
    description: 'High-quality traffic from global sources for any vertical.',
    url: '#',
    logoId: 'partner-traffic-1',
    integrationStatus: 'In Progress',
  },
  {
    id: 'p4',
    name: 'ChainTrack SDK',
    category: 'SDK/Tech Partners',
    description:
      'Advanced tracking and attribution SDK for dApps and Web3 projects.',
    url: '#',
    logoId: 'partner-tech-1',
    integrationStatus: 'Planned',
  },
  {
    id: 'p5',
    name: 'CryptoRamp',
    category: 'On-ramp / KYC',
    description:
      'Seamless fiat-to-crypto on-ramping with built-in KYC solutions.',
    url: '#',
    logoId: 'partner-onramp-1',
    integrationStatus: 'Live',
  },
];

export type RoadmapStage = {
  id: string;
  name: string;
  quarter: string;
  year: string;
  features: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
};

export const ROADMAP_STAGES: RoadmapStage[] = [
    {
        id: "q1-2025",
        name: "Platform Foundation & MVP",
        quarter: "Q1",
        year: "2025",
        features: [
            "Core Marketplace (Listings & Offers)",
            "Firebase Authentication (Email/Password, Google)",
            "Admin Moderation Console V1",
            "Whitelist Application System",
            "Initial Partner Directory"
        ],
        status: "Completed"
    },
    {
        id: "q2-2025",
        name: "AI & Web3 Integration",
        quarter: "Q2",
        year: "2025",
        features: [
            "CPA/RevShare Estimator AI Tool",
            "Campaign Bundle Generator AI Tool",
            "Web3 Wallet Sign-in (WalletConnect/MetaMask)",
            "On-chain Deposit Monitoring (Testnet)"
        ],
        status: "In Progress"
    },
    {
        id: "q3-2025",
        name: "Financial & Security Hardening",
        quarter: "Q3",
        year: "2025",
        features: [
            "Onramp Partner Integration (e.g., Transak, MoonPay)",
            "KYC Gating for Withdrawals",
            "App Check & reCAPTCHA Enterprise Rollout",
            "Immutable Transaction Ledger V1"
        ],
        status: "Planned"
    },
    {
        id: "q4-2025",
        name: "Scaling & Ecosystem Growth",
        quarter: "Q4",
        year: "2025",
        features: [
            "Public API for Partners",
            "Dispute Resolution System",
            "Advanced Analytics Dashboard",
            "Referral & Affiliate Program"
        ],
        status: "Planned"
    }
];

export const VERTICALS = [
  'Gambling',
  'E-commerce',
  'Finance',
  'Gaming',
  'Health & Fitness',
  'SaaS',
];

export const TRAFFIC_SOURCES = ['Google Ads', 'Facebook Ads', 'TikTok Ads', 'Native Ads', 'Push Notifications', 'Email'];
export const KPIS = ['CPA', 'ROI', 'ROAS', 'Conversion Rate'];
export const TRACKING_TYPES = ['Pixel', 'Postback', 'API'];
