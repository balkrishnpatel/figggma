"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle, ArrowRight, BarChart, Zap, Sparkles, Users, Shield, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface IndustryPageProps {

    indust: string
  
}




// This is a simplified version - in a real app, you would fetch this data from an API or database
const industries = [
  {
    title: "Healthcare",
    slug: "healthcare",
    icon: "🏥",
    shortDescription: "Digital solutions for healthcare providers and patient management.",
    fullDescription:
      "Our healthcare solutions help medical providers, hospitals, and healthcare organizations leverage technology to improve patient care, streamline operations, and enhance data management. We develop custom applications, telemedicine platforms, patient portals, and healthcare analytics solutions tailored to the unique needs of the healthcare industry.",
    challenges: [
      "Ensuring compliance with healthcare regulations (HIPAA, GDPR, etc.)",
      "Integrating with existing healthcare systems and EHRs",
      "Securing sensitive patient data",
      "Improving patient engagement and care coordination",
      "Optimizing operational efficiency and reducing costs",
      "Managing and analyzing large volumes of healthcare data",
    ],
    solutions: [
      "Telemedicine and virtual care platforms",
      "Patient portals and engagement applications",
      "Healthcare data analytics and business intelligence",
      "Electronic health record (EHR) integration",
      "Medical practice management systems",
      "Healthcare IoT solutions",
    ],
    caseStudies: [
      {
        title: "National Hospital Network",
        description:
          "Implemented a telemedicine platform that reduced patient wait times by 40% and increased appointment adherence by 35%.",
      },
      {
        title: "Regional Medical Center",
        description:
          "Developed a patient engagement app that improved patient satisfaction scores by 28% and reduced administrative workload by 20%.",
      },
      {
        title: "Healthcare Analytics Provider",
        description:
          "Built a data analytics platform that helped identify cost-saving opportunities of over $2.5 million annually.",
      },
    ],
    stats: [
      { value: "40%", label: "Reduction in administrative costs" },
      { value: "35%", label: "Improvement in patient engagement" },
      { value: "50%", label: "Faster access to critical data" },
      { value: "25%", label: "Increase in operational efficiency" },
    ],
    features: [
      "HIPAA-compliant data storage and transmission",
      "Seamless integration with existing EHR systems",
      "Real-time patient monitoring and alerts",
      "Secure patient portals with mobile access",
      "Advanced analytics and reporting dashboards",
      "Automated appointment scheduling and reminders",
    ],
    benefits: [
      "Improved patient outcomes and satisfaction",
      "Reduced administrative overhead",
      "Enhanced care coordination",
      "Data-driven decision making",
      "Streamlined workflows",
      "Increased operational efficiency",
    ],
  },


  {
    title: "Finance & Banking",
    slug: "finance-banking",
    icon: "🏦",
    shortDescription: "Digital solutions for financial institutions and banking services.",
    fullDescription:
      "Our finance and banking solutions help banks, fintech companies, and financial institutions leverage cutting-edge technology to improve customer experience, ensure security, and streamline operations. We develop secure payment systems, mobile banking apps, wealth management platforms, and financial analytics solutions tailored to meet regulatory compliance and industry standards.",
    challenges: [
      "Ensuring compliance with financial regulations (RBI, SEBI, PCI-DSS, etc.)",
      "Protecting against cyber threats and fraud",
      "Integrating with legacy banking systems",
      "Providing seamless omnichannel customer experiences",
      "Managing real-time transaction processing",
      "Implementing advanced risk management and analytics",
    ],
    solutions: [
      "Mobile and internet banking platforms",
      "Digital wallet and payment gateway solutions",
      "Core banking system modernization",
      "Financial analytics and risk management",
      "Customer relationship management (CRM) systems",
      "Blockchain and cryptocurrency solutions",
    ],
    caseStudies: [
      {
        title: "Leading Private Bank",
        description:
          "Implemented a mobile banking app that increased digital transactions by 65% and reduced branch visits by 45%.",
      },
      {
        title: "Fintech Startup",
        description:
          "Developed a digital payment platform that processed over 1 million transactions in the first quarter with 99.9% uptime.",
      },
      {
        title: "Investment Firm",
        description:
          "Built a wealth management platform that improved client portfolio performance tracking and increased customer retention by 30%.",
      },
    ],
    stats: [
      { value: "65%", label: "Increase in digital transactions" },
      { value: "45%", label: "Reduction in operational costs" },
      { value: "99.9%", label: "System uptime and reliability" },
      { value: "30%", label: "Improvement in customer satisfaction" },
    ],
    features: [
      "Bank-grade encryption and security",
      "Real-time transaction processing",
      "Multi-factor authentication",
      "Seamless third-party integrations",
      "Advanced fraud detection systems",
      "Comprehensive audit trails and reporting",
    ],
    benefits: [
      "Enhanced security and compliance",
      "Improved customer experience",
      "Reduced operational costs",
      "Faster time-to-market for new services",
      "Data-driven decision making",
      "Scalable and future-ready infrastructure",
    ],
  },

  // Ye object aapko industries array mein add karna hai

{
  title: "Lending & Credit",
  slug: "lending-credit",
  icon: "💳",
  shortDescription: "Digital lending platforms and credit management solutions.",
  fullDescription:
    "Our lending and credit solutions help financial institutions, NBFCs, and fintech companies modernize their lending operations with digital-first platforms. We develop custom loan origination systems, credit scoring engines, digital lending platforms, and automated underwriting solutions that accelerate loan processing, reduce defaults, and enhance customer experience while ensuring regulatory compliance.",
  challenges: [
    "Streamlining loan application and approval processes",
    "Implementing accurate credit risk assessment",
    "Ensuring compliance with lending regulations (RBI guidelines, Fair Practices Code)",
    "Managing loan portfolio and collections efficiently",
    "Preventing fraud and identity theft",
    "Reducing loan processing time and operational costs",
  ],
  solutions: [
    "Digital loan origination systems (LOS)",
    "AI-powered credit scoring and risk assessment",
    "Automated underwriting platforms",
    "Loan management and servicing systems",
    "Collections and recovery automation",
    "Peer-to-peer lending platforms",
  ],
  caseStudies: [
    {
      title: "Leading NBFC",
      description:
        "Implemented a digital lending platform that reduced loan processing time from 7 days to 2 hours and increased loan approvals by 40%.",
    },
    {
      title: "Microfinance Institution",
      description:
        "Developed an AI-based credit scoring system that reduced default rates by 35% and improved portfolio quality.",
    },
    {
      title: "Fintech Lender",
      description:
        "Built an end-to-end digital lending solution that processed over ₹500 crores in loans within the first year with 98% customer satisfaction.",
    },
  ],
  stats: [
    { value: "85%", label: "Faster loan processing" },
    { value: "35%", label: "Reduction in default rates" },
    { value: "60%", label: "Lower operational costs" },
    { value: "40%", label: "Increase in loan approvals" },
  ],
  features: [
    "Instant loan eligibility assessment",
    "Automated document verification (KYC, Aadhaar, PAN)",
    "AI/ML-based credit scoring models",
    "Digital signature and e-agreements",
    "Real-time disbursement tracking",
    "Integrated payment gateway for EMI collections",
  ],
  benefits: [
    "Faster loan processing and disbursement",
    "Improved credit decision accuracy",
    "Enhanced customer experience",
    "Reduced operational and processing costs",
    "Better risk management and portfolio quality",
    "Regulatory compliance and audit trails",
  ],
},

// Ye object aapko industries array mein add karna hai

{
  title: "Payment Solutions",
  slug: "payment-solutions",
  icon: "💰",
  shortDescription: "Digital payment gateways and wallet solutions.",
  fullDescription:
    "Our payment solutions help businesses, merchants, and financial institutions build secure, scalable, and user-friendly digital payment infrastructure. We develop custom payment gateways, digital wallets, UPI integration platforms, and payment processing systems that enable seamless transactions across multiple channels. Our solutions support various payment methods including cards, net banking, UPI, wallets, and QR codes while ensuring PCI-DSS compliance and robust fraud prevention.",
  challenges: [
    "Ensuring secure and PCI-DSS compliant payment processing",
    "Integrating multiple payment methods and channels",
    "Managing high transaction volumes with low latency",
    "Preventing payment fraud and chargebacks",
    "Providing seamless checkout experiences",
    "Handling reconciliation and settlement efficiently",
  ],
  solutions: [
    "Payment gateway integration and development",
    "Digital wallet and mobile payment apps",
    "UPI and QR code payment solutions",
    "Subscription and recurring payment systems",
    "Point-of-sale (POS) solutions",
    "Payment orchestration platforms",
  ],
  caseStudies: [
    {
      title: "E-commerce Platform",
      description:
        "Implemented a multi-channel payment gateway that increased transaction success rate by 25% and reduced cart abandonment by 30%.",
    },
    {
      title: "Retail Chain",
      description:
        "Developed a unified POS system with digital wallet integration that processed over 10 lakh transactions daily with 99.99% uptime.",
    },
    {
      title: "Fintech Startup",
      description:
        "Built a digital wallet platform that onboarded 5 million users in 6 months and processed ₹1,000 crores in transactions.",
    },
  ],
  stats: [
    { value: "99.99%", label: "Payment uptime" },
    { value: "25%", label: "Higher success rates" },
    { value: "30%", label: "Reduced cart abandonment" },
    { value: "50%", label: "Faster checkout process" },
  ],
  features: [
    "Multi-payment method support (UPI, Cards, Net Banking, Wallets)",
    "One-click and saved card payments",
    "Dynamic QR code generation",
    "Real-time transaction status and webhooks",
    "Advanced fraud detection and risk management",
    "Automated reconciliation and settlement",
  ],
  benefits: [
    "Increased payment success rates",
    "Enhanced customer payment experience",
    "Reduced transaction failures and fraud",
    "Lower payment processing costs",
    "Seamless multi-channel integration",
    "Complete payment analytics and insights",
  ],
},
// Ye object aapko industries array mein add karna hai

{
  title: "Accounting & Tax",
  slug: "accounting-tax",
  icon: "📊",
  shortDescription: "Accounting and tax management systems.",
  fullDescription:
    "Our accounting and tax solutions help businesses, CA firms, and financial professionals automate their financial operations and ensure compliance with Indian tax regulations. We develop custom accounting software, GST compliance platforms, TDS management systems, and financial reporting tools that streamline bookkeeping, automate tax calculations, and simplify regulatory filings. Our solutions integrate with banking systems, invoice management, and e-invoicing platforms to provide end-to-end financial management.",
  challenges: [
    "Managing complex GST compliance and return filing",
    "Automating TDS calculation and return preparation",
    "Ensuring accurate financial reporting and audit trails",
    "Handling multiple tax regimes and frequent regulation changes",
    "Integrating with banking and invoice systems",
    "Managing accounts payable and receivable efficiently",
  ],
  solutions: [
    "GST compliance and filing automation",
    "TDS and income tax management systems",
    "Cloud-based accounting platforms",
    "E-invoicing and billing solutions",
    "Financial reporting and analytics",
    "Expense management and reimbursement systems",
  ],
  caseStudies: [
    {
      title: "CA Firm Network",
      description:
        "Implemented a cloud accounting platform that reduced GST filing time by 70% and managed 5,000+ client accounts efficiently.",
    },
    {
      title: "Manufacturing Company",
      description:
        "Developed an integrated accounting system that automated TDS calculations and reduced month-end closing time from 7 days to 2 days.",
    },
    {
      title: "Multi-State Retailer",
      description:
        "Built a GST compliance solution that handled 50,000+ monthly invoices across 15 states with 100% accurate GSTR filing.",
    },
  ],
  stats: [
    { value: "70%", label: "Faster tax filing" },
    { value: "90%", label: "Reduction in manual errors" },
    { value: "60%", label: "Time saved in bookkeeping" },
    { value: "100%", label: "GST compliance accuracy" },
  ],
  features: [
    "Automated GST return filing (GSTR-1, GSTR-3B, GSTR-9)",
    "TDS calculation and Form 26AS reconciliation",
    "E-invoicing integration with GST portal",
    "Real-time financial dashboards and reports",
    "Multi-company and multi-branch accounting",
    "Bank statement reconciliation",
  ],
  benefits: [
    "Simplified GST and tax compliance",
    "Reduced manual errors and penalties",
    "Faster financial closing and reporting",
    "Real-time financial visibility",
    "Automated invoice and expense tracking",
    "Seamless audit trail and documentation",
  ],
},

{
  title: "Blockchain & Crypto",
  slug: "blockchain-crypto",
  icon: "₿",
  shortDescription: "Cryptocurrency exchanges and blockchain solutions.",
  fullDescription:
    "Our blockchain and cryptocurrency solutions help businesses, exchanges, and startups build secure, scalable, and compliant digital asset platforms. We develop custom cryptocurrency exchanges, blockchain-based applications, smart contracts, NFT marketplaces, and DeFi platforms. Our solutions ensure high security, seamless user experience, and regulatory compliance while leveraging cutting-edge blockchain technologies like Ethereum, Polygon, Solana, and Hyperledger for various use cases including payments, asset tokenization, and supply chain management.",
  challenges: [
    "Ensuring security against hacks and cyber attacks",
    "Managing high-frequency trading with low latency",
    "Implementing KYC/AML compliance for crypto transactions",
    "Handling multi-currency and multi-blockchain support",
    "Providing liquidity and order matching efficiently",
    "Navigating evolving regulatory landscape",
  ],
  solutions: [
    "Cryptocurrency exchange platforms (CEX & DEX)",
    "Blockchain-based payment systems",
    "NFT marketplace development",
    "Smart contract development and auditing",
    "DeFi (Decentralized Finance) platforms",
    "Token creation and ICO/IDO platforms",
  ],
  caseStudies: [
    {
      title: "Crypto Exchange Platform",
      description:
        "Built a centralized exchange that handles 100,000+ daily transactions with 99.99% uptime and advanced security features including cold wallet storage.",
    },
    {
      title: "NFT Marketplace",
      description:
        "Developed an NFT platform that facilitated ₹50 crores in digital art sales within 3 months with seamless minting and trading experience.",
    },
    {
      title: "Enterprise Blockchain",
      description:
        "Implemented a private blockchain solution for supply chain tracking that reduced fraud by 85% and improved transparency across 200+ vendors.",
    },
  ],
  stats: [
    { value: "99.99%", label: "Platform uptime" },
    { value: "85%", label: "Reduction in fraud" },
    { value: "100K+", label: "Daily transactions" },
    { value: "50ms", label: "Order matching latency" },
  ],
  features: [
    "Multi-cryptocurrency wallet integration",
    "Advanced order matching engine",
    "Cold and hot wallet management",
    "Real-time market data and charts",
    "KYC/AML verification systems",
    "Multi-signature security protocols",
  ],
  benefits: [
    "Bank-grade security and encryption",
    "High-performance trading infrastructure",
    "Regulatory compliance and reporting",
    "Seamless user onboarding experience",
    "Multi-blockchain interoperability",
    "24/7 trading with automated systems",
  ],
},

// Ye object aapko industries array mein add karna hai

{
  title: "Banking & Insurance",
  slug: "banking-insurance",
  icon: "🏛️",
  shortDescription: "Core banking systems and insurance platforms.",
  fullDescription:
    "Our banking and insurance solutions help financial institutions modernize their core systems and deliver superior customer experiences. We develop comprehensive core banking platforms, insurance management systems, policy administration solutions, and claims processing automation that enable digital transformation. Our solutions support retail banking, corporate banking, life insurance, general insurance, and health insurance operations while ensuring regulatory compliance with RBI, IRDAI guidelines and maintaining the highest security standards.",
  challenges: [
    "Modernizing legacy banking and insurance systems",
    "Ensuring regulatory compliance (RBI, IRDAI, SEBI)",
    "Managing omnichannel customer experiences",
    "Automating underwriting and claims processing",
    "Integrating with third-party systems and APIs",
    "Protecting sensitive customer and financial data",
  ],
  solutions: [
    "Core banking system (CBS) modernization",
    "Policy administration and management systems",
    "Claims processing automation",
    "Insurance aggregator platforms",
    "Customer relationship management (CRM)",
    "Agent and broker management portals",
  ],
  caseStudies: [
    {
      title: "Regional Bank",
      description:
        "Modernized core banking system that reduced transaction processing time by 60% and enabled real-time account updates across 500+ branches.",
    },
    {
      title: "Life Insurance Company",
      description:
        "Implemented a policy management platform that reduced policy issuance time from 15 days to 24 hours and increased customer satisfaction by 45%.",
    },
    {
      title: "General Insurance Provider",
      description:
        "Built an automated claims processing system that reduced claim settlement time by 70% and processed 50,000+ claims monthly with 95% accuracy.",
    },
  ],
  stats: [
    { value: "60%", label: "Faster transaction processing" },
    { value: "70%", label: "Reduced claim settlement time" },
    { value: "45%", label: "Improved customer satisfaction" },
    { value: "95%", label: "Claims processing accuracy" },
  ],
  features: [
    "Real-time core banking operations",
    "Automated policy underwriting and issuance",
    "Digital claims submission and tracking",
    "Multi-product and multi-branch support",
    "Integrated payment and collection systems",
    "Regulatory reporting and compliance",
  ],
  benefits: [
    "Reduced operational costs and manual work",
    "Faster service delivery and processing",
    "Enhanced customer experience and satisfaction",
    "Improved risk assessment and fraud detection",
    "Seamless omnichannel banking/insurance",
    "Complete audit trails and compliance",
  ],
},
// Ye object aapko industries array mein add karna hai

{
  title: "Investment & Wealth Management",
  slug: "investment-wealth",
  icon: "💼",
  shortDescription: "Portfolio management and wealth advisory platforms.",
  fullDescription:
    "Our investment and wealth management solutions help asset management companies, wealth advisors, and financial planners deliver personalized investment strategies and superior portfolio management services. We develop comprehensive wealth management platforms, robo-advisory systems, portfolio tracking applications, and investment analytics tools that enable data-driven decision making. Our solutions support mutual funds, stocks, bonds, alternative investments, and goal-based planning while ensuring compliance with SEBI regulations and providing real-time market insights.",
  challenges: [
    "Managing diverse investment portfolios across asset classes",
    "Providing personalized investment recommendations at scale",
    "Ensuring SEBI and regulatory compliance",
    "Integrating real-time market data and analytics",
    "Automating portfolio rebalancing and tax optimization",
    "Delivering transparent performance reporting to clients",
  ],
  solutions: [
    "Wealth management platforms",
    "Robo-advisory and algorithmic trading systems",
    "Portfolio management software (PMS)",
    "Mutual fund distribution platforms",
    "Goal-based financial planning tools",
    "Investment research and analytics dashboards",
  ],
  caseStudies: [
    {
      title: "Wealth Management Firm",
      description:
        "Implemented a comprehensive platform managing ₹5,000 crores AUM across 10,000+ clients with automated rebalancing and tax optimization.",
    },
    {
      title: "Robo-Advisory Startup",
      description:
        "Developed an AI-powered investment platform that onboarded 50,000 users in 6 months with personalized portfolio recommendations and achieved 18% average returns.",
    },
    {
      title: "AMC Distribution Network",
      description:
        "Built a mutual fund platform that increased distributor productivity by 40% and processed 25,000+ monthly transactions seamlessly.",
    },
  ],
  stats: [
    { value: "₹5,000Cr", label: "Assets under management" },
    { value: "40%", label: "Increase in advisor productivity" },
    { value: "18%", label: "Average portfolio returns" },
    { value: "50K+", label: "Active investors onboarded" },
  ],
  features: [
    "Multi-asset portfolio management",
    "Real-time market data integration",
    "Automated portfolio rebalancing",
    "Goal-based investment planning",
    "Risk profiling and assessment",
    "Tax-loss harvesting automation",
  ],
  benefits: [
    "Personalized investment strategies at scale",
    "Enhanced portfolio performance tracking",
    "Automated compliance and reporting",
    "Better client engagement and retention",
    "Data-driven investment decisions",
    "Reduced operational costs and errors",
  ],
},
  {
    title: "Finance",
    slug: "finance",
    icon: "💰",
    shortDescription: "FinTech and banking solutions for secure operations.",
    fullDescription:
      "Our financial technology solutions help banks, credit unions, insurance companies, and fintech startups deliver secure, efficient, and innovative financial services. We develop custom applications, payment systems, wealth management platforms, and financial analytics solutions that drive growth and operational excellence in the financial sector.",
    challenges: [
      "Ensuring compliance with financial regulations (PCI DSS, SOX, etc.)",
      "Protecting sensitive financial data from cyber threats",
      "Integrating with legacy banking systems",
      "Delivering seamless customer experiences across channels",
      "Adapting to rapidly evolving fintech landscape",
      "Managing and analyzing complex financial data",
    ],
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Wealth management applications",
      "Financial analytics and reporting",
      "Fraud detection and prevention",
      "Blockchain-based financial solutions",
    ],
    caseStudies: [
      {
        title: "Regional Bank",
        description:
          "Implemented a digital banking platform that increased mobile banking adoption by 45% and reduced branch transactions by 30%.",
      },
      {
        title: "Investment Management Firm",
        description:
          "Developed a wealth management platform that improved advisor productivity by 25% and increased client satisfaction by 40%.",
      },
      {
        title: "Payment Processor",
        description:
          "Built a fraud detection system that reduced fraudulent transactions by 60% while maintaining a 99.9% legitimate transaction approval rate.",
      },
    ],
    stats: [
      { value: "45%", label: "Increase in digital adoption" },
      { value: "60%", label: "Reduction in fraud" },
      { value: "30%", label: "Decrease in operational costs" },
      { value: "25%", label: "Improvement in customer satisfaction" },
    ],
    features: [
      "Secure digital banking platforms",
      "Real-time transaction monitoring",
      "Multi-factor authentication",
      "Automated compliance reporting",
      "AI-powered fraud detection",
      "Seamless payment processing",
    ],
    benefits: [
      "Enhanced security and compliance",
      "Improved customer experience",
      "Reduced operational costs",
      "Faster transaction processing",
      "Better risk management",
      "Data-driven decision making",
    ],
  },
  {
    title: "Retail & E-commerce",
    slug: "retail-ecommerce", // Ensure this matches the slug in the industries page
    icon: "🛍️",
    shortDescription: "Digital transformation for retail businesses.",
    fullDescription:
      "Our retail and e-commerce solutions help businesses create engaging online shopping experiences, optimize inventory management, and leverage data-driven insights to increase sales and customer loyalty. We develop custom e-commerce platforms, mobile shopping apps, inventory management systems, and retail analytics solutions tailored to the unique needs of the retail industry.",
    challenges: [
      "Creating seamless omnichannel shopping experiences",
      "Managing inventory across multiple channels",
      "Personalizing customer experiences at scale",
      "Optimizing pricing and promotions",
      "Streamlining order fulfillment and logistics",
      "Competing with large e-commerce platforms",
    ],
    solutions: [
      "Custom e-commerce platforms",
      "Mobile shopping applications",
      "Inventory and order management systems",
      "Customer analytics and personalization",
      "Point of sale (POS) integration",
      "Loyalty and rewards programs",
    ],
    caseStudies: [
      {
        title: "Fashion Retailer",
        description:
          "Implemented an omnichannel retail platform that increased online sales by 35% and improved inventory turnover by 20%.",
      },
      {
        title: "Specialty Goods Marketplace",
        description:
          "Developed a personalized shopping experience that increased average order value by 28% and customer retention by 40%.",
      },
      {
        title: "Home Goods Chain",
        description: "Built an inventory management system that reduced stockouts by 45% and carrying costs by 15%.",
      },
    ],
    stats: [
      { value: "35%", label: "Increase in online sales" },
      { value: "28%", label: "Higher average order value" },
      { value: "45%", label: "Reduction in stockouts" },
      { value: "40%", label: "Improvement in customer retention" },
    ],
    features: [
      "Responsive e-commerce platforms",
      "Personalized product recommendations",
      "Real-time inventory management",
      "Omnichannel customer experience",
      "Secure payment processing",
      "Advanced analytics dashboards",
    ],
    benefits: [
      "Increased sales and conversion rates",
      "Enhanced customer loyalty",
      "Optimized inventory management",
      "Reduced operational costs",
      "Data-driven marketing decisions",
      "Seamless omnichannel experience",
    ],
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    icon: "🏭",
    shortDescription: "Industry 4.0 and smart manufacturing solutions.",
    fullDescription:
      "Our manufacturing solutions help businesses implement Industry 4.0 technologies to improve operational efficiency, quality control, and supply chain management. We develop custom applications, IoT systems, predictive maintenance platforms, and manufacturing analytics solutions that drive innovation and excellence in the manufacturing sector.",
    challenges: [
      "Integrating legacy equipment with modern systems",
      "Implementing predictive maintenance to reduce downtime",
      "Optimizing production planning and scheduling",
      "Ensuring quality control and compliance",
      "Managing complex supply chains",
      "Collecting and analyzing manufacturing data",
    ],
    solutions: [
      "Industrial IoT implementations",
      "Predictive maintenance systems",
      "Manufacturing execution systems (MES)",
      "Supply chain management platforms",
      "Quality control and compliance solutions",
      "Manufacturing analytics and dashboards",
    ],
    caseStudies: [
      {
        title: "Automotive Parts Manufacturer",
        description:
          "Implemented a predictive maintenance system that reduced unplanned downtime by 35% and maintenance costs by 25%.",
      },
      {
        title: "Electronics Manufacturer",
        description:
          "Developed a quality control system that reduced defect rates by 40% and improved first-pass yield by 15%.",
      },
      {
        title: "Industrial Equipment Producer",
        description:
          "Built a supply chain management platform that reduced lead times by 30% and inventory costs by 20%.",
      },
    ],
    stats: [
      { value: "35%", label: "Reduction in downtime" },
      { value: "40%", label: "Decrease in defect rates" },
      { value: "30%", label: "Shorter lead times" },
      { value: "25%", label: "Lower maintenance costs" },
    ],
    features: [
      "IoT sensor integration",
      "Real-time production monitoring",
      "Predictive maintenance algorithms",
      "Digital twin technology",
      "Supply chain visibility",
      "Quality control automation",
    ],
    benefits: [
      "Reduced downtime and maintenance costs",
      "Improved product quality",
      "Optimized production scheduling",
      "Enhanced supply chain efficiency",
      "Data-driven decision making",
      "Increased operational agility",
    ],
  },
  {
    title: "Education",
    slug: "education",
    icon: "🎓",
    shortDescription: "EdTech and learning management systems.",
    fullDescription:
      "Our education technology solutions help schools, universities, and educational organizations deliver engaging learning experiences, streamline administrative processes, and leverage data-driven insights to improve educational outcomes. We develop custom learning management systems, student information systems, educational analytics platforms, and mobile learning applications tailored to the unique needs of the education sector.",
    challenges: [
      "Creating engaging digital learning experiences",
      "Managing student information and academic records",
      "Facilitating remote and hybrid learning",
      "Tracking and improving student performance",
      "Streamlining administrative processes",
      "Ensuring accessibility and inclusivity",
    ],
    solutions: [
      "Learning management systems (LMS)",
      "Student information systems (SIS)",
      "Virtual classroom platforms",
      "Educational analytics and reporting",
      "Mobile learning applications",
      "Administrative workflow automation",
    ],
    caseStudies: [
      {
        title: "University System",
        description:
          "Implemented a learning management system that increased student engagement by 45% and improved course completion rates by 30%.",
      },
      {
        title: "K-12 School District",
        description:
          "Developed a student information system that reduced administrative workload by 35% and improved parent-teacher communication by 50%.",
      },
      {
        title: "Online Learning Provider",
        description:
          "Built an analytics platform that helped identify at-risk students with 85% accuracy, leading to a 25% improvement in retention rates.",
      },
    ],
    stats: [
      { value: "45%", label: "Increase in student engagement" },
      { value: "30%", label: "Higher course completion rates" },
      { value: "35%", label: "Reduction in administrative work" },
      { value: "25%", label: "Improvement in student retention" },
    ],
    features: [
      "Interactive learning platforms",
      "Personalized learning paths",
      "Real-time progress tracking",
      "Virtual classroom tools",
      "Automated grading systems",
      "Comprehensive analytics dashboards",
    ],
    benefits: [
      "Enhanced student engagement",
      "Improved learning outcomes",
      "Reduced administrative burden",
      "Better parent-teacher communication",
      "Data-driven educational decisions",
      "Support for diverse learning styles",
    ],
  },
  {
    title: "Government",
    slug: "government",
    icon: "🏛️",
    shortDescription: "Public sector digital transformation solutions.",
    fullDescription:
      "Our government solutions help public sector organizations improve citizen services, streamline operations, and enhance data security and compliance. We develop custom applications, citizen portals, workflow automation systems, and data analytics platforms tailored to the unique needs of government agencies at the local, state, and federal levels.",
    challenges: [
      "Modernizing legacy government systems",
      "Improving citizen service delivery",
      "Ensuring compliance with government regulations",
      "Securing sensitive government data",
      "Streamlining administrative processes",
      "Managing and analyzing public sector data",
    ],
    solutions: [
      "Citizen service portals",
      "Government workflow automation",
      "Public records management systems",
      "Government data analytics platforms",
      "Regulatory compliance solutions",
      "Smart city implementations",
    ],
    caseStudies: [
      {
        title: "Municipal Government",
        description:
          "Implemented a citizen service portal that reduced service request resolution time by 40% and improved citizen satisfaction by 35%.",
      },
      {
        title: "State Agency",
        description:
          "Developed a workflow automation system that reduced processing time for applications by 50% and administrative costs by 30%.",
      },
      {
        title: "Federal Department",
        description:
          "Built a data analytics platform that improved decision-making efficiency by 45% and identified cost-saving opportunities of over $3 million annually.",
      },
    ],
    stats: [
      { value: "40%", label: "Faster service delivery" },
      { value: "50%", label: "Reduction in processing time" },
      { value: "35%", label: "Improvement in citizen satisfaction" },
      { value: "30%", label: "Decrease in administrative costs" },
    ],
    features: [
      "Citizen self-service portals",
      "Secure document management",
      "Automated workflow systems",
      "Compliance monitoring tools",
      "Open data platforms",
      "Smart city infrastructure",
    ],
    benefits: [
      "Improved citizen satisfaction",
      "Reduced operational costs",
      "Enhanced transparency",
      "Faster service delivery",
      "Better resource allocation",
      "Data-driven policy decisions",
    ],
  },
  {
    title: "Transportation & Logistics",
    slug: "transportation",
    icon: "🚚",
    shortDescription: "Smart logistics, fleet management, and supply chain optimization.",
    fullDescription:
      "Our transportation and logistics solutions help companies optimize their supply chains, improve fleet management, and enhance operational efficiency. We develop custom applications, IoT systems, route optimization platforms, and logistics analytics solutions that drive innovation and excellence in the transportation and logistics sector.",
    challenges: [
      "Optimizing route planning and delivery schedules",
      "Managing fleet maintenance and utilization",
      "Tracking shipments and assets in real-time",
      "Reducing fuel consumption and carbon emissions",
      "Ensuring compliance with transportation regulations",
      "Integrating with multiple supply chain partners",
    ],
    solutions: [
      "Fleet management systems",
      "Route optimization platforms",
      "Real-time tracking and visibility solutions",
      "Warehouse management systems",
      "Transportation management systems (TMS)",
      "Supply chain analytics and dashboards",
    ],
    caseStudies: [
      {
        title: "Global Logistics Provider",
        description:
          "Implemented a route optimization system that reduced delivery times by 25% and fuel costs by 18% across their fleet of 500+ vehicles.",
      },
      {
        title: "Regional Trucking Company",
        description:
          "Developed a fleet management platform that improved vehicle utilization by 30% and reduced maintenance costs by 22%.",
      },
      {
        title: "E-commerce Fulfillment Center",
        description:
          "Built a warehouse management system that increased order processing speed by 40% and reduced picking errors by 35%.",
      },
    ],
    stats: [
      { value: "25%", label: "Reduction in delivery times" },
      { value: "30%", label: "Improvement in fleet utilization" },
      { value: "18%", label: "Decrease in fuel costs" },
      { value: "40%", label: "Faster order processing" },
    ],
    features: [
      "Real-time GPS tracking and telematics",
      "Predictive maintenance for fleet vehicles",
      "Dynamic route optimization algorithms",
      "Mobile driver applications",
      "Automated dispatch and scheduling",
      "Advanced analytics and reporting dashboards",
    ],
    benefits: [
      "Reduced operational costs",
      "Improved delivery performance and reliability",
      "Enhanced visibility across the supply chain",
      "Optimized resource allocation",
      "Decreased environmental impact",
      "Data-driven logistics decisions",
    ],
  },
  {
    title: "Energy & Utilities",
    slug: "energy",
    icon: "⚡",
    shortDescription: "Smart grid, renewable energy, and utility management solutions.",
    fullDescription:
      "Our energy and utilities solutions help companies modernize their infrastructure, improve operational efficiency, and transition to renewable energy sources. We develop custom applications, IoT systems, smart grid platforms, and energy analytics solutions that drive innovation and sustainability in the energy and utilities sector.",
    challenges: [
      "Modernizing aging utility infrastructure",
      "Integrating renewable energy sources",
      "Managing peak demand and load balancing",
      "Improving grid reliability and resilience",
      "Reducing energy losses and operational costs",
      "Ensuring compliance with environmental regulations",
    ],
    solutions: [
      "Smart grid management systems",
      "Energy management platforms",
      "Renewable energy integration solutions",
      "Utility asset management systems",
      "Outage management and response systems",
      "Energy analytics and forecasting tools",
    ],
    caseStudies: [
      {
        title: "Regional Utility Provider",
        description:
          "Implemented a smart grid management system that reduced outage response times by 45% and improved grid reliability by 30%.",
      },
      {
        title: "Renewable Energy Developer",
        description:
          "Developed an energy management platform that optimized renewable energy production by 25% and improved forecasting accuracy by 35%.",
      },
      {
        title: "Municipal Water Utility",
        description:
          "Built an asset management system that reduced maintenance costs by 28% and extended infrastructure lifespan by 15%.",
      },
    ],
    stats: [
      { value: "45%", label: "Faster outage response" },
      { value: "30%", label: "Improvement in grid reliability" },
      { value: "25%", label: "Increase in renewable energy efficiency" },
      { value: "28%", label: "Reduction in maintenance costs" },
    ],
    features: [
      "Real-time monitoring and control systems",
      "Predictive maintenance for utility assets",
      "Demand response and load management",
      "Advanced metering infrastructure (AMI)",
      "Distributed energy resource management",
      "Energy consumption analytics and reporting",
    ],
    benefits: [
      "Improved grid reliability and resilience",
      "Reduced operational and maintenance costs",
      "Enhanced integration of renewable energy",
      "Optimized energy distribution and consumption",
      "Decreased environmental impact",
      "Data-driven energy management decisions",
    ],
  },
  {
    title: "Media & Entertainment",
    slug: "media",
    icon: "🎬",
    shortDescription: "Digital content delivery, streaming platforms, and audience engagement.",
    fullDescription:
      "Our media and entertainment solutions help companies create, manage, and distribute digital content, engage audiences, and monetize their offerings. We develop custom applications, content management systems, streaming platforms, and audience analytics solutions that drive innovation and growth in the media and entertainment sector.",
    challenges: [
      "Creating seamless multi-platform content delivery",
      "Managing and protecting digital content rights",
      "Personalizing user experiences at scale",
      "Monetizing content effectively",
      "Analyzing audience behavior and preferences",
      "Competing in a rapidly evolving digital landscape",
    ],
    solutions: [
      "Content management and distribution platforms",
      "Video streaming and OTT solutions",
      "Digital rights management systems",
      "Audience engagement and analytics platforms",
      "Subscription and payment management systems",
      "Personalization and recommendation engines",
    ],
    caseStudies: [
      {
        title: "Global Media Company",
        description:
          "Implemented a content distribution platform that increased viewer engagement by 40% and reduced content delivery costs by 25%.",
      },
      {
        title: "Streaming Service Provider",
        description:
          "Developed a personalization engine that improved content discovery by 35% and increased subscriber retention by 28%.",
      },
      {
        title: "Digital Publishing House",
        description:
          "Built a subscription management system that increased conversion rates by 32% and reduced churn by 20%.",
      },
    ],
    stats: [
      { value: "40%", label: "Increase in viewer engagement" },
      { value: "35%", label: "Improvement in content discovery" },
      { value: "28%", label: "Higher subscriber retention" },
      { value: "25%", label: "Reduction in delivery costs" },
    ],
    features: [
      "Multi-platform content delivery",
      "Adaptive streaming technologies",
      "Content recommendation algorithms",
      "Real-time audience analytics",
      "Digital rights management",
      "Monetization and subscription tools",
    ],
    benefits: [
      "Enhanced audience engagement and retention",
      "Improved content discovery and consumption",
      "Optimized monetization strategies",
      "Reduced operational costs",
      "Better understanding of audience preferences",
      "Data-driven content and business decisions",
    ],
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    icon: "🏢",
    shortDescription: "Property management, virtual tours, and smart building solutions.",
    fullDescription:
      "Our real estate solutions help property developers, managers, and agencies streamline operations, enhance customer experiences, and optimize building performance. We develop custom applications, property management systems, virtual tour platforms, and smart building solutions that drive innovation and efficiency in the real estate sector.",
    challenges: [
      "Streamlining property management operations",
      "Enhancing property marketing and visualization",
      "Optimizing building performance and energy usage",
      "Improving tenant and buyer experiences",
      "Managing maintenance and service requests efficiently",
      "Analyzing property data for investment decisions",
    ],
    solutions: [
      "Property management platforms",
      "Virtual tour and 3D visualization tools",
      "Smart building management systems",
      "Tenant and buyer portals",
      "Maintenance and service request systems",
      "Real estate analytics and reporting dashboards",
    ],
    caseStudies: [
      {
        title: "Commercial Property Manager",
        description:
          "Implemented a property management platform that reduced administrative workload by 35% and improved tenant satisfaction by 28%.",
      },
      {
        title: "Residential Real Estate Agency",
        description:
          "Developed a virtual tour platform that increased property viewing engagement by 45% and reduced time-to-sale by 20%.",
      },
      {
        title: "Smart Building Developer",
        description:
          "Built a building management system that reduced energy consumption by 30% and maintenance costs by 25%.",
      },
    ],
    stats: [
      { value: "35%", label: "Reduction in administrative work" },
      { value: "45%", label: "Increase in property viewing engagement" },
      { value: "30%", label: "Decrease in energy consumption" },
      { value: "28%", label: "Improvement in tenant satisfaction" },
    ],
    features: [
      "Comprehensive property management tools",
      "Immersive 3D property visualization",
      "IoT-based building monitoring and control",
      "Automated maintenance scheduling",
      "Tenant/buyer communication portals",
      "Property performance analytics",
    ],
    benefits: [
      "Streamlined property management operations",
      "Enhanced property marketing and sales",
      "Reduced operational and energy costs",
      "Improved tenant and buyer experiences",
      "Better maintenance and facility management",
      "Data-driven property investment decisions",
    ],
  },
  {
    title: "Hospitality & Tourism",
    slug: "hospitality",
    icon: "🏨",
    shortDescription: "Guest experience, booking systems, and operational efficiency solutions.",
    fullDescription:
      "Our hospitality and tourism solutions help hotels, resorts, restaurants, and travel companies enhance guest experiences, streamline operations, and optimize revenue management. We develop custom applications, booking systems, guest experience platforms, and hospitality analytics solutions that drive innovation and excellence in the hospitality and tourism sector.",
    challenges: [
      "Delivering exceptional guest experiences",
      "Managing reservations and bookings efficiently",
      "Optimizing room and resource utilization",
      "Streamlining front and back-of-house operations",
      "Personalizing guest services and offers",
      "Analyzing performance and guest feedback",
    ],
    solutions: [
      "Hotel management systems",
      "Booking and reservation platforms",
      "Guest experience and loyalty applications",
      "Restaurant and food service management",
      "Revenue management systems",
      "Hospitality analytics and reporting tools",
    ],
    caseStudies: [
      {
        title: "International Hotel Chain",
        description:
          "Implemented a guest experience platform that increased guest satisfaction scores by 32% and repeat bookings by 25%.",
      },
      {
        title: "Boutique Resort Group",
        description:
          "Developed a revenue management system that improved occupancy rates by 18% and increased average daily rate by 15%.",
      },
      {
        title: "Restaurant Franchise",
        description:
          "Built an operations management platform that reduced table turnover time by 22% and increased service efficiency by 30%.",
      },
    ],
    stats: [
      { value: "32%", label: "Increase in guest satisfaction" },
      { value: "25%", label: "More repeat bookings" },
      { value: "18%", label: "Improvement in occupancy rates" },
      { value: "30%", label: "Greater service efficiency" },
    ],
    features: [
      "Integrated property management systems",
      "Mobile check-in and keyless entry",
      "Personalized guest services",
      "Dynamic pricing and revenue optimization",
      "Inventory and resource management",
      "Guest feedback and analytics dashboards",
    ],
    benefits: [
      "Enhanced guest experiences and satisfaction",
      "Optimized revenue and occupancy rates",
      "Streamlined operational efficiency",
      "Reduced administrative workload",
      "Improved staff productivity and coordination",
      "Data-driven hospitality management decisions",
    ],
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    icon: "🌾",
    shortDescription: "Precision farming, crop monitoring, and agricultural management systems.",
    fullDescription:
      "Our agriculture solutions help farmers, agribusinesses, and food producers optimize crop production, monitor field conditions, and streamline agricultural operations. We develop custom applications, precision farming platforms, crop monitoring systems, and agricultural analytics solutions that drive innovation and sustainability in the agriculture sector.",
    challenges: [
      "Optimizing crop yields and resource usage",
      "Monitoring field conditions and crop health",
      "Managing farm operations and equipment",
      "Predicting and mitigating weather impacts",
      "Ensuring compliance with agricultural regulations",
      "Analyzing agricultural data for decision-making",
    ],
    solutions: [
      "Precision farming platforms",
      "Crop monitoring and management systems",
      "Farm operations management software",
      "Weather monitoring and prediction tools",
      "Supply chain and logistics management",
      "Agricultural analytics and reporting dashboards",
    ],
    caseStudies: [
      {
        title: "Large-Scale Grain Producer",
        description:
          "Implemented a precision farming system that increased crop yields by 22% and reduced fertilizer usage by 18%.",
      },
      {
        title: "Fruit Orchard Cooperative",
        description:
          "Developed a crop monitoring platform that improved fruit quality by 25% and reduced pest-related losses by 30%.",
      },
      {
        title: "Dairy Farm Operation",
        description:
          "Built a farm management system that increased milk production by 15% and reduced operational costs by 20%.",
      },
    ],
    stats: [
      { value: "22%", label: "Increase in crop yields" },
      { value: "18%", label: "Reduction in resource usage" },
      { value: "30%", label: "Fewer pest-related losses" },
      { value: "20%", label: "Lower operational costs" },
    ],
    features: [
      "Satellite and drone-based field monitoring",
      "IoT sensors for soil and crop conditions",
      "Precision application of water and nutrients",
      "Equipment tracking and management",
      "Harvest planning and yield forecasting",
    "Agricultural data analytics and reporting",
    ],
    benefits: [
      "Improved crop yields and quality",
      "Reduced resource usage and waste",
      "Enhanced farm operation efficiency",
      "Better pest and disease management",
      "Decreased environmental impact",
      "Data-driven agricultural decisions",
    ],
  },



]

