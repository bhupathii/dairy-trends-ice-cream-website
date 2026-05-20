import { IceCream, ShieldCheck, Truck, Star } from 'lucide-react'

export interface NavLink {
  name: string
  href: string
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Flavours', href: '/#flavours' },
  { name: 'About', href: '/#about' },
  { name: 'Products', href: '/#products' },
  { name: 'Contact', href: '/#contact' },
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
    color: '#FFD21F',
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
    color: '#3B1F1B',
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
    color: '#3B1F1B',
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
  // Cones
  {
    name: 'Butterscotch Mega Cone',
    description: 'Crunchy waffle cone filled with rich butterscotch and praline.',
    image: '/ice-cream images/DSC08401 Medium.png',
    category: 'Cones',
    size: '150ml',
    badge: 'Bestseller',
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
    badge: 'Kids Choice',
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
    name: 'Red Velvet Cone',
    description: 'Decadent red velvet flavor with white chocolate drizzles in a cone.',
    image: '/ice-cream images/DSC08836 Medium.png',
    category: 'Cones',
    size: '150ml',
    badge: 'New Launch',
  },
  {
    name: 'Vanilla Waffle Cone',
    description: 'Rich classic vanilla in a fresh, crispy waffle cone.',
    image: '/ice-cream images/DSC09037 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  {
    name: 'Kesar Pista Cone',
    description: 'Premium combination of saffron and green pistachio flavor in a cone.',
    image: '/ice-cream images/DSC09143 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  {
    name: 'Mango Dream Cone',
    description: 'Real Alfonso mango flavor loaded inside a crispy waffle cone.',
    image: '/ice-cream images/DSC08505 Medium.png',
    category: 'Cones',
    size: '150ml',
  },
  
  // Cups
  {
    name: 'Caramel Sundae Cup',
    description: 'Creamy vanilla topped with flowing golden caramel sauce.',
    image: '/ice-cream images/DSC08470 Medium.png',
    category: 'Cups',
    size: '125ml',
    badge: 'Bestseller',
  },
  {
    name: 'Classic Vanilla Cup',
    description: 'Rich and creamy traditional vanilla ice cream cup.',
    image: '/ice-cream images/DSC09000 Medium.png',
    category: 'Cups',
    size: '100ml',
  },
  {
    name: 'Kaju Kishmish Cup',
    description: 'Rich vanilla base with crunchy cashews and sweet raisins.',
    image: '/ice-cream images/DSC08675 Medium.png',
    category: 'Cups',
    size: '125ml',
  },
  {
    name: 'Royal Rajbhog Cup',
    description: 'Indian traditional sweet flavour cup loaded with nuts.',
    image: '/ice-cream images/DSC08720 Medium.png',
    category: 'Cups',
    size: '125ml',
  },
  {
    name: 'Shahi Anjir Cup',
    description: 'Exquisite royal fig flavour ice cream packed with real figs.',
    image: '/ice-cream images/DSC08827 Medium.png',
    category: 'Cups',
    size: '125ml',
  },
  {
    name: 'Black Currant Cup',
    description: 'Tangy and sweet black currant berries in a creamy base.',
    image: '/ice-cream images/DSC09115 Medium.png',
    category: 'Cups',
    size: '125ml',
  },

  // Tubs
  {
    name: 'Kashmiri Kulfi Tub',
    description: 'Authentic traditional kulfi packed for the whole family.',
    image: '/ice-cream images/DSC09262 Medium.png',
    category: 'Tubs',
    size: '500ml',
    badge: 'Traditional',
  },
  {
    name: 'Rajbhog Family Pack Tub',
    description: 'Royal dessert experience with saffron and rich dry fruits.',
    image: '/ice-cream images/DSC08771 Medium.png',
    category: 'Tubs',
    size: '1L',
    badge: 'Festive Pack',
  },
  {
    name: 'Kesar Pista Family Tub',
    description: 'Delightful blend of saffron base with pistachios for rich taste.',
    image: '/ice-cream images/DSC08822 Medium.png',
    category: 'Tubs',
    size: '1L',
  },
  {
    name: 'Chocolate Truffle Tub',
    description: 'Rich dark chocolate ice cream loaded with chocolate cake bits.',
    image: '/ice-cream images/DSC08916 Medium.png',
    category: 'Tubs',
    size: '500ml',
    badge: 'Choco Delight',
  },
  {
    name: 'Belgian Chocolate Tub',
    description: 'Creamy milk chocolate crafted with premium Belgian cocoa.',
    image: '/ice-cream images/DSC08921 Medium.png',
    category: 'Tubs',
    size: '1L',
  },
  {
    name: 'Black Forest Tub',
    description: 'White chocolate, cherries, and chocolate cake bits layered.',
    image: '/ice-cream images/DSC09106 Medium.png',
    category: 'Tubs',
    size: '500ml',
  },
  {
    name: 'Black Currant Family Tub',
    description: 'Tangy and sweet black currant berries in family size.',
    image: '/ice-cream images/DSC09134 Medium.png',
    category: 'Tubs',
    size: '1L',
  },
  {
    name: 'Pista Cream Family Tub',
    description: 'Rich pistachio base with almond and pistachio chunks.',
    image: '/ice-cream images/DSC09174 Medium.png',
    category: 'Tubs',
    size: '1L',
  },
  {
    name: 'Kaju Kishmish Family Tub',
    description: 'Creamy milk ice cream filled with cashews and sweet raisins.',
    image: '/ice-cream images/DSC08696 Medium.png',
    category: 'Tubs',
    size: '500ml',
  },
  {
    name: 'Butterscotch Family Tub',
    description: 'Premium creamy butterscotch with caramelized praline crunch.',
    image: '/ice-cream images/DSC08377 Medium.png',
    category: 'Tubs',
    size: '500ml',
  },

