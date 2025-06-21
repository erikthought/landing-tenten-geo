export interface PricingTier {
  name: string
  price: number
  popular?: boolean
  features: string[]
  description: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Standard GEO Package",
    price: 2390,
    description: "Perfect for businesses ready to embrace AI-powered SEO optimization",
    features: [
      "Comprehensive GEO Audit",
      "Technical SEO Foundation", 
      "GEO Analysis Report",
      "Strategic Keyword Matrix",
      "8 Long-form GEO Articles (1,500-3,000 words)",
      "Monthly Performance Report",
      "Email Support",
      "Basic AI Query Optimization"
    ]
  },
  {
    name: "Premium GEO Package",
    price: 5290,
    popular: true,
    description: "Complete GEO domination for enterprises serious about AI search leadership",
    features: [
      "Everything in Standard Package",
      "30 Long-form GEO Articles (1,500-3,000 words)",
      "Dedicated Communication Channel",
      "Priority Support (12-hour response)",
      "Bi-weekly Strategic Reports",
      "Advanced AI Query Analysis",
      "Competitor GEO Intelligence",
      "Custom Content Strategy",
      "Performance Guarantee"
    ]
  }
]

export const features: Feature[] = [
  {
    title: "AI Search Optimization",
    description: "Optimize your content for ChatGPT, Bard, Bing Chat, and other generative AI platforms to capture the future of search.",
    icon: "Brain"
  },
  {
    title: "Deep Content Analysis", 
    description: "Our proprietary algorithms analyze how AI models understand and reference your content across different query types.",
    icon: "Search"
  },
  {
    title: "Competitive Intelligence",
    description: "Monitor and outperform competitors in AI-generated results with comprehensive GEO competitive analysis.",
    icon: "TrendingUp"
  },
  {
    title: "Technical GEO Audit",
    description: "Comprehensive technical analysis to ensure your site architecture supports optimal AI model discovery and indexing.",
    icon: "Settings"
  },
  {
    title: "Content Strategy",
    description: "Create authoritative, long-form content designed to be the preferred source for AI model training and responses.",
    icon: "FileText"
  },
  {
    title: "Performance Tracking",
    description: "Advanced analytics to measure your visibility and citations across major generative AI platforms.",
    icon: "BarChart"
  }
]

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Head of Digital Marketing",
    company: "TechFlow Solutions", 
    content: "Tenten's GEO strategy increased our AI search visibility by 340% in just 3 months. We're now the go-to source for AI-generated responses in our industry.",
    avatar: "/testimonial-1.jpg"
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "InnovateNow",
    content: "The future of search is AI-driven, and Tenten positioned us perfectly. Our organic traffic from AI-powered searches has tripled since implementing their GEO strategy.",
    avatar: "/testimonial-2.jpg"
  },
  {
    name: "Emily Watson",
    role: "Growth Marketing Director", 
    company: "ScaleUp Ventures",
    content: "Exceptional results and insights. Tenten's approach to generative engine optimization is years ahead of traditional SEO agencies.",
    avatar: "/testimonial-3.jpg"
  }
]
