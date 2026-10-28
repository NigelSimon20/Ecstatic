export const company = {
  name: "Ecstatic Engineering",
  legalName: "Ecstatic Engineering Incorporated",
  tagline: "We engineer your vision into reality",
  slogan: "One Company. Endless Solutions.",
  phones: ["+263 771 619 967", "+263 77 582 3423", "+263 78 549 9673"],
  emails: ["info@estaticengineering.co.zw", "ecstaticengineering@gmail.com"],
  website: "www.estaticengineering.co.zw",
  address: ["14 Kelvin Road North", "Graniteside, Harare", "Zimbabwe"],
  hours: [
    { days: "Mon – Fri", time: "07:00 – 17:00" },
    { days: "Saturday", time: "08:00 – 12:00" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export const divisions = ["Mechanical", "Fabrication", "Construction", "Maintenance"];

export const services = [
  {
    title: "Welding & Fabrication",
    image: "/images/svc-welding.jpg",
    summary: "Certified welders and fabricators turning raw steel into precise, durable components.",
    items: ["Steel Welding", "Pressure Vessels", "Fabrication", "Modifications"],
  },
  {
    title: "Industrial Maintenance",
    image: "/images/svc-maintenance.jpg",
    summary: "Keeping your plant running with planned and responsive maintenance programmes.",
    items: ["Plant Maintenance", "Breakdown Support", "Preventive Maintenance", "Equipment Overhauls"],
  },
  {
    title: "Construction Services",
    image: "/images/svc-construction.jpg",
    summary: "From steel structures to complete industrial buildings, delivered turnkey.",
    items: ["Steel Structures", "Industrial Buildings", "Civils & Concrete Works", "Turnkey Projects"],
  },
  {
    title: "Industrial Painting",
    image: "/images/svc-painting.jpg",
    summary: "Surface preparation and protective coatings that extend the life of your assets.",
    items: ["Surface Preparation", "Protective Coatings", "Blast & Paint", "Corrosion Protection"],
  },
  {
    title: "Mechanical Services",
    image: "/images/svc-mechanical.jpg",
    summary: "Installation, repair and precision alignment of rotating and process equipment.",
    items: ["Equipment Installation", "Mechanical Repairs", "Alignment & Balancing", "Technical Support"],
  },
];

export const values = [
  { icon: "shield", title: "Quality Assured", text: "We never compromise on quality." },
  { icon: "team", title: "Experienced Team", text: "Skilled professionals dedicated to your success." },
  { icon: "gear", title: "Advanced Technology", text: "Modern equipment for precision and efficiency." },
  { icon: "helmet", title: "Safety First", text: "We prioritise safety in all our projects." },
  { icon: "globe", title: "Global Standards", text: "We meet international standards." },
] as const;

export const projects = [
  { title: "Piping Systems", image: "/images/prj-piping.jpg" },
  { title: "Pressure Vessels", image: "/images/prj-vessels.jpg" },
  { title: "Heavy Fabrication", image: "/images/prj-fabrication.jpg" },
  { title: "Steel Structures", image: "/images/prj-steel.jpg" },
  { title: "Industrial Plants", image: "/images/prj-plants.jpg" },
];

export const team = [
  {
    name: "Constantine Chipunza",
    role: "Founder & Chief Executive Officer",
    bio: "Constantine leads Ecstatic Engineering with a commitment to quality workmanship, safety and results-driven project delivery for industry across Zimbabwe and beyond.",
  },
];