  // Kulfis & Sticks
  {
    name: 'Matka Kulfi',
    description: 'Rich traditional kulfi frozen in authentic terracotta pots.',
    image: '/ice-cream images/DSC09204 Medium.png',
    category: 'Kulfis & Sticks',
    size: '150ml',
    badge: 'Festive Special',
  },
  {
    name: 'Shahi Kulfi Slice',
    description: 'Authentic royal kulfi slice filled with cardamoms and almonds.',
    image: '/ice-cream images/DSC09212 Medium.png',
    category: 'Kulfis & Sticks',
    size: '100ml',
  },
  {
    name: 'Badam Kulfi Stick',
    description: 'Rich creamy almond kulfi on a stick.',
    image: '/ice-cream images/DSC09248 Medium.png',
    category: 'Kulfis & Sticks',
    size: '80ml',
  },
  {
    name: 'Malai Kulfi Stick',
    description: 'Pure reduction of sweetened milk kulfi on a stick.',
    image: '/ice-cream images/DSC09287 Medium.png',
    category: 'Kulfis & Sticks',
    size: '80ml',
  },
  {
    name: 'Rabdi Kulfi Stick',
    description: 'Authentic rabdi flavor frozen to perfection on a stick.',
    image: '/ice-cream images/DSC09301 Medium.png',
    category: 'Kulfis & Sticks',
    size: '80ml',
  },

  // Specialities & Sundaes
  {
    name: 'Ice Cream Sandwich',
    description: 'Creamy vanilla sandwiched between chocolate biscuits.',
    image: '/ice-cream images/DSC09381 Medium.png',
    category: 'Specialities',
    size: '150ml',
    badge: 'Trending',
  },
  {
    name: 'Cassata Slice',
    description: 'Layers of strawberry, vanilla, and chocolate with dry fruits.',
    image: '/ice-cream images/DSC09384 Medium.png',
    category: 'Specialities',
    size: '150ml',
    badge: 'Premium',
  },
  {
    name: 'Mango Sundae',
    description: 'Real mango pulp layered over vanilla scoop in a sundae.',
    image: '/ice-cream images/DSC08517 Medium.png',
    category: 'Sundaes',
    size: '150ml',
  },
  {
    name: 'Strawberry Sundae',
    description: 'Fruity strawberry sauce over thick creamy strawberry base.',
    image: '/ice-cream images/DSC08591 Medium.png',
    category: 'Sundaes',
    size: '150ml',
  },
  {
    name: 'Chocolate Fudge Sundae',
    description: 'Rich dark chocolate fudge poured over vanilla scoops.',
    image: '/ice-cream images/DSC08970 Medium.png',
    category: 'Sundaes',
    size: '150ml',
    badge: 'Choco Blast',
  },
  {
    name: 'Butterscotch Sundae',
    description: 'Creamy butterscotch sauce over caramelised praline bits.',
    image: '/ice-cream images/DSC09085 Medium.png',
    category: 'Sundaes',
    size: '150ml',
  }
]

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
    name: 'Ramesh Gupta',
    location: 'Retailer, Secunderabad',
    quote: 'Dairy Trends ice creams sell out so quickly! The family tubs, especially Rajbhog and Butterscotch, are always in high demand. Their cold chain supply is highly reliable and keeps products perfectly frozen.',
    rating: 5,
    avatar: ''
  },
  {
    id: '2',
    name: 'Kiran Kumar',
    location: 'Event Planner, Hyderabad',
    quote: 'We ordered the Matka Kulfi and Cones for a wedding of 500 guests. The guests loved the rich, creamy taste and the hygienic packaging was excellent. Highly recommended for catering services!',
    rating: 5,
    avatar: ''
  },
  {
    id: '3',
    name: 'Suhasini Reddy',
    location: 'Home Maker, Guntur',
    quote: 'Dairy Trends Kashmiri Kulfi and Cassata are regular desserts in our house. My children love the Trend Cookies cone, and it feels much creamier and richer than other commercial brands.',
    rating: 5,
    avatar: ''
  },
  {
    id: '4',
    name: 'Venkatesh Prasad',
    location: 'Supermarket Owner, Vijayawada',
    quote: 'We started stocking Dairy Trends ice creams 6 months ago, and they have become our top-selling brand. Customer feedback is excellent, especially regarding the rich, pure milky creaminess.',
    rating: 5,
    avatar: ''
  },
  {
    id: '5',
    name: 'Meenakshi Rao',
    location: 'Customer, Warangal',
    quote: 'The Shahi Anjir and Kaju Kishmish flavors are absolutely loaded with dry fruits. The taste is authentic, premium, and traditional, yet very reasonably priced. Best ice creams in Telangana!',
    rating: 5,
    avatar: ''
  },
  {
    id: '6',
    name: 'Aditya Vardhan',
    location: 'Distributor, Khammam',
    quote: 'Partnering with Dairy Trends as a distributor has been an excellent business decision. Their large product range of 27+ items and reliable logistics support make distribution smooth.',
    rating: 5,
    avatar: ''
  }
]

