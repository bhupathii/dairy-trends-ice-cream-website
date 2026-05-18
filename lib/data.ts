// Dairy Trends Ice Creams - Data Arrays
// Easy to customize: Update these arrays to change content across the website

export interface Flavour {
  id: string
  name: string
  description: string
  price: string
  image: string
  color: string
}

export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
}

export interface Offer {
  id: string
  title: string
  description: string
  discount: string
  badge: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
  avatar: string
}

// Popular Flavours - Customize flavour details here
export const flavours: Flavour[] = [
  {
    id: 'vanilla',
    name: 'Vanilla Classic',
    description: 'Rich, creamy vanilla made from premium Madagascar beans',
    price: '₹49',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
    color: '#FFF8DC'
  },
  {
    id: 'chocolate',
    name: 'Chocolate Delight',
    description: 'Intense Belgian chocolate with smooth creamy texture',
    price: '₹59',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
    color: '#4A2C2A'
  },
  {
    id: 'mango',
    name: 'Mango Magic',
    description: 'Fresh Alphonso mango bursting with tropical sweetness',
    price: '₹69',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=400&fit=crop',
    color: '#FFB347'
  },
  {
    id: 'strawberry',
    name: 'Strawberry Swirl',
    description: 'Sweet strawberry ribbons in velvety cream base',
    price: '₹59',
    image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=400&h=400&fit=crop',
    color: '#FFB6C1'
  },
  {
    id: 'butterscotch',
    name: 'Butterscotch Crunch',
    description: 'Caramelized butterscotch with crunchy toffee bits',
    price: '₹59',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400&h=400&fit=crop',
    color: '#DEB887'
  },
  {
    id: 'blackcurrant',
    name: 'Blackcurrant Blast',
    description: 'Tangy blackcurrant with a refreshing berry punch',
    price: '₹69',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop',
    color: '#4B0082'
  },
  {
    id: 'pista',
    name: 'Pista Premium',
    description: 'Aromatic pistachio with real nut pieces',
    price: '₹79',
    image: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=400&h=400&fit=crop',
    color: '#93C572'
  },
  {
    id: 'cookies',
    name: 'Cookies & Cream',
    description: 'Crushed chocolate cookies in smooth vanilla cream',
    price: '₹69',
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400&h=400&fit=crop',
    color: '#F5F5DC'
  }
]

// Product Categories - Customize product offerings here
export const products: Product[] = [
  {
    id: 'cups',
    name: 'Ice Cream Cups',
    description: 'Perfect single servings in various flavours',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop',
    category: 'cups'
  },
  {
    id: 'cones',
    name: 'Cones',
    description: 'Crispy waffle cones with generous scoops',
    image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400&h=400&fit=crop',
    category: 'cones'
  },
  {
    id: 'family-packs',
    name: 'Family Packs',
    description: 'Large tubs perfect for family gatherings',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop',
    category: 'family'
  },
  {
    id: 'sundaes',
    name: 'Sundaes',
    description: 'Indulgent sundaes with toppings galore',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
    category: 'sundaes'
  },
  {
    id: 'cakes',
    name: 'Ice Cream Cakes',
    description: 'Celebration cakes for special occasions',
    image: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=400&h=400&fit=crop',
    category: 'cakes'
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    description: 'Thick, creamy shakes in all flavours',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop',
    category: 'milkshakes'
  }
]

// Special Offers - Customize promotional offers here
export const offers: Offer[] = [
  {
    id: 'family-special',
    title: 'Family Pack Special',
    description: 'Get 2L family pack at special price. Perfect for weekend treats!',
    discount: '20% OFF',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop'
  },
  {
    id: 'birthday-combo',
    title: 'Birthday Party Combo',
    description: 'Ice cream cake + 10 cups + 10 cones. Complete party package!',
    discount: '₹999 Only',
    badge: 'Party Pack',
    image: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=400&h=300&fit=crop'
  },
  {
    id: 'summer-mango',
    title: 'Summer Mango Offer',
    description: 'Buy 2 Mango Magic cups, get 1 free. Limited summer special!',
    discount: 'Buy 2 Get 1',
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop'
  },
  {
    id: 'bulk-discount',
    title: 'Buy More Save More',
    description: 'Order 10+ items and save big on your total bill.',
    discount: 'Up to 30%',
    badge: 'Bulk Order',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop'
  }
]

// Customer Testimonials - Customize reviews here
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    quote: 'Best creamy taste! My whole family loves Dairy Trends. The mango flavour is absolutely divine.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Rahul Patel',
    location: 'Delhi',
    quote: 'Perfect for family celebrations. We ordered for my daughter\'s birthday and everyone loved it!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Sneha Reddy',
    location: 'Bangalore',
    quote: 'Kids loved the flavours! The cookies and cream is now their favourite treat every weekend.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Amit Kumar',
    location: 'Chennai',
    quote: 'The quality and freshness is unmatched. You can taste the difference in every scoop!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: '5',
    name: 'Kavitha Nair',
    location: 'Kochi',
    quote: 'Ordered for our office party and received so many compliments. Will definitely order again!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
  }
]

// Gallery Images - Add more images to showcase
export const galleryImages = [
  { id: '1', src: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop', alt: 'Vanilla Ice Cream' },
  { id: '2', src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop', alt: 'Chocolate Sundae' },
  { id: '3', src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop', alt: 'Ice Cream Cone' },
  { id: '4', src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=600&fit=crop', alt: 'Waffle Cone' },
  { id: '5', src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop', alt: 'Ice Cream Tub' },
  { id: '6', src: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=600&h=600&fit=crop', alt: 'Ice Cream Cake' },
  { id: '7', src: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop', alt: 'Mango Ice Cream' },
  { id: '8', src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop', alt: 'Milkshake' },
]

// Why Choose Us Features
export const features = [
  { icon: 'Sparkles', title: 'Rich Creamy Taste', description: 'Made with premium dairy for the creamiest texture' },
  { icon: 'Shield', title: 'Hygienic Preparation', description: 'Strict quality control and clean production' },
  { icon: 'Palette', title: 'Many Flavour Choices', description: '20+ unique flavours to satisfy every taste' },
  { icon: 'PartyPopper', title: 'Perfect for Parties', description: 'Bulk orders and party packages available' },
  { icon: 'BadgeIndianRupee', title: 'Affordable & Tasty', description: 'Premium quality at pocket-friendly prices' },
  { icon: 'Leaf', title: 'Fresh Quality', description: 'Made fresh daily with natural ingredients' }
]

// About Section Features
export const aboutFeatures = [
  { icon: 'Milk', title: 'Fresh & Creamy', description: 'Made with 100% fresh dairy' },
  { icon: 'Award', title: 'Quality Ingredients', description: 'Only the finest ingredients used' },
  { icon: 'ShieldCheck', title: 'Hygienic Preparation', description: 'FSSAI certified production' },
  { icon: 'Heart', title: 'Loved by Families', description: 'Trusted by thousands of families' }
]

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Flavours', href: '#flavours' },
  { name: 'Products', href: '#products' },
  { name: 'Offers', href: '#offers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
]

// Contact Information - Update with real details
export const contactInfo = {
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'hello@dairytrends.com',
  address: '123 Ice Cream Lane, Sweet City, India - 400001'
}
