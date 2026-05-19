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
  name: string
  flavour: string
  category: string
  size: string
  description: string
  image: string
  badge: string
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
  },
  {
    "name": "Vanilla Family Pack",
    "flavour": "Vanilla",
    "category": "Family Packs",
    "size": "Family Pack",
    "description": "Classic creamy vanilla ice cream for the whole family.",
    "image": "/ice-cream images/DSC08827 Medium.png",
    "badge": ""
  },
  {
    "name": "Strawberry Premium Cup",
    "flavour": "Strawberry",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "Sweet strawberry ice cream in a convenient cup.",
    "image": "/ice-cream images/DSC08870 Medium.png",
    "badge": "Popular"
  },
  {
    "name": "Mango Magic Cup",
    "flavour": "Mango",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "Alphonso mango goodness in a cup.",
    "image": "/ice-cream images/DSC08916 Medium.png",
    "badge": ""
  },
  {
    "name": "Chocolate Delight Cup",
    "flavour": "Chocolate",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "Rich chocolate ice cream cup.",
    "image": "/ice-cream images/DSC08921 Medium.png",
    "badge": "Bestseller"
  },
  {
    "name": "Pista Premium Cup",
    "flavour": "Pistachio",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "Nutty pistachio ice cream in a cup.",
    "image": "/ice-cream images/DSC08970 Medium.png",
    "badge": ""
  },
  {
    "name": "Vanilla Classic Cone",
    "flavour": "Vanilla",
    "category": "Cones",
    "size": "Regular Cone",
    "description": "Crispy cone filled with classic vanilla ice cream.",
    "image": "/ice-cream images/DSC09085 Medium.png",
    "badge": ""
  },
  {
    "name": "Strawberry Swirl Cone",
    "flavour": "Strawberry",
    "category": "Cones",
    "size": "Regular Cone",
    "description": "Delicious strawberry ice cream in a crispy waffle cone.",
    "image": "/ice-cream images/DSC09115 Medium.png",
    "badge": ""
  },
  {
    "name": "Blackcurrant Mega Cone",
    "flavour": "Blackcurrant",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Tangy blackcurrant ice cream in a large waffle cone.",
    "image": "/ice-cream images/DSC09143 Medium.png",
    "badge": "New"
  },
  {
    "name": "Blackcurrant Tub",
    "flavour": "Blackcurrant",
    "category": "Tubs",
    "size": "Tub",
    "description": "A tub of refreshing blackcurrant ice cream.",
    "image": "/ice-cream images/DSC09204 Medium.png",
    "badge": ""
  },
  {
    "name": "Vanilla Classic Tub",
    "flavour": "Vanilla",
    "category": "Tubs",
    "size": "Tub",
    "description": "Creamy vanilla ice cream in a family-sized tub.",
    "image": "/ice-cream images/DSC09212 Medium.png",
    "badge": "Classic"
  },
  {
    "name": "Chocolate Delight Tub",
    "flavour": "Chocolate",
    "category": "Tubs",
    "size": "Tub",
    "description": "Rich Belgian chocolate ice cream tub.",
    "image": "/ice-cream images/DSC09248 Medium.png",
    "badge": "Premium"
  },
  {
    "name": "Mango Magic Tub",
    "flavour": "Mango",
    "category": "Tubs",
    "size": "Tub",
    "description": "Tropical mango ice cream in a large tub.",
    "image": "/ice-cream images/DSC09262 Medium.png",
    "badge": ""
  },
  {
    "name": "Strawberry Swirl Tub",
    "flavour": "Strawberry",
    "category": "Tubs",
    "size": "Tub",
    "description": "Sweet strawberry ice cream tub.",
    "image": "/ice-cream images/DSC09287 Medium.png",
    "badge": ""
  },
  {
    "name": "Pista Premium Tub",
    "flavour": "Pistachio",
    "category": "Tubs",
    "size": "Tub",
    "description": "Pistachio ice cream tub with real nut pieces.",
    "image": "/ice-cream images/DSC09301 Medium.png",
    "badge": ""
  },
  {
    "name": "Mixed Party Pack",
    "flavour": "Mixed",
    "category": "Party Packs",
    "size": "Multipack",
    "description": "A variety pack of our most popular flavours.",
    "image": "/ice-cream images/DSC09381 Medium.png",
    "badge": "Party Pack"
  },
  {
    "name": "Premium Party Pack",
    "flavour": "Mixed Premium",
    "category": "Party Packs",
    "size": "Multipack",
    "description": "A multipack of our premium ice cream range.",
    "image": "/ice-cream images/DSC09384 Medium.png",
    "badge": "Premium Pack"
  }
]

