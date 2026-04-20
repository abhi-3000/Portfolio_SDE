import React from "react";
import {
  FaReact,
  FaDatabase,
  FaJs,
  FaServer,
  FaUserFriends,
  FaClipboardCheck,
  FaRegLightbulb,
  FaRocket,
} from "react-icons/fa";
import {
  FaLightbulb,
  FaUsers,
  FaProjectDiagram,
  FaPlug,
  FaCogs,
  FaTools,
  FaMapMarkerAlt,
  FaCity,
  FaGlobe,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiZod,
  SiExpo,
  SiRetool,
} from "react-icons/si";
import ca from "./assets/ca_ss.png";
import bw from "./assets/bw_logo.jpg";
import cvnt from "./assets/cvnt.webp";

export const personalData = {
  name: "Abhishek Mandal",
  title: "Product-Focused Software Developer",
  intro:
    "I build systems with a strong focus on how they are used. With a foundation in full stack development and a growing product mindset, I work on solving real problems by improving workflows, simplifying experiences, and creating meaningful impact.",
  about:
    "I am a final year student at IIIT Ranchi who builds software with a strong product mindset. Over time, I have moved beyond just writing code to understanding how systems are actually used and where they can be improved. I focus on identifying real problems, simplifying workflows, and building solutions that are practical, scalable, and easy to use. I am comfortable working end to end, but what matters more to me is how everything comes together to create a meaningful experience. I pay attention to details, think in terms of impact, and try to make every improvement count, whether at the system level or in small interactions that shape how users engage with a product.",
  email: "abhishekmandalmnps@gmail.com",
  phone: "9508056814",
};

// export const skillsData = {
//   product: ["Product Roadmapping", "User Research", "Agile Methodologies", "A/B Testing", "Go To Market Strategy", "Data Analytics"],
//   technical: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "C++", "DSA", "Tailwind CSS"],
//   soft: ["Cross Functional Leadership", "Stakeholder Management", "Clear Communication", "Extreme Ownership"]
// };

export const skillsData = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "C++", "C"],
  },
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Expo (React Native)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn/ui",
      "Material UI",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Webpack",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Prisma ORM",
      "Zod",
    ],
  },
  {
    category: "Databases & Search",
    skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL", "Typesense"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS S3", "Vercel", "Render", "Cloudinary"],
  },
  {
    category: "AI & Integrations",
    skills: ["OpenAI API", "Gemini API"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "ThunderClient", "Retool"],
  },
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    company: "Betterway Ayurveda",
    logoUrl: bw,
    role: "SDE Intern",
    duration: "Jan 2025 - Present",
    location: "Gurugram, Haryana",
    description: [
      "Designed and built a Packages based billing system from scratch to fix fragmented billing across consultations, medicines, and Panchkarma procedures. Defined the data model, wrote REST APIs for the full package lifecycle, and built the frontend flows for it. Reduced reconciliation time by ~40% across 3000+ monthly patient records",
      "Worked on improving EMR filling speed by first tracking where practitioners were losing time, then helping design and integrate a recommendation feature for medicines and therapies based on existing prescription data. Cut average EMR entry time by around 80 seconds per session",
      "Built a session level payment ledger to fix inconsistent financial tracking. Updated backend controllers so every transaction gets recorded with proper metadata and timestamps, making the system audit ready and eliminating data loss across 3000+ monthly transactions",
      "Implemented RBAC middleware across critical EMR endpoints so medical staff, admins, and ops teams only access what they are supposed to. Kept the design scalable so adding new roles later does not require rewriting the permission logic",
      "Built a real time notification system for session and procedure updates, and a separate escalation tracker with structured state transitions like pending and resolved, which improved cross team coordination and reduced how long issues stayed unresolved",
      "Set up Retool dashboards with custom SQL and JS logic to replace manual reporting, cutting reporting effort by ~50%. Also tracked monthly infrastructure costs across AWS, WATI, Typesense, and Sarvam AI and structured it into an MIS report for leadership visibility",
    ],

    techStack: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },

      {
        name: "React.js",
        icon: <SiReact />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Expo (React Native)",
        icon: <SiExpo />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },

      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Zod Validation",
        icon: <SiZod />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },

      {
        name: "API Design",
        icon: <FaPlug />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "System Design",
        icon: <FaCogs />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "DB Schema Design",
        icon: <FaProjectDiagram />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },

      {
        name: "Retool",
        icon: <SiRetool />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
    ],
  },
  {
    id: 2,
    company: "CVNT",
    logoUrl: cvnt,
    role: "Full Stack Developer Intern",
    duration: "Oct - Dec 2025",
    location: "Remote",
    description: [
      "Built a hybrid authentication system supporting Google OAuth and phone based OTP login using Supabase. For phone logins, generated deterministic passwords on the fly using HMAC SHA256 hashing combining the phone number and a server secret, since Supabase requires a password even for passwordless flows",
      "Wrote custom PostgreSQL stored procedures for the entire OTP lifecycle covering rate limiting, old code cleanup, and new OTP insertion all in a single atomic transaction, which completely eliminated the risk of duplicate OTP sends under concurrent requests",
      "Solved a race condition where two simultaneous signup requests for the same phone number were creating duplicate user records. Fixed it by implementing a Check Create Retry pattern that catches duplicate key errors and retries the login thread automatically, which resolved a critical pre launch bug",
      "Implemented IP based request throttling by designing a dedicated table to track request frequency per IP, which protected the platform from botnet spam and kept SMS costs under control",
      "Integrated Razorpay for payment processing, handled the checkout flow on the frontend and set up backend webhook verification to confirm transactions before updating order state. Also embedded Google Tag Manager into the Next.js root layout so the marketing team could set up tracking and funnel analysis without needing a developer each time",
      "Built the auth frontend as a state machine with a single controller component managing transitions between phone input, OTP verification, and profile creation. Used GSAP animations at state transitions to guide user attention, and wrote Next.js middleware to protect routes by verifying session tokens before page load",
    ],
    techStack: [
      {
        name: "Next.js",
        icon: <FaReact />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "PostgreSQL",
        icon: <FaDatabase />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
      {
        name: "Node.js",
        icon: <FaServer />,
        color: "#f7e4e4ff",
        bg: "#330303ff",
      },
    ],
  },
];

