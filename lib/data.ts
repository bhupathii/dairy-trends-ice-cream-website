import { IceCream, ShieldCheck, Truck, Star } from 'lucide-react'

export interface NavLink {
  name: string
  href: string
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Flavours', href: '#flavours' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
]

export interface Flavour {
  id: string
  name: string
  description: string
  image: string
  color: string
}

export const flavours: Flavour[] = [
  {
    id: '1',
    name: 'Rajbhog',
    description: 'A royal treat loaded with dry fruits, saffron, and rich creamy goodness.',
    image: '/ice-cream images/DSC08771 Medium.png',
    color: '#FFB800',
  },
  {
    id: '2',
    name: 'Kaju Kishmish',
    description: 'Classic combination of roasted cashews and sweet raisins in creamy ice cream.',
    image: '/ice-cream images/DSC08675 Medium.png',
    color: '#E3C185',
  },
  {
    id: '3',
    name: 'Butterscotch',
    description: 'Rich buttery flavour with crunchy praline bits for the perfect texture.',
    image: '/ice-cream images/DSC08377 Medium.png',
    color: '#F4A460',
  },
  {
    id: '4',
    name: 'Kashmiri Kulfi',
    description: 'Traditional rich kulfi packed in a convenient tub, infused with authentic spices.',
    image: '/ice-cream images/DSC09262 Medium.png',
    color: '#D2691E',
  },
  {
    id: '5',
    name: 'Trend Cookies',
    description: 'Crunchy chocolate cookies crushed into smooth vanilla cream.',
    image: '/ice-cream images/DSC08860 Medium.png',
    color: '#4A3728',
  },
  {
    id: '6',
    name: 'Nutty Delight',
    description: 'A masterpiece loaded with nuts and chocolate for the ultimate crunch.',
    image: '/ice-cream images/DSC08562 Medium.png',
    color: '#8B4513',
  },
  {
    id: '7',
    name: 'Pista',
    description: 'Premium pistachio ice cream with a rich, nutty flavor profile.',
    image: '/ice-cream images/DSC09165 Medium.png',
    color: '#93C572',
  },
  {
    id: '8',
    name: 'Chocolate',
    description: 'Deep, rich cocoa flavor for the ultimate chocolate lover.',
    image: '/ice-cream images/DSC08959 Medium.png',
    color: '#3B2F2F',
  }
]

export interface Product {
  name: string
  description: string
  image: string
  category: string
  size: string
  badge?: string
}

export const products: Product[] = [
  {
    name: 'Caramel Sundae Cup',
    description: 'Creamy vanilla topped with flowing golden caramel sauce.',
    image: '/ice-cream images/DSC08470 Medium.png',
    category: 'Cups',
    size: '125ml',
    badge: 'Bestseller',
  },
  {
    name: 'Butterscotch Mega Cone',
    description: 'Crunchy waffle cone filled with rich butterscotch and praline.',
    image: '/ice-cream images/DSC08401 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  {
    name: 'Chocolate Mega Cone',
    description: 'Pure chocolate bliss in a crisp baked waffle cone.',
    image: '/ice-cream images/DSC08959 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  {
    name: 'Pista Mega Cone',
    description: 'Rich pistachio ice cream wrapped in a crunchy cone.',
    image: '/ice-cream images/DSC09165 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  {
    name: 'Trend Cookies Mega Cone',
    description: 'Cookies and cream in a mega cone format for maximum enjoyment.',
    image: '/ice-cream images/DSC08860 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  {
    name: 'Nutty Delight Mega Cone',
    description: 'Loaded with nuts and chocolate, an explosion of textures.',
    image: '/ice-cream images/DSC08562 Medium.png',
    category: 'Cones',
    size: '150ml',
    badge: 'Premium',
  },
  {
    name: 'Kashmiri Kulfi Tub',
    description: 'Authentic traditional kulfi packed for the whole family.',
    image: '/ice-cream images/DSC09262 Medium.png',
    category: 'Tubs',
    size: '500ml',
    badge: 'Authentic',
  },
  {
    name: 'Rajbhog Family Pack',
    description: 'Royal dessert experience with saffron and rich dry fruits.',
    image: '/ice-cream images/DSC08771 Medium.png',
    category: 'Family Packs',
    size: '1L',
  }
]

