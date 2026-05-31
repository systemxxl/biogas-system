import { 
  Leaf, 
  Users, 
  Flame, 
  CheckCircle2, 
  Wrench, 
  Recycle, 
  Mic2, 
  Building2 
} from "lucide-react";

export const projectCategories = [
  { id: "all", label: "All", icon: Leaf },
  { id: "installations", label: "Installations", icon: Wrench },
  { id: "restorations", label: "Restorations", icon: Settings2 },
  { id: "training", label: "Training", icon: Users },
  { id: "appliances", label: "Appliances", icon: Flame },
  { id: "fertilizer", label: "Fertilizer", icon: Leaf },
];

// Helper to keep icons working if needed
import { Settings2 } from "lucide-react";

export const projectsGallery = [
  { 
    id: 1,
    cat: "installations", 
    icon: Leaf, 
    title: "Biogas Plant Installation", 
    text: "New household biogas plant installation for clean cooking and sustainable living.", 
    image: "/assets/645415092_122159713724958675_2122180214002289931_n.jpg",
    images: [
      "/assets/645415092_122159713724958675_2122180214002289931_n.jpg",
      "/assets/645432563_122159713526958675_8841646942470576377_n.jpg",
      "/assets/project-3.jpg"
    ],
    description: "This project involved the complete design and installation of a 6-cubic-meter household biogas digester. The system now provides enough gas for three full meals a day, significantly reducing the family's reliance on firewood and charcoal. The installation includes a high-efficiency biogas stove and a pressure gauge for monitoring gas production."
  },
  { 
    id: 2,
    cat: "training", 
    icon: Users, 
    title: "Community Training", 
    text: "Training communities on biogas technology, operation and maintenance best practices.", 
    image: "/assets/653370674_122161808180958675_2027784688729312152_n.jpg",
    images: [
      "/assets/653370674_122161808180958675_2027784688729312152_n.jpg",
      "/assets/525562475_122105325824958675_2183548524119828192_n.jpg"
    ],
    description: "Our community outreach programs focus on empowering local residents with the knowledge to operate and maintain their biogas systems. This particular session in Narok Town brought together 15 households to discuss safety protocols, feedstock optimization, and the secondary benefits of bio-slurry for kitchen gardens."
  },
  { 
    id: 3,
    cat: "appliances", 
    icon: Flame, 
    title: "Appliance Setup", 
    text: "Installation of biogas stoves and appliances for efficient and safe energy use.", 
    image: "/assets/biogas stove.png",
    images: [
      "/assets/biogas stove.png",
      "/assets/service-3.jpg"
    ],
    description: "We provide and install specialized biogas appliances, including single and double burner stoves, biogas lamps, and water heaters. These appliances are specifically calibrated for the lower pressure and composition of biogas, ensuring maximum thermal efficiency and safety in the kitchen."
  },
  { 
    id: 4,
    cat: "installations", 
    icon: CheckCircle2, 
    title: "Completed Digester", 
    text: "Finished biogas digester ready for use, built to last and perform efficiently.", 
    image: "/assets/project-3.jpg",
    images: [
      "/assets/project-3.jpg",
      "/assets/finished doom installed.png"
    ],
    description: "A recently completed fixed-dome digester project. This type of digester is known for its durability and low maintenance costs. It features an integrated slurry tank that automatically collects bio-fertilizer, making it a circular solution for farmers who want to combine energy production with organic farming."
  },
  { 
    id: 5,
    cat: "installations", 
    icon: Wrench, 
    title: "Digester Construction", 
    text: "Ongoing construction of a durable biogas digester from start to finish.", 
    image: "/assets/645432563_122159713526958675_8841646942470576377_n.jpg",
    images: [
      "/assets/645432563_122159713526958675_8841646942470576377_n.jpg",
      "/assets/service-1.jpg"
    ],
    description: "Construction phase of a large-scale institutional digester. This stage involves meticulous bricklaying and plastering to ensure the dome is completely gas-tight. Our skilled masonry team uses specialized techniques and high-quality waterproof cement to guarantee a lifespan of over 20 years."
  },
  { 
    id: 6,
    cat: "fertilizer", 
    icon: Recycle, 
    title: "Organic Fertilizer", 
    text: "High-quality organic fertilizer produced as a by-product of biogas systems.", 
    image: "/assets/kale.jpeg",
    images: [
      "/assets/kale.jpeg",
      "/assets/cow.jpeg"
    ],
    description: "Bio-slurry is a powerful organic fertilizer that comes out of the digester after gas extraction. It is rich in nitrogen, phosphorus, and potassium. In this project, we helped a farmer set up an irrigation system to apply slurry directly to their kale crop, leading to a 40% increase in yield compared to chemical fertilizers."
  },
  { 
    id: 7,
    cat: "training", 
    icon: Mic2, 
    title: "Media & Awareness", 
    text: "Radio and media outreach to educate and inspire more communities to adopt biogas.", 
    image: "/assets/525562475_122105325824958675_2183548524119828192_n.jpg",
    images: [
      "/assets/525562475_122105325824958675_2183548524119828192_n.jpg",
      "/assets/525607100_122105325632958675_1745228413023663076_n.jpg"
    ],
    description: "Through partnerships with local radio stations and community leaders, we share success stories and technical advice about biogas. This outreach is vital for debunking myths and showing the practical, daily impact of clean energy technology on health and household finances."
  },
  { 
    id: 8,
    cat: "installations", 
    icon: Building2, 
    title: "Institutional Project", 
    text: "Biogas solutions for schools, institutions and commercial establishments.", 
    image: "/assets/565137370_122134110734958675_5886927147664881699_n.jpg",
    images: [
      "/assets/565137370_122134110734958675_5886927147664881699_n.jpg",
      "/assets/project-1.jpg"
    ],
    description: "This institutional-grade biogas system was installed at a local school to manage kitchen waste and provide gas for cooking student meals. It not only saves the school thousands of shillings in fuel costs but also provides a clean, smoke-free environment for the kitchen staff and students."
  },
];