export const caseStudyProjects = {
  "nk-consultancy": {
    title: "NK Consultancy",
    shortAbout:
      "Streamlining client and data management for a regional CA firm with a secure, full-stack solution.",
    heroImage: ca,
    liveLink: "https://nk-zeta-fawn.vercel.app/",

    vision:
      "I started this project because I noticed a major problem in how Chartered Accountants and financial experts operate in India. There is a real monopoly where experts often charge high fees based on a percentage of a client’s tax returns or total savings. This makes professional help feel like an expensive burden. My vision is to disrupt this by offering a transparent, digital first platform with uniform charges. I wanted to move away from high percentage fees and move toward a fair, flat fee model that respects the user’s hard earned money. This project is about moving professional services into a digital mode to provide maximum convenience in this digital era.",

    marketResearch: {
      text: "The Indian market for tax and compliance is undergoing a massive digital shift. While big players exist, they often lack a personal connection. My research shows a huge gap in Tier 2 and Tier 3 cities where trust is still tied to physical presence.",
      table: {
        headers: [
          "Market Category",
          "Estimated Value (India 2026)",
          "Description",
        ],
        rows: [
          [
            "Total Market (TAM)",
            "$150 Billion",
            "Overall India Fintech and professional services space",
          ],
          [
            "Serviceable Market (SAM)",
            "$600 Million",
            "Small and medium enterprises needing digital compliance",
          ],
          [
            "Obtainable Market (SOM)",
            "Regional SME Base",
            "Individual taxpayers and businesses in my home city",
          ],
        ],
      },
      competition:
        "Current players like ClearTax and Vakilsearch are efficient but can feel like faceless machines. My strategy is a hybrid model. By combining a premium digital interface with a physical office touchpoint, we build the digital trust that purely online platforms struggle to achieve.",
    },

    userPersonas: [
      {
        title: "The Small Business Owner (The Hustler)",
        desc: "They run local shops or startups and find tax laws confusing. They want a service that is fast, affordable, and doesn't require five office visits.",
      },
      {
        title: "The Traditional Professional (The Trusted Client)",
        desc: "These are long term clients who value trust. They are moving toward digital tools to save time but need a simple UI that doesn't overwhelm them.",
      },
    ],

    devJourney:
      "My journey in building this website was focused on one thing is Efficiency. The more the website does, the less we have to charge the client. I used the full-stack to create a platform that is fast and secure. I architected the backend as a RESTful API using Node.js and Express to serve as the single source of truth. I chose MongoDB for the database because its flexible structure is perfect for the varied nature of consultancy services. The goal was to build a centralized ecosystem that handles everything from initial discovery to final document delivery.",

    techSolution:
      "The core of our product is the Dynamic Form Engine. Instead of hard coding a page for every service, I designed a system where the backend sends a JSON blueprint. The frontend then automatically builds the correct forms and file uploaders on the fly. This makes our platform incredibly flexible because we can launch a new service like Startup Registration in minutes without any downtime or new code deployments. This efficiency is exactly how we keep our costs 50 percent lower than competitors.",

    uiUx: [
      {
        title: "Frictionless UX",
        desc: "I made sure every action, from uploading a document to making a payment, takes as few clicks as possible.",
      },
      {
        title: "Mobile First Logic",
        desc: "The site is perfectly responsive because most users check their status on their phones while on the go.",
      },
      {
        title: "Dual Dashboards",
        desc: "I created separate environments. The client sees a simple view for convenience, while the admin has a high density Mission Control for productivity.",
      },
    ],

    userJourney: [
      {
        id: 1,
        title: "Discovery",
        description:
          "The user finds us through a local bank referral or a banner at a Pragya Kendra.",
        icon: <FaRegLightbulb />,
      },
      {
        id: 2,
        title: "Onboarding",
        description:
          "They see our transparent flat fee pricing which immediately builds trust.",
        icon: <FaUserFriends />,
      },
      {
        id: 3,
        title: "Service Selection",
        description:
          "The Dynamic Form Engine asks only for necessary documents.",
        icon: <FaClipboardCheck />,
      },
      {
        id: 4,
        title: "Real Time Tracking",
        description:
          "Instead of calling the office, the user checks their dashboard to see the real time status.",
        icon: <FaRocket />,
      },
      {
        id: 5,
        title: "Closure",
        description:
          "They pay the fee and download their verified receipts and filed documents instantly.",
        icon: <FaClipboardCheck />,
      },
    ],

    offlineMarketing: {
      text: "While the platform is digital, the trust is built in the physical world. Last season, I led a massive offline campaign to prove our model.",
      points: [
        {
          title: "Direct Marketing",
          desc: "I managed the distribution of banners and pamphlets in key city areas.",
        },
        {
          title: "Strategic Partnerships",
          desc: "I collaborated with local offices and government Pragya Kendras to reach people who need document help.",
        },
        {
          title: "Banking Tie ups",
          desc: "I partnered with local bank managers and their assistants. They are often asked for CA recommendations. By offering better transparency and lower costs, they provided a steady stream of clients.",
        },
      ],
      conclusion:
        "Through these efforts, I singlehandedly managed to cater to 158 new clients in just one season.",
    },

    pricingModel:
      "I have actually implemented a model that cuts down costs to 40 to 50 percent of the current market trends. Traditionally, experts charge percentages which can be very high. By automating the administrative work through our website, we remove the need for a large staff to manage paperwork. We offer a flat, uniform fee depending on the service. This transparency has been very successful in the local area because it removes the fear of hidden costs or high commissions.",

    competitiveMatrix: {
      headers: ["Feature", "Local CAs", "Big Tech Portals", "NK Consultancy"],
      rows: [
        ["Pricing", "High Percentage", "Medium Fees", "Flat 50% Discount"],
        ["Trust Factor", "High Physical", "Low Faceless", "High Hybrid Model"],
        ["Speed", "Slow Manual", "Fast Automated", "Fast Automated"],
        ["Transparency", "Low", "Medium", "High Dashboard"],
      ],
    },

    impact: [
      { title: "Client Onboarding", value: "52" },
      { title: "Revenue Success", value: "30%" },
      { title: "Admin Reduction", value: "70%" },
    ],

    riskAssessment: [
      {
        title: "Data Privacy",
        desc: "We use encrypted cloud storage and secure JWT authentication with Clerk to protect sensitive financial data.",
      },
      {
        title: "Regulatory Changes",
        desc: "Our Dynamic Engine handles tax law changes easily because we can update form fields in minutes without changing code.",
      },
      {
        title: "Market Trust",
        desc: "We solve the fear of digital payments by keeping our physical office as a Trust Point where clients can meet us in person.",
      },
    ],

    successMetrics: [
      {
        title: "Customer Acquisition Cost (CAC)",
        desc: "Kept very low by using bank tie ups and government centers.",
      },
      {
        title: "Conversion Rate",
        desc: "Measuring how many visitors start a service through our transparent pricing.",
      },
      {
        title: "Turnaround Time (TAT)",
        desc: "Our goal is to keep the time from document upload to final filing under 48 hours.",
      },
      {
        title: "User Retention",
        desc: "Tracking how many clients return for the next tax season based on their digital experience.",
      },
    ],

    futureScope: [
      {
        id: 1,
        title: "Phase 1 (The Local Hub)",
        description:
          "I am setting up a physical office in my home town with my father and an assistant. This establishes the physical touchpoint and trust.",
        icon: <FaMapMarkerAlt />,
      },
      {
        id: 2,
        title: "Phase 2 (City Capture)",
        description:
          "I will maximize the market share in the city by providing a level of digital convenience no other local CA can match.",
        icon: <FaCity />,
      },
      {
        id: 3,
        title: "Phase 3 (Expansion)",
        description:
          "Once we have a proven revenue stream, I will expand the model to other cities. I plan to gain more industry knowledge first to ensure that when we scale, we maintain our 50 percent cost advantage and high service quality.",
        icon: <FaGlobe />,
      },
    ],
  },
};

