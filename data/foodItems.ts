export interface FoodItem {
  id: string;
  name: string;
  restaurant: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  isPopular?: boolean;
}

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Chicken Biryani',
    restaurant: 'Biryani House',
    description: 'Aromatic basmati rice with tender chicken pieces',
    price: 450,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
    category: 'Food',
    isPopular: true
  },
  {
    id: '2',
    name: 'Chicken Karahi',
    restaurant: 'Karahi Corner',
    description: 'Traditional karahi with fresh tomatoes and green chilies',
    price: 850,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category: 'Food',
    isPopular: true
  },
  {
    id: '3',
    name: 'Chicken Pulao',
    restaurant: 'Desi Flavors',
    description: 'Flavorful rice cooked with chicken and aromatic spices',
    price: 380,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400',
    category: 'Food'
  },
  {
    id: '4',
    name: 'Zinger Burger',
    restaurant: 'Burger Lab',
    description: 'Crispy fried chicken with special sauce',
    price: 550,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    category: 'Food',
    isPopular: true
  },
  {
    id: '5',
    name: 'Mutton Nihari',
    restaurant: 'Nihari House',
    description: 'Slow-cooked mutton in rich spicy gravy',
    price: 650,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400',
    category: 'Food'
  },
  {
    id: '6',
    name: 'Seekh Kebab',
    restaurant: 'BBQ Tonight',
    description: 'Juicy minced meat kebabs grilled to perfection',
    price: 320,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400',
    category: 'Food'
  },
  {
    id: '7',
    name: 'Pizza Fajita',
    restaurant: 'Pizza Point',
    description: 'Loaded with chicken fajita and vegetables',
    price: 750,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    category: 'Food'
  },
  {
    id: '8',
    name: 'Haleem',
    restaurant: 'Haleem Center',
    description: 'Rich and creamy wheat and meat delicacy',
    price: 280,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    category: 'Food'
  },
  {
    id: '9',
    name: 'Dahi Bhalla',
    restaurant: 'Chaat Corner',
    description: 'Soft lentil dumplings in creamy yogurt',
    price: 180,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400',
    category: 'Food'
  },
  {
    id: '10',
    name: 'Tandoori Chicken',
    restaurant: 'Grill Masters',
    description: 'Marinated chicken roasted in clay oven',
    price: 520,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400',
    category: 'Food',
    isPopular: true
  }
];

export const categories = [
  { id: '1', name: 'Food', icon: '🍛', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
  { id: '2', name: 'Beverages', icon: '🥤', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300' },
  { id: '3', name: 'Desserts', icon: '🍰', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300' },
  { id: '4', name: 'Promotions', icon: '🎁', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300' }
];

export const offers = [
  { id: '1', title: '50% OFF on First Order', code: 'FIRST50', validTill: '31 Dec 2024', minOrder: 500 },
  { id: '2', title: 'Free Delivery', code: 'FREEDEL', validTill: '25 Dec 2024', minOrder: 800 },
  { id: '3', title: 'Buy 1 Get 1 Free', code: 'BOGO', validTill: '28 Dec 2024', minOrder: 1000 },
  { id: '4', title: '20% Cashback', code: 'CASH20', validTill: '30 Dec 2024', minOrder: 600 }
];
