export interface SubNavItem {
  name: string;
  href: string;
}

export interface NavItem {
  name: string;
  href: string;
  subItems?: SubNavItem[];
}

export const BRAND_COLORS = {
  deepGreen: '#174D35',
  mangoGold: '#E5A928',
  leafGreen: '#689857',
  charcoal: '#292D2A',
  cream: '#FAF8F5',
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Products', href: '#products' },
  { name: 'Our Process', href: '#process' },
  { name: 'News & Insights', href: '/news' },
];

export const COMPANY_INFO = {
  name: 'VitaKernel',
  tagline: 'Turning mango by-products into valuable resources.',
  mission: 'Our mission is to transform agricultural by-products into valuable products while promoting sustainability and resource efficiency.',
  about: 'Vitakernel is an agro-processing company focused on extracting value from mango-derived materials through the production of mango seed oil and biomass briquettes.',
  ceo: 'Azara Inka Dumah',
  ceoTitle: 'Chief Executive Officer & Founder',
  address: 'H/No.4 Cantoments, Florentine Villas, P.O. Box GP',
  city: 'Accra, Ghana',
  fullAddress: 'H/No.4 Cantoments, Florentine Villas, P.O. Box GP, Accra, Ghana',
  phone: '+233 24 438 0495',
  phoneRaw: '+233244380495',
  email: 'info@vitakernel.com',
  logoUrl: '/vitakernel-logo.png',
};

export const PRODUCTS_DATA = [
  {
    id: 'mango-seed-oil',
    title: 'Mango Seed Oil',
    subtitle: 'Unlocking the Value of Mango Seeds',
    shortDescription: 'A plant-derived oil with potential applications in cosmetics, personal care and more.',
    fullDescription: 'Mango seed oil is a plant-derived oil obtained from the kernel found within the mango seed. It has potential applications in cosmetics, personal care and other industries.',
    features: [
      'Plant-derived raw material',
      'Wide range of applications',
      'Supports agricultural by-product use',
    ],
    ctaText: 'Request Product Information',
    image: '/images/vitakernel-oil-bottle.jpg',
  },
  {
    id: 'biomass-briquettes',
    title: 'Biomass Briquettes',
    subtitle: 'Transforming Mango Residues into Energy Resources',
    shortDescription: 'Solid biofuel from mango residues for cleaner energy solutions.',
    fullDescription: 'Our briquettes are produced from suitable mango-derived materials, offering a renewable and sustainable fuel source.',
    features: [
      'Alternative solid fuel',
      'Supports waste reduction',
      'Contributes to a circular economy',
    ],
    ctaText: 'Request a Briquette Quote',
    image: '/images/vitakernel-eco-briquettes.jpg',
  },
];

export interface ProcessStage {
  step: number;
  title: string;
  iconType: 'collection' | 'processing' | 'quality' | 'packaging';
}

export const PROCESS_STAGES: ProcessStage[] = [
  { step: 1, title: 'Raw Material Collection', iconType: 'collection' },
  { step: 2, title: 'Processing & Extraction', iconType: 'processing' },
  { step: 3, title: 'Quality Control', iconType: 'quality' },
  { step: 4, title: 'Packaging & Distribution', iconType: 'packaging' },
];

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'mango-oil-cosmetics-trend',
    title: 'Mango Seed Oil Enters Global Cosmetics Market',
    excerpt: "Vitakernel's cold-pressed mango seed oil is gaining traction with international personal care brands seeking sustainable botanical actives.",
    date: '14 Oct 2026',
    image: '/images/vitakernel-oil-bottle.jpg',
    category: 'Product',
  },
  {
    id: 'eco-briquettes-accra',
    title: 'Clean Cooking Briquettes Launch in Accra Markets',
    excerpt: 'Our biomass eco briquettes are now available across Accra, offering households a cleaner, deforestation-free cooking fuel alternative.',
    date: '28 Sep 2026',
    image: '/images/vitakernel-eco-briquettes.jpg',
    category: 'Energy',
  },
  {
    id: 'circular-agribusiness-ghana',
    title: 'Ghana Circular Agribusiness Forum 2026',
    excerpt: 'CEO Azara Inka Dumah represented VitaKernel at the national forum on agricultural waste valorisation and deforestation-free supply chains.',
    date: '12 Sep 2026',
    image: '/images/mango-orchard.jpg',
    category: 'Sustainability',
  },
];
