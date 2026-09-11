import { ServiceGroup, Industry, ClientPartner, ComplianceBody, Principle } from '../types';

import heroTechImg from '../assets/images/hero_tech_engineering_1789124883108.jpg';
import techDigitalImg from '../assets/images/tech_digital_feature_1789124901375.jpg';
import engineeringImg from '../assets/images/engineering_feature_1789124913085.jpg';
import smartSecurityImg from '../assets/images/smart_security_feature_1789124930225.jpg';
import businessTrainingImg from '../assets/images/business_training_feature_1789124943666.jpg';

export const HERO_IMAGE = heroTechImg;

export const COMPANY_INFO = {
  name: 'Jarecha Investments Limited',
  tagline: 'Technology. Engineering. Solutions.',
  headline: 'SOLUTIONS THAT MOVE BUSINESS FORWARD.',
  subheadline: 'Technology, engineering, security and business solutions designed to help organizations operate, grow and move forward across Zambia.',
  phone: '0977 325 804',
  phoneFormatted: '+260 977 325 804',
  whatsappUrl: 'https://wa.me/260977325804?text=Hello%20Jarecha%20Investments,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  email: 'JarechaInvestments@gmail.com',
  address: 'Lusaka & Copperbelt, Zambia',
  registration: 'Registered in the Republic of Zambia'
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    number: '01',
    title: 'TECHNOLOGY & DIGITAL',
    headline: 'Technology infrastructure, cybersecurity and enterprise digital systems.',
    description: 'Mission-critical digital architectures built for high availability, zero-trust cybersecurity, and frictionless organizational workflows.',
    image: techDigitalImg,
    imageAlt: 'Enterprise ICT and Network Operations Center',
    services: [
      {
        id: 'ict-infrastructure',
        title: 'ICT Services & Tech Infrastructure',
        shortDesc: 'Provide technology infrastructure and ICT solutions for modern organizations.',
        fullDesc: 'Comprehensive enterprise ICT engineering encompassing server environments, structured structured cabling, local and wide-area networking, storage solutions, and hardware procurement designed for institutional uptime.',
        capabilities: [
          'Enterprise Network Design & Structured Cabling',
          'Server Infrastructure & Virtualization',
          'Hardware Procurement & Lifecycle Management',
          'Disaster Recovery & Redundant Backups'
        ],
        iconName: 'Server'
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity Consulting',
        shortDesc: 'Professional cybersecurity guidance designed to strengthen digital security.',
        fullDesc: 'Holistic threat assessment, penetration testing, endpoint defense architectures, and vulnerability management tailored to safeguard corporate assets and customer privacy.',
        capabilities: [
          'Vulnerability & Penetration Testing',
          'Zero-Trust Architecture Advisory',
          'Incident Response & Recovery Protocols',
          'Staff Cyber Hygiene & Policy Formulations'
        ],
        iconName: 'ShieldCheck'
      },
      {
        id: 'web-hosting',
        title: 'Web Solutions & Hosting',
        shortDesc: 'Website development, hosting and related digital solutions.',
        fullDesc: 'High-performance web portals, institutional web applications, and resilient cloud hosting environments optimized for speed, reliability, and security compliance.',
        capabilities: [
          'Custom Web Application Development',
          'High-Availability Cloud Hosting',
          'Database Management & Maintenance',
          'SSL Encryption & Continuous Monitoring'
        ],
        iconName: 'Globe'
      },
      {
        id: 'email-domain',
        title: 'Email & Domain Services',
        shortDesc: 'Professional business email and domain solutions.',
        fullDesc: 'Corporate domain provisioning, DNS routing security (SPF, DKIM, DMARC), and enterprise-grade email systems that reflect institutional legitimacy and secure communications.',
        capabilities: [
          'Domain Registration & Portfolio Management',
          'Enterprise Cloud Email Integration',
          'DMARC, DKIM & Anti-Spam Safeguards',
          'Mailbox Migration & Ongoing Support'
        ],
        iconName: 'Mail'
      },
      {
        id: 'digital-transformation',
        title: 'Digital Transformation Management Systems',
        shortDesc: 'Digital systems designed to improve organizational processes and operations.',
        fullDesc: 'End-to-end modernization of legacy administrative practices through ERP workflows, document automation, business intelligence dashboards, and streamlined digital systems.',
        capabilities: [
          'Workflow Automation & Paperless Systems',
          'ERP & CRM System Advisory',
          'Process Auditing & System Integration',
          'Executive Decision Dashboards'
        ],
        iconName: 'Workflow'
      }
    ]
  },
  {
    number: '02',
    title: 'ENGINEERING & INFRASTRUCTURE',
    headline: 'Precision technical engineering supporting organizational facilities and industry.',
    description: 'Rigorous engineering practices that integrate industrial standards, structural integrity, and robust facility performance.',
    image: engineeringImg,
    imageAlt: 'Industrial and Mechanical Infrastructure Engineering',
    services: [
      {
        id: 'engineering-services',
        title: 'Engineering Services',
        shortDesc: 'Technical engineering solutions supporting organizational and infrastructure requirements.',
        fullDesc: 'Full-spectrum technical engineering services encompassing industrial maintenance, electrical instrumentation, HVAC climate control systems, civil civil modifications, and specialized infrastructure contracting.',
        capabilities: [
          'Electrical & Power Distribution Systems',
          'HVAC & Climate Control Engineering',
          'Industrial Mechanical Maintenance',
          'Preventive Maintenance & Safety Inspections'
        ],
        iconName: 'Cpu'
      }
    ]
  },
  {
    number: '03',
    title: 'SECURITY & SMART OFFICE',
    headline: 'Connected workplace automation, access perimeter control and surveillance.',
    description: 'Integrated physical and digital safeguards designed to protect property, regulate physical ingress, and optimize team productivity.',
    image: smartSecurityImg,
    imageAlt: 'Commercial Smart Office and Biometric Security Systems',
    services: [
      {
        id: 'smart-office',
        title: 'Smart Office Solutions',
        shortDesc: 'Modern technology solutions designed to improve workplace efficiency and functionality.',
        fullDesc: 'Intelligent meeting room AV setups, IoT ambient energy controls, wireless presentation hardware, and automated office utilities that elevate workplace productivity.',
        capabilities: [
          'Automated Conference & Boardroom Systems',
          'Smart Energy & Lighting Controls',
          'Collaborative Audio-Visual Infrastructure',
          'Centralized Facility Device Controls'
        ],
        iconName: 'Building2'
      },
      {
        id: 'cctv-access',
        title: 'CCTV Surveillance & Access Control Systems',
        shortDesc: 'Professional surveillance and access control solutions for facilities.',
        fullDesc: 'Industrial-grade IP video surveillance with remote telemetry, biometric turnstiles, RFID card gateways, and time-and-attendance synchronization for commercial premises.',
        capabilities: [
          'High-Definition IP CCTV with Night Vision',
          'Biometric & RFID Access Control Gates',
          'Central Monitoring Stations & Cloud NVR',
          'Time & Attendance Automated Logging'
        ],
        iconName: 'Video'
      }
    ]
  },
  {
    number: '04',
    title: 'BUSINESS & CAPACITY BUILDING',
    headline: 'Institutional workforce skills development, auditing and financial rigor.',
    description: 'Equipping organizational teams with high-yield competencies while ensuring financial transparency, statutory compliance, and operational discipline.',
    image: businessTrainingImg,
    imageAlt: 'Executive Boardroom Strategy and Professional Capacity Training',
    services: [
      {
        id: 'capacity-building',
        title: 'Capacity Building Training Solutions',
        shortDesc: 'Training solutions designed to build organizational capability and skills.',
        fullDesc: 'Tailored executive, technical, and operational training workshops designed to upskill leadership, engineers, and administrative staff across emerging technologies and governance.',
        capabilities: [
          'Corporate Technology Upskilling Programs',
          'Operational Leadership Workshops',
          'Compliance & Quality Standards Training',
          'Customized Institutional Curriculum'
        ],
        iconName: 'GraduationCap'
      },
      {
        id: 'auditing-accounting',
        title: 'Auditing & Accounting',
        shortDesc: 'Professional auditing and accounting services supporting business operations.',
        fullDesc: 'Independent internal audits, forensic reviews, statutory tax filing advisory, and rigorous financial bookkeeping aligned with Zambian regulatory frameworks.',
        capabilities: [
          'Statutory & Internal Audit Support',
          'Management Accounting & Reconciliation',
          'ZRA Tax Advisory & Compliance Planning',
          'Internal Control System Evaluations'
        ],
        iconName: 'FileSpreadsheet'
      }
    ]
  }
];

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'RELIABILITY',
    description: 'Practical solutions designed around real operational needs.',
    detail: 'We engineer systems built for continuous uptime, rugged enterprise duty, and practical operational longevity rather than short-lived novelty.'
  },
  {
    number: '02',
    title: 'TECHNICAL CAPABILITY',
    description: 'Multi-disciplinary competence spanning digital, engineering and compliance.',
    detail: 'Deep technical competencies across modern networking, mechanical engineering, perimeter security, and statutory accounting under one roof.'
  },
  {
    number: '03',
    title: 'INTEGRATED SOLUTIONS',
    description: 'Multiple capabilities brought together through one reliable partner.',
    detail: 'Eliminating multi-vendor friction by providing single-point accountability for institutional technology, infrastructure, and operational projects.'
  },
  {
    number: '04',
    title: 'PROFESSIONAL STANDARDS',
    description: 'Uncompromising adherence to statutory governance and quality.',
    detail: 'Fully certified and registered across Zambia’s national regulatory bodies, ensuring peace of mind, rigorous compliance, and transparent delivery.'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'mining',
    name: 'Mining',
    description: 'Robust comms, industrial networking, heavy engineering support, and rugged surveillance for mining plants and extraction operations.',
    iconName: 'Pickaxe',
    scope: 'Copperbelt & North-Western mining complexes'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Clean power backup, high-uptime hospital IT networks, secure patient record infrastructure, and reliable facility maintenance.',
    iconName: 'HeartPulse',
    scope: 'General & specialized provincial referral hospitals'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Campus-wide wireless networks, computer laboratory installations, interactive learning systems, and capacity training for staff.',
    iconName: 'GraduationCap',
    scope: 'Universities, colleges, and secondary institutions'
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Compliant digital transformation, public sector procurement readiness (ZPPA), secure server infrastructure, and municipal systems.',
    iconName: 'Landmark',
    scope: 'Civic authorities and statutory agency offices'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Smart commercial properties, tenant access control, web presence, professional email routing, and energy-efficient office upgrades.',
    iconName: 'Briefcase',
    scope: 'Retail complexes, corporate towers, and commercial parks'
  },
  {
    id: 'industrial',
    name: 'Engineering & Industrial',
    description: 'Specialized electrical instrumentation, industrial access surveillance, facility HVAC maintenance, and engineering advisory.',
    iconName: 'Factory',
    scope: 'Processing plants, fabrication yards, and logistics depots'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Executive smart boardrooms, zero-trust cybersecurity, auditing and bookkeeping support, and organizational workflow systems.',
    iconName: 'Building',
    scope: 'Financial institutions, headquarters, and consultancies'
  }
];