export default function IndustryClientPage({ indust }: IndustryPageProps) {
  const industry = industries.find((ind) => ind.slug === indust)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    hero: false,
    overview: false,
    features: false,
    success: false,
    why: false,
    demo: false,
    cta: false,
  })

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    success: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    demo: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  }

  const [activeSection, setActiveSection] = useState<string>("hero")
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; delay: number; speed: number }>
  >([])
  const [countersAnimated, setCountersAnimated] = useState(false)

  // Parallax effect for hero section
  const { scrollY: scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 300], [1, 0.3])
  const heroY = useTransform(scrollYProgress, [0, 300], [0, 100])
  const heroScale = useTransform(scrollYProgress, [0, 300], [1, 0.95])
  const springScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Background gradient animation
  const gradientPosition = useTransform(springScrollY, [0, 1000], [0, 100])
  const gradientRotation = useTransform(springScrollY, [0, 1000], [0, 45])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      delay: Math.random() * 5,
      speed: Math.random() * 2 + 1,
    }))
    setParticles(newParticles)

    // Set up intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }))

            if (sectionId !== "hero") {
              setActiveSection(sectionId)
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = Object.entries(sectionRefs)
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, ref] = sections[i]
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Staggered animation for hero section
    const timer = setTimeout(() => {
      setVisibleSections((prev) => ({ ...prev, hero: true }))
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  // Reset state when slug changes
  useEffect(() => {
    // Reset visible sections
    setVisibleSections({
      hero: false,
      overview: false,
      features: false,
      success: false,
      why: false,
      demo: false,
      cta: false,
    })

    // Reset counters animation
    setCountersAnimated(false)

    // Staggered animation for hero section
    const timer = setTimeout(() => {
      setVisibleSections((prev) => ({ ...prev, hero: true }))
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [indust])

  if (!industry) {
    notFound()
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  const floatAnimation = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3 + i,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    }),
  }

  const glowAnimation = {
    initial: { boxShadow: "0 0 0 rgba(99, 102, 241, 0)" },
    animate: {
      boxShadow: ["0 0 0 rgba(99, 102, 241, 0)", "0 0 20px rgba(99, 102, 241, 0.5)", "0 0 0 rgba(99, 102, 241, 0)"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  // Counter animation
  const animateCounter = (value: string) => {
    if (countersAnimated) return value

    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    if (isNaN(numericValue)) return value

    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setCountersAnimated(true)}
      >
        {value}
      </motion.span>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10 opacity-70"
        style={{
          backgroundPosition: `${gradientPosition.get()}% ${gradientPosition.get()}%`,
          rotate: gradientRotation,
        }}
      />

      {/* Floating Navigation */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg border border-gray-100">
          <ul className="flex flex-col gap-4">
            {Object.keys(sectionRefs).map((section) => (
              <li key={section} className="relative group">
                <button
                  onClick={() => handleSectionClick(section)}
                  className="w-3 h-3 rounded-full transition-all duration-300 relative"
                  aria-label={`Navigate to ${section} section`}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === section
                        ? "bg-primary scale-100"
                        : "bg-gray-300 scale-100 group-hover:bg-gray-400"
                    }`}
                  />
                  {activeSection === section && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary/30"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.8, opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </button>
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-white shadow-md border border-gray-100 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Hero Section with Animated Background */}
      <motion.section
        ref={sectionRefs.hero}
        className="py-24 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden"
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        id="hero"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Animated particles */}
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white/20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -30 * particle.speed, 0],
                x: [0, Math.sin(index) * 15, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating industry icon */}
        <motion.div
          className="absolute top-12 right-12 text-4xl opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {industry.icon}
        </motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                x: visibleSections.hero ? 0 : -20,
              }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/industries">
                <Button variant="ghost" className="text-gray-300 hover:text-white mb-6 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to
                  Industries
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                y: visibleSections.hero ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6 backdrop-blur-sm border border-white/10"
            
                style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
              >
                <span className="text-4xl">{industry.icon}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white/5"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <h1 className="text-4xl py-3 md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {industry.title}
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                y: visibleSections.hero ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {industry.shortDescription}
            </motion.p>

   
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 text-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Overview Section */}
            <motion.div
              ref={sectionRefs.overview}
              className="mb-20"
              id="overview"
              initial="hidden"
              animate={visibleSections.overview ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center mb-6" variants={fadeIn} custom={0}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 relative"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  custom={1}
                >
                  <Sparkles className="h-6 w-6 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5, opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="h-px w-10 bg-gradient-to-r from-primary to-accent mb-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                </div>
              </motion.div>

              <motion.p className="text-lg text-gray-600 mb-8 leading-relaxed" variants={fadeIn} custom={1}>
                {industry.fullDescription}
              </motion.p>

              {/* Key Metrics */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                variants={fadeIn}
                custom={2}
                ref={sectionRefs.features}
                id="features"
              >
                {industry.stats?.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(99, 102, 241, 0.3)",
                    }}
                    variants={cardVariants}
                    custom={index}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div
                      className="text-3xl font-bold text-primary mb-2 relative"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {visibleSections.features ? stat.value : "0%"}
                    </motion.div>
                    <div className="text-sm text-gray-600 relative">{stat.label}</div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" variants={fadeIn} custom={3}>
                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -mt-10 -mr-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(30px)" }}
                  />

                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Star className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      Key Features
                    </h3>
                  </div>

                  <motion.ul
                    className="space-y-4 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {industry.features?.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start group/item"
                        variants={listItemVariants}
                        custom={index}
                      >
                        <div className="mr-3 mt-0.5 flex-shrink-0 relative">
                          <motion.div
                            className="w-5 h-5 rounded-full bg-accent/10 absolute inset-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.05 * index, duration: 0.3 }}
                          />
                          <CheckCircle className="h-5 w-5 text-accent group-hover:text-primary relative z-10 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full -mb-10 -ml-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(30px)" }}
                  />

                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                    >
                      <Zap className="h-5 w-5 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors duration-300">
                      Benefits
                    </h3>
                  </div>

                  <motion.ul
                    className="space-y-4 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {industry.benefits?.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start group/item"
                        variants={listItemVariants}
                        custom={index}
                      >
                        <div className="mr-3 mt-0.5 flex-shrink-0 relative">
                          <motion.div
                            className="w-5 h-5 rounded-full bg-primary/10 absolute inset-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.05 * index, duration: 0.3 }}
                          />
                          <CheckCircle className="h-5 w-5 text-primary group-hover:text-accent relative z-10 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Use Cases Section */}
            <motion.div
              ref={sectionRefs.success}
              className="mb-20"
              id="success"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center mb-8" variants={fadeIn} custom={0}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 relative"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  custom={2}
                >
                  <BarChart className="h-6 w-6 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5, opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="h-px w-10 bg-gradient-to-r from-primary to-accent mb-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industry.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                    variants={cardVariants}
                    custom={index}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {index === 0 && <Users className="h-6 w-6 text-primary" />}
                      {index === 1 && <Shield className="h-6 w-6 text-primary" />}
                      {index === 2 && <BarChart className="h-6 w-6 text-primary" />}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(99, 102, 241, 0)",
                            "0 0 20px rgba(99, 102, 241, 0.5)",
                            "0 0 0 rgba(99, 102, 241, 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300 relative z-10">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                      {caseStudy.description}
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
              ref={sectionRefs.why}
              className="mb-20"
              id="why"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center mb-8" variants={fadeIn} custom={0}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 relative"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  custom={3}
                >
                  <Shield className="h-6 w-6 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5, opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="h-px w-10 bg-gradient-to-r from-primary to-accent mb-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <h2 className="text-3xl font-bold text-gray-900">Why Choose Our {industry.title} Solutions</h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={1}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Shield className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Expert Team
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Our team of certified {industry.title} specialists brings years of experience and deep expertise
                      to every project.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={2}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Zap className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Proven Methodology
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Our battle-tested approach ensures successful implementation and measurable results for your
                      business.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={3}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Clock className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Rapid Implementation
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      We deliver solutions quickly and efficiently, helping you realize value from your investment
                      faster.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={4}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Users className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Our relationship doesn't end at deployment. We provide continuous support and optimization for
                      your solution.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              ref={sectionRefs.cta}
              className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white transform transition-transform hover:scale-[1.02] duration-300 relative overflow-hidden"
              id="cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                scale: 1.03,
              }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full"
                style={{ filter: "blur(40px)" }}
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full"
                style={{ filter: "blur(40px)" }}
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              <motion.h3
                className="text-2xl font-bold mb-4 relative z-10"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to transform your {industry.title.toLowerCase()} business?
              </motion.h3>
              <motion.p
                className="mb-6 relative z-10"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Contact us today to discuss how our {industry.title} solutions can help your business thrive.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 relative z-10"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white group">
                    {" "}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                <Button variant="outline" className="border-white text-black hover:bg-white/10" size="lg">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-4 mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore Related Industries
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {industries
              .filter((ind) => ind.slug !== industry.slug)
              .slice(0, 3)
              .map((ind, index) => (
                <motion.div key={ind.slug} variants={cardVariants} custom={index} whileHover={{ y: -10, scale: 1.02 }}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group block p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl h-full"
                    onClick={() => {
                      // Force scroll to top on navigation
                      window.scrollTo(0, 0)
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <span className="text-2xl">{ind.icon}</span>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{ind.shortDescription}</p>
                    <div className="flex items-center mt-auto pt-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-between group-hover:text-primary transition-colors duration-300 group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}