// ... keeping testimonials and gallery same but without unsplash ...
// I will just copy over the rest and remove unsplash from gallery
export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    quote: 'Best creamy taste! My whole family loves Dairy Trends. The mango flavour is absolutely divine.',
    rating: 5,
    avatar: ''
  },
  {
    id: '2',
    name: 'Rahul Patel',
    location: 'Delhi',
    quote: 'Perfect for family celebrations. We ordered for my daughter\'s birthday and everyone loved it!',
    rating: 5,
    avatar: ''
  },
  {
    id: '3',
    name: 'Sneha Reddy',
    location: 'Bangalore',
    quote: 'Kids loved the flavours! The cookies and cream is now their favourite treat every weekend.',
    rating: 5,
    avatar: ''
  },
  {
    id: '4',
    name: 'Amit Kumar',
    location: 'Chennai',
    quote: 'The quality and freshness is unmatched. You can taste the difference in every scoop!',
    rating: 5,
    avatar: ''
  },
  {
    id: '5',
    name: 'Kavitha Nair',
    location: 'Kochi',
    quote: 'Ordered for our office party and received so many compliments. Will definitely order again!',
    rating: 5,
    avatar: ''
  },
  {
    id: '6',
    name: 'Vikram Singh',
    location: 'Pune',
    quote: 'The packaging kept the ice cream perfectly frozen. Great delivery and even better taste!',
    rating: 5,
    avatar: ''
  },
  {
    id: '7',
    name: 'Anjali Desai',
    location: 'Ahmedabad',
    quote: 'I have tried many brands, but Dairy Trends is definitely the creamiest. Highly recommended.',
    rating: 5,
    avatar: ''
  },
  {
    id: '8',
    name: 'Rohan Mehta',
    location: 'Surat',
    quote: 'Amazing variety of flavors. The Kashmiri Kulfi is out of this world!',
    rating: 5,
    avatar: ''
  }
]

// Gallery Images - Add more images to showcase
export const galleryImages = [
  { id: '1', src: '/ice-cream images/DSC08836 Medium.png', alt: 'Red Velvet Cone' },
  { id: '2', src: '/ice-cream images/DSC08860 Medium.png', alt: 'Cookies & Cream Cone' },
  { id: '3', src: '/ice-cream images/DSC08870 Medium.png', alt: 'Classic Choco Bar' },
  { id: '4', src: '/ice-cream images/DSC08895 Medium.png', alt: 'Double Chocolate Cone' },
  { id: '5', src: '/ice-cream images/DSC08470 Medium.png', alt: 'Caramel Sundae Cup' },
  { id: '6', src: '/ice-cream images/DSC09262 Medium.png', alt: 'Kashmiri Kulfi Tub' },
  { id: '7', src: '/ice-cream images/DSC08562 Medium.png', alt: 'Nutty Delight Cone' },
  { id: '8', src: '/ice-cream images/DSC08771 Medium.png', alt: 'Royal Rajbhog Scoop' },
]

// Why Choose Us Features
export const features = [
  { icon: 'Sparkles', title: 'Rich Creamy Taste', description: 'Made with premium dairy for the creamiest texture' },
  { icon: 'Shield', title: 'Hygienic Preparation', description: 'Strict quality control and clean production' },
  { icon: 'Palette', title: 'Many Flavour Choices', description: '20+ unique flavours to satisfy every taste' },
  { icon: 'PartyPopper', title: 'Perfect for Parties', description: 'Bulk orders and party packages available' },
  { icon: 'BadgeIndianRupee', title: 'Affordable & Tasty', description: 'Premium quality at premium quality standards' },
  { icon: 'Leaf', title: 'Fresh Quality', description: 'Made fresh daily with natural ingredients' }
]

// About Section Features
export const aboutFeatures = [
  { icon: 'Milk', title: 'Fresh & Creamy', description: 'Made with 100% fresh dairy' },
  { icon: 'Award', title: 'Quality Ingredients', description: 'Only the finest ingredients used' },
  { icon: 'ShieldCheck', title: 'Hygienic Preparation', description: 'FSSAI certified production' },
  { icon: 'Heart', title: 'Loved by Families', description: 'Trusted by thousands of families' }
]



// Contact Information - Update with real details
export const contactInfo = {
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'hello@dairytrends.com',
  address: '123 Ice Cream Lane, Sweet City, India - 400001'
}