export const projectsData = [
  {
    id: 1,
    title: "NK Consultancy",
    description:
      "A comprehensive CA consultancy platform streamlining client management and service delivery.",
    problem:
      "Manual tracking of GST and ITR filings was creating bottlenecks for the consultancy firm.",
    solution:
      "Developed role based dashboards for clients and admins to automate document collection and tracking.",
    impact:
      "Reduced administrative overhead and improved client transparency through real time tracking.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Cloudinary",
      "Multer",
      "Framer Motion",
    ],
    liveLink: "https://nk-zeta-fawn.vercel.app/",
    detailsLink: "/project/nk-consultancy",
    accent: "#8b1c06ff",
    isCaseStudy: false,
  },
  {
    id: 2,
    title: "Tapin",
    description:
      "A dedicated micro ticketing platform tailored for intimate local events.",
    problem:
      "Existing platforms were too complex and expensive for hosting small scale localized events.",
    solution:
      "Created a lightweight mobile first ticketing flow with easy event creation.",
    impact:
      "Empowered local creators to host and monetize events with minimal friction.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "CSS3",
      "Razorpay",
      "Gemini API",
      "JWT",
      "Cloudinary",
      "Multer",
    ],
    liveLink: "https://tap-in-kappa.vercel.app/",
    detailsLink: "/project/tapin",
    accent: "#8b1c06ff",
  },
  {
    id: 3,
    title: "Apex Hire",
    description:
      "AI-powered recruitment platform that automates candidate screening and technical evaluations using serverless architecture.",
    problem: "Manual hiring is slow, inconsistent, and hard to scale.",
    solution:
      "AI platform for automated resume parsing and objective candidate evaluations.",
    impact:
      "Accelerated screening speed by 70% with standardized, data-driven results.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vercel Serverless Functions",
      "Gemini API",
      "shadcn/ui",
      "Framer Motion",
      "Tailwind CSS",
    ],
    liveLink:
      "https://apex-hire-8pej0evvr-abhishek-mandals-projects-e004a46c.vercel.app/",
    detailsLink: "/project/apex-hire",
    accent: "#8b1c06ff",
  },
  {
    id: 4,
    title: "Attendo",
    description:
      "Custom attendance management system designed for college administrators and students.",
    problem:
      "Professors spent excessive time manually updating and calculating student attendance records.",
    solution:
      "Built a bulk student upload feature and an intuitive tracking interface.",
    impact:
      "Saved hours of administrative work weekly and provided students with instant visibility into their metrics.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "CSS3"],
    liveLink: "https://attendo-chi.vercel.app/",
    detailsLink: "/project/attendo",
    accent: "#8b1c06ff",
  },
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Indian Institute of Information Technology (IIIT), Ranchi",
    duration: "Expected May-2026",
  },
  {
    id: 2,
    institution: "DAV Public School, Jamshedpur",
    degree: "Class XII (CBSE)",
    duration: "Completed: 2021",
  },
  {
    id: 3,
    institution: "Motilal Nehru Public School, Jamshedpur",
    degree: "Class X (ICSE)",
    duration: "Completed: 2019",
  },
];