// Product Categories - Customize product offerings here
export const products: Product[] = [
  {
    "name": "Butterscotch Family Pack",
    "flavour": "Butterscotch",
    "category": "Family Packs",
    "size": "Family Pack",
    "description": "Rich butterscotch ice cream packed with crunchy praline pieces. Perfect for sharing with the family.",
    "image": "/ice-cream images/DSC08377 Medium.png",
    "badge": "Buy 1 Get 1"
  },
  {
    "name": "Butterscotch Mega Cone",
    "flavour": "Butterscotch",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Crispy waffle cone filled with creamy butterscotch ice cream and topped with crunchy nuts.",
    "image": "/ice-cream images/DSC08401 Medium.png",
    "badge": "Popular"
  },
  {
    "name": "Butterscotch Mega Cone (Handheld)",
    "flavour": "Butterscotch",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Enjoy the classic taste of butterscotch in our crispy, crunchy mega cone.",
    "image": "/ice-cream images/DSC08406 Medium.png",
    "badge": ""
  },
  {
    "name": "Butterscotch Premium Cup",
    "flavour": "Butterscotch",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "A delightful cup of our signature butterscotch ice cream with caramel swirls.",
    "image": "/ice-cream images/DSC08441 Medium.png",
    "badge": ""
  },
  {
    "name": "Butterscotch Caramel Cup",
    "flavour": "Butterscotch",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "Decadent butterscotch ice cream topped with rich, gooey caramel syrup.",
    "image": "/ice-cream images/DSC08470 Medium.png",
    "badge": "Bestseller"
  },
  {
    "name": "American Nuts Family Pack",
    "flavour": "American Nuts",
    "category": "Family Packs",
    "size": "Family Pack",
    "description": "Rich mixed nut ice cream featuring pistachios, cashews, and almonds in a creamy base.",
    "image": "/ice-cream images/DSC08505 Medium.png",
    "badge": "Buy 1 Get 1"
  },
  {
    "name": "American Nuts Tub",
    "flavour": "American Nuts",
    "category": "Tubs",
    "size": "Tub",
    "description": "A delightful tub of our exotic American Nuts ice cream. Loaded with roasted nuts.",
    "image": "/ice-cream images/DSC08517 Medium.png",
    "badge": ""
  },
  {
    "name": "Nutty Delight Mega Cone",
    "flavour": "Nutty Delight",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Premium waffle cone packed with creamy nutty delight ice cream and chocolate sauce.",
    "image": "/ice-cream images/DSC08562 Medium.png",
    "badge": "Premium"
  },
  {
    "name": "Nutty Delight Mega Cone Multi-Pack",
    "flavour": "Nutty Delight",
    "category": "Party Packs",
    "size": "Multipack",
    "description": "A multipack of our popular Nutty Delight cones. Perfect for sharing with friends.",
    "image": "/ice-cream images/DSC08591 Medium.png",
    "badge": "Party Pack"
  },
  {
    "name": "Kaju Kishmish Family Pack",
    "flavour": "Kaju Kishmish",
    "category": "Family Packs",
    "size": "Family Pack",
    "description": "Classic Indian flavour pairing roasted cashews with sweet raisins in a rich creamy base.",
    "image": "/ice-cream images/DSC08597 Medium.png",
    "badge": "Buy 1 Get 1"
  },
  {
    "name": "Kaju Kishmish Premium Sundae",
    "flavour": "Kaju Kishmish",
    "category": "Premium Flavours",
    "size": "Sundae Bowl",
    "description": "Rich cashews and sweet raisins ice cream served in a crispy, sweet waffle bowl.",
    "image": "/ice-cream images/DSC08675 Medium.png",
    "badge": "Premium"
  },
  {
    "name": "Real Mango Family Pack",
    "flavour": "Mango",
    "category": "Family Packs",
    "size": "Family Pack",
    "description": "Made with real mango pulp, bringing you the authentic taste of summer in every scoop.",
    "image": "/ice-cream images/DSC08696 Medium.png",
    "badge": "Buy 1 Get 1"
  },
  {
    "name": "Real Mango Bars",
    "flavour": "Mango",
    "category": "Bars",
    "size": "Multipack Bars",
    "description": "Refreshing and fruity real mango ice pops. A perfect treat for a hot summer day.",
    "image": "/ice-cream images/DSC08720 Medium.png",
    "badge": "Real Fruit"
  },
  {
    "name": "Rajbhog Family Pack",
    "flavour": "Rajbhog",
    "category": "Premium Flavours",
    "size": "Family Pack",
    "description": "A royal Indian treat infused with saffron, cardamom, and an abundance of rich nuts.",
    "image": "/ice-cream images/DSC08771 Medium.png",
    "badge": "Buy 1 Get 1"
  },
  {
    "name": "Rajbhog Premium Cup",
    "flavour": "Rajbhog",
    "category": "Cups",
    "size": "Regular Cup",
    "description": "Experience the royal taste of saffron and nuts in a convenient individual cup.",
    "image": "/ice-cream images/DSC08795 Medium.png",
    "badge": "Bestseller"
  },
  {
    "name": "Red Velvet Mega Cone",
    "flavour": "Red Velvet",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Luxurious red velvet ice cream wrapped in a crispy cone, topped with cake crumbs.",
    "image": "/ice-cream images/DSC08822 Medium.png",
    "badge": "Premium"
  },
  {
    "name": "Red Velvet Mega Cone Multi-Pack",
    "flavour": "Red Velvet",
    "category": "Party Packs",
    "size": "Multipack",
    "description": "Share the love with this party pack of our decadent Red Velvet mega cones.",
    "image": "/ice-cream images/DSC08836 Medium.png",
    "badge": "Party Pack"
  },
  {
    "name": "Trend Cookies Mega Cone",
    "flavour": "Cookies & Cream",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "The classic cookies and cream flavour elevated in our signature crispy mega cone.",
    "image": "/ice-cream images/DSC08860 Medium.png",
    "badge": "New"
  },
  {
    "name": "Chilly Guava Bars",
    "flavour": "Guava",
    "category": "Bars",
    "size": "Multipack Bars",
    "description": "Sweet guava ice pops with a spicy chilli kick. A true Indian street food classic frozen on a stick.",
    "image": "/ice-cream images/DSC08895 Medium.png",
    "badge": "Spicy & Sweet"
  },
  {
    "name": "Chocolate Mega Cone",
    "flavour": "Chocolate",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Rich, creamy chocolate ice cream in a crunchy waffle cone, topped with chocolate chips.",
    "image": "/ice-cream images/DSC08959 Medium.png",
    "badge": "Classic"
  },
  {
    "name": "Belgium Dark Chocolate Mega Cone",
    "flavour": "Dark Chocolate",
    "category": "Cones",
    "size": "Mega Cone",
    "description": "Intense Belgium dark chocolate ice cream inside a dark chocolate cone.",
    "image": "/ice-cream images/DSC09000 Medium.png",
    "badge": "Premium"
  },
  {
    "name": "Double Chocolate Bar",
    "flavour": "Double Chocolate",
    "category": "Bars",
    "size": "Single Bar",
    "description": "Rich chocolate ice cream coated in a thick, crunchy layer of milk chocolate and crispies.",
    "image": "/ice-cream images/DSC09037 Medium.png",
    "badge": "Bestseller"
  },
  {
    "name": "Nutty Delight Bar",
    "flavour": "Nutty Delight",
    "category": "Bars",
    "size": "Single Bar",
    "description": "Creamy ice cream dipped in chocolate and generously covered in roasted nuts.",
    "image": "/ice-cream images/DSC09062 Medium.png",
    "badge": ""
  },
  {
    "name": "Fruit Ninja Sundae Cup",
    "flavour": "Mixed Fruit",
    "category": "Sundaes",
    "size": "Sundae Cup",
    "description": "A vibrant mix of fruit flavours swirled together in a fun and fruity sundae cup.",
    "image": "/ice-cream images/DSC09106 Medium.png",
    "badge": "Kids Favourite"
  },
  {
    "name": "Black Forest Ice Cream Pastry",
    "flavour": "Black Forest",
    "category": "Premium Flavours",
    "size": "Pastry Pack",
    "description": "Indulgent layers of chocolate cake, cherry preserve, and vanilla ice cream in a pastry form.",
    "image": "/ice-cream images/DSC09134 Medium.png",
    "badge": "New"
  },
  {
    "name": "Pista Mega Cone Multi-Pack",
    "flavour": "Pistachio",
    "category": "Party Packs",
    "size": "Multipack",
    "description": "Rich pistachio ice cream with real nut pieces inside our classic crispy waffle cone.",
    "image": "/ice-cream images/DSC09165 Medium.png",
    "badge": "Party Pack"
  },
  {
    "name": "Shahi Pista Kulfi",
    "flavour": "Pistachio Kulfi",
    "category": "Kulfi Range",
    "size": "Stick",
    "description": "Traditional rich and dense royal pistachio kulfi on a stick, infused with saffron.",
    "image": "/ice-cream images/DSC09174 Medium.png",
    "badge": "Authentic"
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