export const CLIENTS: ClientPartner[] = [
  { name: 'Konkola Copper Mines PLC', category: 'Mining & Heavy Industry', location: 'Chililabombwe & Chingola' },
  { name: 'Fortitude Ventures Ltd', category: 'Commercial Enterprise', location: 'Zambia' },
  { name: 'Ndola General Hospital', category: 'Healthcare & Public Health', location: 'Ndola, Copperbelt' },
  { name: 'Kitwe Central Hospital', category: 'Healthcare & Specialized Medicine', location: 'Kitwe, Copperbelt' },
  { name: 'Kalulushi Municipal Council', category: 'Local Government & Civic Administration', location: 'Kalulushi' },
  { name: 'Sashtex Engineering Ltd', category: 'Industrial Engineering', location: 'Kitwe' },
  { name: 'Chapungu Mining Ventures Ltd', category: 'Mining & Exploration', location: 'Copperbelt' },
  { name: 'OGAS Investments Ltd', category: 'Diversified Investments', location: 'Zambia' }
];

export const COMPLIANCE_ITEMS: ComplianceBody[] = [
  {
    id: 'pacra',
    acronym: 'PACRA',
    name: 'Patents and Companies Registration Agency',
    scope: 'Duly registered corporate entity operating in total accordance with the Companies Act of Zambia.',
    status: 'Incorporated & Good Standing'
  },
  {
    id: 'workers-comp',
    acronym: 'Workers Compensation',
    name: 'Workers’ Compensation Fund Control Board',
    scope: 'Full institutional compliance safeguarding workplace safety, occupational health, and employee protection.',
    status: 'Certified Compliance'
  },
  {
    id: 'napsa',
    acronym: 'NAPSA',
    name: 'National Pension Scheme Authority',
    scope: 'Regular statutory pension compliance upholding social security obligations for all team members.',
    status: 'Statutory Active'
  },
  {
    id: 'eiz',
    acronym: 'Engineering Institution of Zambia',
    name: 'Engineering Institution of Zambia (EIZ)',
    scope: 'Engineering practice registered with EIZ, validating technical competency, ethics, and qualified personnel.',
    status: 'Licensed Practice'
  },
  {
    id: 'zppa',
    acronym: 'ZPPA',
    name: 'Zambia Public Procurement Authority',
    scope: 'Registered and fully authorized vendor eligible for public sector, government, and municipal tenders.',
    status: 'Authorized Supplier'
  },
  {
    id: 'zra',
    acronym: 'ZRA',
    name: 'Zambia Revenue Authority',
    scope: 'Valid Tax Clearance Certificate, VAT compliance, and transparent national fiscal responsibility.',
    status: 'Tax Compliant'
  }
];