export const galleryImages = [
  { id: '1', src: '/ice-cream images/DSC08836 Medium.png', alt: 'Red Velvet Cone' },
  { id: '2', src: '/ice-cream images/DSC08860 Medium.png', alt: 'Cookies & Cream Cone' },
  { id: '3', src: '/ice-cream images/DSC08895 Medium.png', alt: 'Double Chocolate Cone' },
  { id: '4', src: '/ice-cream images/DSC08470 Medium.png', alt: 'Caramel Sundae Cup' },
  { id: '5', src: '/ice-cream images/DSC09262 Medium.png', alt: 'Kashmiri Kulfi Tub' },
  { id: '6', src: '/ice-cream images/DSC08562 Medium.png', alt: 'Nutty Delight Cone' },
  { id: '7', src: '/ice-cream images/DSC08771 Medium.png', alt: 'Royal Rajbhog Scoop' },
  { id: '8', src: '/ice-cream images/DSC09204 Medium.png', alt: 'Traditional Matka Kulfi' },
  { id: '9', src: '/ice-cream images/DSC09384 Medium.png', alt: 'Premium Cassata Slice' },
  { id: '10', src: '/ice-cream images/DSC08970 Medium.png', alt: 'Chocolate Fudge Sundae' },
  { id: '11', src: '/ice-cream images/DSC09381 Medium.png', alt: 'Vanilla Ice Cream Sandwich' },
  { id: '12', src: '/ice-cream images/DSC08517 Medium.png', alt: 'Mango Sundae Cup' },
]

export const features = [
  { icon: 'Sparkles', title: 'Rich Creamy Taste', description: 'Made with 100% fresh, premium milk' },
  { icon: 'Shield', title: 'Hygienic Preparation', description: 'FSSAI certified clean automated production' },
  { icon: 'Palette', title: '27+ Flavour Choices', description: 'Wide range of cones, cups, tubs and kulfis' },
  { icon: 'PartyPopper', title: 'Perfect for Parties', description: 'Bulk ordering for weddings, events and retailers' },
  { icon: 'BadgeIndianRupee', title: 'Affordable & Tasty', description: 'Premium quality standards at the best price' },
  { icon: 'Leaf', title: 'Pure Ingredients', description: 'Made with real fruits and dry fruit chunks' }
]

export const aboutFeatures = [
  { icon: 'Milk', title: 'Fresh & Creamy', description: 'Made with 100% fresh dairy' },
  { icon: 'Award', title: 'Quality Ingredients', description: 'Only the finest ingredients used' },
  { icon: 'ShieldCheck', title: 'Hygienic Preparation', description: 'FSSAI certified production' },
  { icon: 'Heart', title: 'Loved by Families', description: 'Trusted by thousands of families' }
]

export const contactInfo = {
  phone: '+91 91775 66737',
  whatsapp: '+91 91775 66737',
  email: 'info@dairytrends.in',
  address: 'Pradhara Dairy Private Limited, Survey No. 1-29, Penjerla Village, Kothur Mandal, Rangareddy District, Telangana - 509228'
}

export interface Offer {
  id: string
  title: string
  description: string
  image: string
  discount: string
  badge: string
}

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Bulk Celebration Offer',
    description: 'Get special distributor pricing on bulk orders of family tubs and cups for weddings or events.',
    image: '/ice-cream images/DSC08771 Medium.png',
    discount: 'Special Rate',
    badge: 'Bulk Offer',
  },
  {
    id: '2',
    title: 'Sundae Box Deal',
    description: 'Try all our popular sundae cups (Mango, Caramel, Chocolate Fudge) with our seasonal bundles.',
    image: '/ice-cream images/DSC08470 Medium.png',
    discount: 'Combo Deal',
    badge: 'Seasonal Combo',
  },
]

