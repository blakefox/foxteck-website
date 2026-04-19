export interface TimelineStop {
  id: string;
  company: string;
  role: string;
  startYear: number;
  endYear: number | 'present';
  location: string;
  description: string;
  projectSlugs: string[];
  highlight?: string;
}

export const timeline: TimelineStop[] = [
  {
    id: 'navy',
    company: 'United States Navy',
    role: 'FA-18 Avionics Technician, 3rd Class',
    startYear: 2001,
    endYear: 2006,
    location: 'NAS Lemoore, CA',
    description:
      'Maintained and repaired sensitive Comm/Nav avionics systems on FA-18 Hornets. Led Quality Assurance efforts for the entire avionics division. Built a foundation in precision engineering, systems thinking, and performing under pressure.',
    projectSlugs: [],
  },
  {
    id: 'madcatz',
    company: 'Madcatz Interactive / Saitek',
    role: 'Lead Software Engineer',
    startYear: 2011,
    endYear: 2013,
    location: 'San Diego, CA',
    description:
      'Led engineering on a combat MMO built on Microsoft Flight Simulator X, and developed the firmware SDK for Saitek FIP cockpit hardware gauges. First lead engineering role — hired, managed, and directed all software engineering efforts.',
    projectSlugs: ['madcatz-combat-pilot', 'madcatz-saitek'],
  },
  {
    id: 'sony-online',
    company: 'Sony Online Entertainment',
    role: 'Contract Engineer',
    startYear: 2012,
    endYear: 2012,
    location: 'Remote',
    description:
      'Short-term contract during the Chains of Eternity expansion launch for EverQuest II. Designed and implemented the adornment system XML export pipeline, enabling third-party fan sites to dynamically query in-game item data. Also contributed targeted bug fixes during the expansion\'s November 2012 release window.',
    projectSlugs: ['sony-everquest2'],
  },
  {
    id: 'gamecloud',
    company: 'Gamecloud',
    role: 'Senior Unity3D Engineer',
    startYear: 2013,
    endYear: 2014,
    location: 'Remote',
    description:
      'Senior engineer on Project Gridiron, a cross-platform sports title that shipped in 2014. Owned core gameplay systems, AI-driven play selection, and responsive UI layouts across a wide device footprint. Conducted usability testing throughout development.',
    projectSlugs: ['gamecloud-gridiron'],
    highlight: 'Shipped 2014 · AI play selection · Cross-platform',
  },
  {
    id: 'ibm',
    company: 'IBM Watson / Watson Health',
    role: 'Engineer / Project Manager — Watson Immersive Technologies',
    startYear: 2014,
    endYear: 2016,
    location: 'Austin, TX',
    description:
      'Built Watson-powered interactive experiences in Unity, Unreal, and WebGL/Three.js. Architected the X-Ray AI visualization system and contributed to IBM\'s immersion rooms. Also wired Watson AI into Aldebaran NAO humanoid robots using OpenCV and TensorFlow.',
    projectSlugs: ['ibm-xray', 'ibm-oblong'],
    highlight: 'WebMD partnership · Watson AI integration',
  },
  {
    id: 'faceware',
    company: 'Faceware Technologies',
    role: 'Lead of Engineering',
    startYear: 2016,
    endYear: 2020,
    location: 'Round Rock, TX',
    description:
      'Rebuilt the entire plugin suite from scratch, replacing a legacy DirectShow pipeline with FFmpeg/OpenCV. Engineered a live facial capture SDK that powered Star Citizen — one of the most ambitious MMOs ever built. Delivered interactive kiosk experiences for the NFL, L\'Oréal, and movie theater networks.',
    projectSlugs: ['faceware-studio', 'faceware-starcitizen'],
    highlight: 'Star Citizen integration · NFL & L\'Oréal kiosks',
  },
  {
    id: 'livestalk',
    company: 'Livestalk / Foxteck',
    role: 'Co-Founder / CTO',
    startYear: 2018,
    endYear: 2024,
    location: 'Georgetown, TX',
    description:
      'Co-founded an AgTech startup using computer vision and drone integration to automate livestock inventory. Raised angel and incubator capital, achieved SOC2 compliance, and operated concurrently alongside full-time VP-level roles at HIA and IKIN.',
    projectSlugs: ['foxteck-livestalk'],
    highlight: 'Angel capital raised · SOC2 compliant · Concurrent founder',
  },
  {
    id: 'hia',
    company: 'HIA Technologies',
    role: 'VP of Engineering / Product Director',
    startYear: 2020,
    endYear: 2022,
    location: 'Pasadena, CA (Remote)',
    description:
      'Made the bold call to abandon Unity and rebuild the entire AI metahuman platform on the web with Three.js and Angular. Adoption grew 6x in six months. Achieved HIPAA and SOC2 compliance, and landed a partnership with WebMD.',
    projectSlugs: ['hia-medical'],
    highlight: '6x adoption growth · WebMD partnership · HIPAA/SOC2',
  },
  {
    id: 'ikin',
    company: 'IKIN Technologies',
    role: 'VP of Engineering',
    startYear: 2022,
    endYear: 2026,
    location: 'Austin, TX',
    description:
      'Leading 15+ internal employees and 4 contract teams across hardware, software, AI, and content. Took the RYZ holographic device from alpha to manufacturing (20% BOM reduction), launched ASIMOV generative AI platform in sports entertainment, and led company-wide adoption of Claude Code and GitHub Copilot.',
    projectSlugs: ['ikin-ryz-arc', 'ikin-asimov', 'ikin-scanningtech', 'ikin-poc'],
    highlight: 'InfoComm 2025 speaker · 15+ person team · Generative AI platform',
  },
  {
    id: 'foxteck-consulting',
    company: 'Foxteck',
    role: 'Founder / Principal AI Consultant',
    startYear: 2025,
    endYear: 'present',
    location: 'Georgetown, TX',
    description:
      'Independent consulting practice delivering AI-powered products and guiding engineering teams through structured AI adoption. Architected The Grading Assistant — a full-stack Claude-powered agentic application — and engaged as Fractional CTO at True Value Hub, achieving 2x developer velocity in 90 days.',
    projectSlugs: ['foxteck-grading-assistant', 'foxteck-true-value-hub'],
    highlight: '2x velocity in 90 days · Claude-powered products',
  },
  {
    id: 'grading-assistant',
    company: 'The Grading Assistant / Foxteck',
    role: 'Founder / Lead Engineer',
    startYear: 2026,
    endYear: 'present',
    location: 'Georgetown, TX',
    description:
      'Built The Grading Assistant — a full-stack agentic AI application powered by Claude, designed to automate grading workflows for educators. Leverages OCR, agentic reasoning, and deep Google Classroom integration to dramatically reduce the time teachers spend on assessment.',
    projectSlugs: ['foxteck-grading-assistant'],
    highlight: 'Claude-powered agentic grading · Google Classroom integration',
  },
];
