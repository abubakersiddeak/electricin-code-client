// src/app/services/electrician/data/electrician-data.ts

import {
  Home,
  Info,
  Wrench,
  Send,
  Building2,
  AlertTriangle,
  Lightbulb,
  Battery,
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  CheckCircle,
  Zap,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";

// ========================================
// NAVIGATION LINKS
// ========================================
export const navLinks = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#projects", label: "Projects", icon: Building2 },

  { href: "#contact", label: "Contact", icon: Send },
];

// ========================================
// SERVICES
// ========================================
export const services = [
  {
    icon: Home,
    title: "Residential Wiring",
    description:
      "Complete home electrical wiring and rewiring services for safety and efficiency",
    features: [
      "New home wiring installation",
      "Electrical panel upgrades",
      "Outlet & switch installation",
      "Circuit breaker replacement",
      "Home automation setup",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Installation",
    description:
      "Professional electrical installations for offices, retail spaces, and industrial facilities",
    features: [
      "Office electrical systems",
      "Retail store wiring",
      "Industrial equipment setup",
      "Emergency lighting systems",
      "Security system integration",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description:
      "24/7 emergency electrical repair services to restore power quickly and safely",
    features: [
      "Power outage troubleshooting",
      "Emergency panel repairs",
      "Electrical fault diagnosis",
      "Same-day service available",
      "Weekend & holiday coverage",
    ],
  },
  {
    icon: Lightbulb,
    title: "Solar Panel Setup",
    description:
      "Solar panel installation and maintenance for sustainable energy solutions",
    features: [
      "Residential solar systems",
      "Commercial solar arrays",
      "Battery backup integration",
      "Energy monitoring systems",
      "Grid-tie installations",
    ],
  },
  {
    icon: Battery,
    title: "Generator Backup System",
    description:
      "Backup generator installation and maintenance for uninterrupted power supply",
    features: [
      "Whole-house generators",
      "Commercial backup systems",
      "Automatic transfer switches",
      "Regular maintenance plans",
      "Fuel system installation",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Upgrades",
    description:
      "Modern electrical system upgrades to meet current safety codes and energy efficiency standards",
    features: [
      "Panel capacity upgrades",
      "LED lighting conversion",
      "Smart home integration",
      "Energy-efficient solutions",
      "Code compliance updates",
    ],
  },
];

// ========================================
// ALL PROJECTS (24 Total: 16 Completed + 8 Ongoing)
// ========================================
export const allProjects = [
  // ========== COMPLETED PROJECTS (16) ==========
  {
    id: "modern-office-complex",
    title: "Modern Office Complex Rewiring",
    location: "Downtown Business District",
    description:
      "Complete electrical overhaul of 5-story office building with smart lighting systems and energy-efficient solutions",
    client: "Metro Business Center",
    completionDate: "March 2024",
    projectValue: "$85,000",
    image:
      "https://media.istockphoto.com/id/1403856505/photo/electrical-engineer-team-working-front-control-panel-an-electrical-engineer-is-installing-and.jpg?s=612x612&w=0&k=20&c=vFyNP-fkI-LMLT6mMzcHVszimbyS8Gtu4VO5BvN-rv4=",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "3 months",
    teamSize: 8,
    features: [
      "Smart lighting control systems",
      "Energy-efficient LED installation",
      "Backup power integration",
      "Network infrastructure wiring",
      "Emergency lighting systems",
    ],
  },
  {
    id: "residential-solar-installation",
    title: "Residential Solar Installation",
    location: "Suburban Neighborhood",
    description: "20kW solar panel system with battery backup for family home",
    client: "Johnson Family",
    completionDate: "February 2024",
    projectValue: "$45,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661645250316-bba92bb37db0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGVsZWN0cmljaWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Residential",
    duration: "2 weeks",
    teamSize: 4,
    features: [
      "20kW solar panel array",
      "Tesla Powerwall battery backup",
      "Smart energy monitoring",
      "Grid-tie inverter system",
      "Electrical panel upgrade",
    ],
  },
  {
    id: "restaurant-kitchen-upgrade",
    title: "Restaurant Kitchen Upgrade",
    location: "City Center",
    description:
      "High-capacity electrical installation for commercial kitchen equipment",
    client: "Bella Vista Restaurant",
    completionDate: "January 2024",
    projectValue: "$32,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661929137248-2544fd28de13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNpYW4lMjB3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "1 month",
    teamSize: 5,
    features: [
      "High-capacity wiring for kitchen equipment",
      "Dedicated circuits for refrigeration",
      "Ventilation system electrical",
      "Emergency shutoff systems",
      "Compliance with health codes",
    ],
  },
  {
    id: "emergency-generator-setup",
    title: "Emergency Generator Setup",
    location: "Medical Facility",
    description:
      "Critical backup power system installation for healthcare facility",
    client: "City Medical Center",
    completionDate: "December 2023",
    projectValue: "$120,000",
    image:
      "https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mu6ZjS3O9ORqb366AevDoz-HWQMU5eWAmILBVrKAlbk=",
    status: "completed",
    progress: 100,
    category: "Industrial",
    duration: "4 months",
    teamSize: 12,
    features: [
      "500kW diesel generator",
      "Automatic transfer switch",
      "Fuel management system",
      "Load testing and commissioning",
      "Redundant power distribution",
    ],
  },
  {
    id: "luxury-home-automation",
    title: "Luxury Home Automation System",
    location: "Hillside Estates",
    description:
      "Complete smart home electrical infrastructure with automated lighting, security, and climate control",
    client: "Anderson Estate",
    completionDate: "November 2023",
    projectValue: "$68,000",
    image:
      "https://images.unsplash.com/photo-1759542877886-39d81e8f2eee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGVsZWN0cmljaWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Residential",
    duration: "6 weeks",
    teamSize: 6,
    features: [
      "Whole-home automation system",
      "Smart lighting with scenes",
      "Integrated security cameras",
      "Climate control automation",
      "Voice assistant integration",
    ],
  },
  {
    id: "data-center-electrical",
    title: "Data Center Electrical Infrastructure",
    location: "Tech Park North",
    description:
      "High-reliability power distribution for mission-critical data center facility",
    client: "CloudTech Solutions",
    completionDate: "October 2023",
    projectValue: "$280,000",
    image:
      "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.webp?a=1&b=1&s=612x612&w=0&k=20&c=6LGhlD_dNoWKJ98eIPK-ta8HEXJ5JaJLMK9pAlGJ1xI=",
    status: "completed",
    progress: 100,
    category: "Industrial",
    duration: "5 months",
    teamSize: 15,
    features: [
      "Redundant power feeds",
      "UPS integration",
      "Precision cooling electrical",
      "Cable management systems",
      "Environmental monitoring",
    ],
  },
  {
    id: "retail-store-chain",
    title: "Retail Store Chain Lighting",
    location: "Multiple Locations",
    description:
      "LED retrofit and lighting upgrade across 12 retail store locations",
    client: "FashionHub Retail",
    completionDate: "September 2023",
    projectValue: "$95,000",
    image:
      "https://media.istockphoto.com/id/2084526747/photo/construction-workers-installing-ceiling-and-windows-in-renovation.jpg?s=612x612&w=0&k=20&c=zmVNIEo3LD1KrsTJRG9SMogulL7O-_m05emj_EWPhlI=",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "2 months",
    teamSize: 10,
    features: [
      "LED lighting conversion",
      "Track lighting systems",
      "Dimming controls",
      "Energy savings of 60%",
      "Improved product visibility",
    ],
  },
  {
    id: "school-electrical-upgrade",
    title: "Elementary School Electrical Upgrade",
    location: "Riverside District",
    description:
      "Complete electrical system modernization for 50-year-old school building",
    client: "Riverside School District",
    completionDate: "August 2023",
    projectValue: "$145,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661342490985-26da70d07a52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGVsZWN0cmljaWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "4 months",
    teamSize: 9,
    features: [
      "Panel upgrades throughout",
      "Classroom electrical modernization",
      "Emergency lighting",
      "Playground lighting",
      "ADA-compliant installations",
    ],
  },
  {
    id: "warehouse-led-conversion",
    title: "Warehouse LED Conversion",
    location: "Industrial Zone",
    description:
      "High-bay LED lighting installation in 100,000 sq ft warehouse facility",
    client: "LogisticsPro Warehouse",
    completionDate: "July 2023",
    projectValue: "$72,000",
    image:
      "https://plus.unsplash.com/premium_photo-1678766819199-5660bab7085b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGVsZWN0cmljYWwlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Industrial",
    duration: "6 weeks",
    teamSize: 7,
    features: [
      "High-bay LED fixtures",
      "Motion sensor controls",
      "Emergency backup lighting",
      "70% energy reduction",
      "Improved visibility",
    ],
  },
  {
    id: "historic-building-restoration",
    title: "Historic Building Electrical Restoration",
    location: "Old Town District",
    description:
      "Sensitive electrical upgrade preserving historic architecture while meeting modern codes",
    client: "Heritage Foundation",
    completionDate: "June 2023",
    projectValue: "$98,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVsZWN0cmljYWwlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "3 months",
    teamSize: 6,
    features: [
      "Code-compliant upgrades",
      "Hidden conduit installation",
      "Period-appropriate fixtures",
      "Fire safety systems",
      "Museum-quality lighting",
    ],
  },
  {
    id: "hotel-renovation",
    title: "Boutique Hotel Electrical Renovation",
    location: "Harbor District",
    description:
      "45-room boutique hotel complete electrical renovation and upgrade",
    client: "Seaside Inn & Suites",
    completionDate: "May 2023",
    projectValue: "$165,000",
    image:
      "https://media.istockphoto.com/id/1377331559/photo/cropped-portrait-of-an-attractive-female-construction-worker-standing-on-a-building-site-with.jpg?s=612x612&w=0&k=20&c=N0szv8wwuFrOIbBjZlbrBFi-ixllW-AawoIvoEYMlCY=",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "5 months",
    teamSize: 11,
    features: [
      "Guest room electrical",
      "Lobby lighting design",
      "Kitchen equipment circuits",
      "Emergency egress lighting",
      "Smart room controls",
    ],
  },
  {
    id: "gym-facility-electrical",
    title: "Fitness Center Electrical System",
    location: "Wellness Plaza",
    description:
      "New construction electrical for 15,000 sq ft fitness facility",
    client: "FitLife Gym",
    completionDate: "April 2023",
    projectValue: "$58,000",
    image:
      "https://plus.unsplash.com/premium_photo-1682148180383-c2dc15f651ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGVsZWN0cmljYWwlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "2 months",
    teamSize: 5,
    features: [
      "Equipment-grade circuits",
      "Locker room electrical",
      "Pool area waterproof systems",
      "Sound system wiring",
      "Emergency backup power",
    ],
  },
  {
    id: "church-lighting-upgrade",
    title: "Church Sanctuary Lighting",
    location: "Community Church District",
    description:
      "Architectural lighting design and installation for historic church sanctuary",
    client: "First Community Church",
    completionDate: "March 2023",
    projectValue: "$42,000",
    image:
      "https://images.unsplash.com/photo-1607631697491-61972eecf928?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cmljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "6 weeks",
    teamSize: 4,
    features: [
      "Architectural accent lighting",
      "Stage lighting systems",
      "Dimming controls",
      "Audio/visual integration",
      "Energy-efficient LED",
    ],
  },
  {
    id: "parking-garage-electrical",
    title: "Multi-Level Parking Garage",
    location: "City Center Parking",
    description: "5-level parking structure complete electrical installation",
    client: "Metro Parking Authority",
    completionDate: "February 2023",
    projectValue: "$135,000",
    image:
      "https://images.unsplash.com/photo-1758101755915-462eddc23f57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGVsZWN0cmljYWwlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "4 months",
    teamSize: 8,
    features: [
      "LED parking lot lighting",
      "Security camera power",
      "Payment kiosk circuits",
      "Emergency lighting",
      "EV charging stations",
    ],
  },
  {
    id: "condo-rewire",
    title: "Luxury Condo Tower Rewiring",
    location: "Lakefront Towers",
    description:
      "Complete electrical rewiring of 20-story luxury condominium building",
    client: "Lakefront HOA",
    completionDate: "January 2023",
    projectValue: "$420,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661490556617-9d0885288435?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Residential",
    duration: "8 months",
    teamSize: 18,
    features: [
      "120 luxury units rewired",
      "Individual smart meters",
      "Common area upgrades",
      "Elevator electrical",
      "Rooftop amenities power",
    ],
  },
  {
    id: "brewery-electrical",
    title: "Craft Brewery Electrical Setup",
    location: "Brewery District",
    description:
      "Commercial brewery electrical installation for production and taproom",
    client: "Harbor City Brewing",
    completionDate: "December 2022",
    projectValue: "$88,000",
    image:
      "https://plus.unsplash.com/premium_photo-1678766818924-1c15a95c77be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "completed",
    progress: 100,
    category: "Commercial",
    duration: "3 months",
    teamSize: 7,
    features: [
      "Brewing equipment circuits",
      "Cold storage electrical",
      "Taproom lighting",
      "Kitchen equipment power",
      "Outdoor patio systems",
    ],
  },

  // ========== ONGOING PROJECTS (8) ==========
  {
    id: "shopping-mall-renovation",
    title: "Shopping Mall Renovation",
    location: "Westside Plaza",
    description: "Complete electrical system upgrade for modern retail complex",
    client: "Westside Development Corp",
    estimatedCompletion: "May 2024",
    projectValue: "$250,000",
    image:
      "https://plus.unsplash.com/premium_photo-1663075972681-6fd70a4abe7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 75,
    category: "Commercial",
    duration: "6 months",
    teamSize: 15,
    features: [
      "LED lighting throughout mall",
      "Tenant space electrical prep",
      "Emergency evacuation lighting",
      "Smart HVAC controls",
      "EV charging stations",
    ],
  },
  {
    id: "apartment-complex-wiring",
    title: "Apartment Complex Wiring",
    location: "Riverside Heights",
    description: "50-unit residential building electrical installation",
    client: "Riverside Properties LLC",
    estimatedCompletion: "June 2024",
    projectValue: "$180,000",
    image:
      "https://plus.unsplash.com/premium_photo-1682086495049-43a423baec15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 45,
    category: "Residential",
    duration: "8 months",
    teamSize: 10,
    features: [
      "50-unit complete wiring",
      "Individual metering systems",
      "Common area lighting",
      "Parking garage electrical",
      "Elevator power systems",
    ],
  },
  {
    id: "factory-electrical-upgrade",
    title: "Factory Electrical Upgrade",
    location: "Industrial Park",
    description: "High-voltage industrial electrical system modernization",
    client: "TechManufacturing Inc",
    estimatedCompletion: "April 2024",
    projectValue: "$320,000",
    image:
      "https://plus.unsplash.com/premium_photo-1682145596006-545b19193af2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 90,
    category: "Industrial",
    duration: "5 months",
    teamSize: 18,
    features: [
      "High-voltage distribution upgrade",
      "Industrial machinery circuits",
      "Safety interlocks and sensors",
      "Backup power systems",
      "Energy monitoring dashboard",
    ],
  },
  {
    id: "sports-complex-electrical",
    title: "Community Sports Complex",
    location: "Athletic Park",
    description:
      "Multi-field sports complex with stadium lighting and facilities",
    client: "City Parks Department",
    estimatedCompletion: "July 2024",
    projectValue: "$195,000",
    image:
      "https://images.unsplash.com/photo-1584980770387-586712373e40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 35,
    category: "Commercial",
    duration: "7 months",
    teamSize: 12,
    features: [
      "Stadium lighting systems",
      "Scoreboard electrical",
      "Concession stand power",
      "Locker room facilities",
      "Irrigation controls",
    ],
  },
  {
    id: "senior-living-facility",
    title: "Senior Living Facility",
    location: "Greenwood Gardens",
    description: "80-unit assisted living facility electrical installation",
    client: "Greenwood Senior Care",
    estimatedCompletion: "August 2024",
    projectValue: "$215,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661715592317-e0268ac4e158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 55,
    category: "Commercial",
    duration: "9 months",
    teamSize: 13,
    features: [
      "ADA-compliant installations",
      "Nurse call systems",
      "Emergency backup power",
      "Common area lighting",
      "Medical equipment circuits",
    ],
  },
  {
    id: "solar-farm-commercial",
    title: "Commercial Solar Farm",
    location: "Sunny Ridge",
    description: "5MW solar farm installation and grid connection",
    client: "GreenEnergy Partners",
    estimatedCompletion: "September 2024",
    projectValue: "$450,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661328091314-630b81840f42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 60,
    category: "Industrial",
    duration: "10 months",
    teamSize: 20,
    features: [
      "5MW solar array",
      "Grid-tie electrical",
      "Inverter installations",
      "Monitoring systems",
      "Substation connection",
    ],
  },
  {
    id: "university-campus-upgrade",
    title: "University Campus Electrical",
    location: "State University",
    description:
      "Campus-wide electrical infrastructure upgrade across 8 buildings",
    client: "State University System",
    estimatedCompletion: "October 2024",
    projectValue: "$580,000",
    image:
      "https://plus.unsplash.com/premium_photo-1661645634440-2e747c979980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 25,
    category: "Commercial",
    duration: "12 months",
    teamSize: 25,
    features: [
      "Smart campus electrical",
      "Lab equipment circuits",
      "Dormitory upgrades",
      "Outdoor lighting",
      "Renewable energy integration",
    ],
  },
  {
    id: "car-dealership-new",
    title: "Auto Dealership New Construction",
    location: "Auto Mile",
    description: "New car dealership complete electrical installation",
    client: "Premier Auto Group",
    estimatedCompletion: "June 2024",
    projectValue: "$125,000",
    image:
      "https://plus.unsplash.com/premium_photo-1663091847749-7f8f4f6cd255?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    status: "ongoing",
    progress: 70,
    category: "Commercial",
    duration: "4 months",
    teamSize: 9,
    features: [
      "Showroom lighting design",
      "Service bay electrical",
      "EV charging stations",
      "Office area circuits",
      "Outdoor signage power",
    ],
  },
];

// ========================================
// TESTIMONIALS
// ========================================
export const testimonials = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "SparkFix transformed our outdated electrical system. Professional, punctual, and reasonably priced. Highly recommend!",
    role: "Homeowner",
    location: "Oakville",
    date: "March 2024",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "David Chen",
    rating: 5,
    text: "Emergency service was outstanding. They restored power to our office within 2 hours. True professionals.",
    role: "Business Owner",
    location: "Downtown",
    date: "February 2024",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    name: "Maria Rodriguez",
    rating: 5,
    text: "Solar installation exceeded expectations. The team was knowledgeable and the work quality is exceptional.",
    role: "Residential Client",
    location: "Riverside",
    date: "January 2024",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

// ========================================
// PHOTO CAROUSEL
// ========================================
export const photoCarousel = [
  {
    title: "Commercial Office Rewiring",
    description:
      "Our certified electricians ensuring a flawless installation in a modern office.",
    image:
      "https://plus.unsplash.com/premium_photo-1663091847749-7f8f4f6cd255?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Residential Solar Setup",
    description: "Installing efficient solar panels for a sustainable home.",
    image:
      "https://plus.unsplash.com/premium_photo-1661645634440-2e747c979980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Restaurant Kitchen Power",
    description: "High-capacity wiring for a busy commercial kitchen.",
    image:
      "https://plus.unsplash.com/premium_photo-1661328091314-630b81840f42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Hospital Generator Installation",
    description:
      "Ensuring reliable backup power for critical medical facilities.",
    image:
      "https://plus.unsplash.com/premium_photo-1661715592317-e0268ac4e158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Smart Home Automation",
    description: "Integrating smart lighting and security for a modern home.",
    image:
      "https://images.unsplash.com/photo-1584980770387-586712373e40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Data Center Infrastructure",
    description: "Building a high-reliability power system for a data center.",
    image:
      "https://plus.unsplash.com/premium_photo-1682145596006-545b19193af2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Retail Lighting Retrofit",
    description: "Upgrading lighting systems for a better shopping experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1682086495049-43a423baec15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Industrial Machinery Power",
    description: "High-voltage connections for heavy industrial equipment.",
    image:
      "https://plus.unsplash.com/premium_photo-1682145596006-545b19193af2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },

  {
    title: "New Auto Dealership",
    description:
      "Complete electrical setup for a new car dealership, including EV chargers.",
    image:
      "https://plus.unsplash.com/premium_photo-1663091847749-7f8f4f6cd255?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
];

// ========================================
// FAQs
// ========================================
export const faqs = [
  {
    question: "Do you provide 24/7 emergency electrical services?",
    answer:
      "Yes, we offer round-the-clock emergency electrical services. Our certified electricians are available 24/7 to handle urgent electrical issues that could pose safety risks.",
  },
  {
    question: "Are your electricians licensed and insured?",
    answer:
      "Absolutely. All our electricians are fully licensed, bonded, and insured. We maintain comprehensive liability insurance and workers' compensation coverage for your peace of mind.",
  },
  {
    question: "How do you determine pricing for electrical work?",
    answer:
      "We provide transparent, upfront pricing based on the scope of work. We offer free estimates for most projects and will discuss all costs before beginning any work.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We serve the entire metropolitan area and surrounding suburbs within a 50-mile radius. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Do you offer warranties on your electrical work?",
    answer:
      "Yes, we provide comprehensive warranties on all our electrical installations and repairs. Warranty periods vary by service type, and we stand behind our work 100%.",
  },
  {
    question: "Can you help with solar panel installation?",
    answer:
      "Absolutely! We specialize in solar panel installation, including system design, permitting, installation, and ongoing maintenance. We're certified solar installers with extensive experience.",
  },
  {
    question: "How quickly can you respond to emergency calls?",
    answer:
      "We typically respond to emergency calls within 1-2 hours. Our emergency service vehicles are strategically located throughout our service area for rapid response.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for most electrical projects. We'll assess your needs and provide detailed pricing before any work begins.",
  },
];

// ========================================
// WHY CHOOSE US
// ========================================
export const whyChooseUs = [
  {
    icon: Shield,
    title: "Certified Experts",
    description:
      "Licensed master electricians with extensive training and certifications",
    color: "blue",
    features: [
      "State-licensed professionals",
      "Ongoing technical training",
      "Industry certifications",
    ],
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description:
      "Round-the-clock emergency services for urgent electrical issues",
    color: "amber",
    features: [
      "1-2 hour response time",
      "Weekend availability",
      "Holiday service",
    ],
  },
  {
    icon: ThumbsUp,
    title: "Quality Guarantee",
    description:
      "Comprehensive warranty on all work with satisfaction guarantee",
    color: "teal",
    features: [
      "100% satisfaction guarantee",
      "Extended warranties",
      "Free follow-up inspections",
    ],
  },
  {
    icon: TrendingUp,
    title: "Affordable Pricing",
    description:
      "Transparent, competitive pricing with no hidden fees or surprises",
    color: "green",
    features: ["Free estimates", "Upfront pricing", "Flexible payment options"],
  },
];

// ========================================
// ABOUT STATS
// ========================================
export const aboutStats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    color: "amber",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    color: "blue",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "",
    label: "Mile Service Radius",
    color: "teal",
  },
];

// ========================================
// ABOUT HIGHLIGHTS
// ========================================
export const aboutHighlights = [
  { icon: CheckCircle, text: "Licensed & Bonded" },
  { icon: CheckCircle, text: "Fully Insured" },
  { icon: CheckCircle, text: "24/7 Available" },
  { icon: CheckCircle, text: "Free Estimates" },
];

// ========================================
// CONTACT INFORMATION
// ========================================
export const contactInfo = {
  phone: "(555) 123-4567",
  email: "info@sparkfixelectricals.com",
  address: "123 Electric Avenue, Metro City, MC 12345",
  serviceArea: "Metro Area & 50-mile radius",
  workingHours: {
    regular: "Mon-Fri: 7AM-7PM",
    weekend: "Sat-Sun: 8AM-5PM",
    emergency: "24/7 Emergency Service",
  },
  social: {
    facebook: "https://facebook.com/sparkfixelectricals",
    twitter: "https://twitter.com/sparkfixelec",
    instagram: "https://instagram.com/sparkfixelectricals",
    linkedin: "https://linkedin.com/company/sparkfixelectricals",
  },
};

// ========================================
// COMPANY INFORMATION
// ========================================
export const companyInfo = {
  name: "SparkFix Electricals",
  tagline: "Powering Your Home, Professionally",
  established: 2008,
  licenseNumber: "EL-12345-MC",
  insuranceProvider: "National Electrical Insurance",
  certifications: [
    "Master Electrician License",
    "Solar Installation Certified",
    "Emergency Services Certified",
    "Commercial Electrical Contractor",
  ],
};

// ========================================
// DERIVED DATA (Computed from allProjects)
// ========================================
export const completedProjects = allProjects.filter(
  (p) => p.status === "completed"
);
export const ongoingProjects = allProjects.filter(
  (p) => p.status === "ongoing"
);

// ========================================
// DEFAULT EXPORT (All Data Combined)
// ========================================
const electricianData = {
  navLinks,
  services,
  allProjects,
  completedProjects,
  ongoingProjects,
  testimonials,
  photoCarousel,
  faqs,
  whyChooseUs,
  aboutStats,
  aboutHighlights,
  contactInfo,
  companyInfo,
};

export default electricianData;
