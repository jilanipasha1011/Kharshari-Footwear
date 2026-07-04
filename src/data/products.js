export const PRODUCTS = [
  // Men's Shoes
  {
    id: 1, brand: 'Puma', name: 'Puma Velocity Nitro Runner', category: 'mens',
    price: 3499, mrp: 4999, discount: 30, image: '/assets/images/mens_shoes.png',
    sizes: [6,7,8,9,10,11], colors: ['Black','White','Red'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 12
  },
  {
    id: 2, brand: 'Nike', name: 'Nike Air Max Structure', category: 'mens',
    price: 4299, mrp: 5999, discount: 28, image: '/assets/images/mens_shoes.png',
    sizes: [7,8,9,10,11], colors: ['Blue','Black','White'],
    labels: ['new'], stock: 'In Stock', stockCount: 8
  },
  {
    id: 3, brand: 'Red Tape', name: 'Red Tape Premium Oxford', category: 'mens',
    price: 2199, mrp: 2999, discount: 27, image: '/assets/images/formal_shoes.png',
    sizes: [6,7,8,9,10], colors: ['Black','Brown','Tan'],
    labels: ['trending'], stock: 'In Stock', stockCount: 15
  },
  {
    id: 4, brand: 'One8', name: 'One8 Casual Sport Sneaker', category: 'mens',
    price: 2799, mrp: 3499, discount: 20, image: '/assets/images/mens_shoes.png',
    sizes: [7,8,9,10,11], colors: ['White','Navy','Grey'],
    labels: ['new', 'trending'], stock: 'Low Stock', stockCount: 3
  },
  {
    id: 5, brand: 'Hummer', name: 'Hummer Trail Boot', category: 'mens',
    price: 3999, mrp: 5499, discount: 27, image: '/assets/images/formal_shoes.png',
    sizes: [7,8,9,10,11], colors: ['Brown','Black'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 10
  },
  // Women's Shoes
  {
    id: 6, brand: 'Puma', name: 'Puma Cali Star Sandal', category: 'womens',
    price: 1999, mrp: 2799, discount: 29, image: '/assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8], colors: ['Rose Gold','White','Black'],
    labels: ['new', 'festival'], stock: 'In Stock', stockCount: 20
  },
  {
    id: 7, brand: 'Nike', name: 'Nike Benassi Just Do It Slipper', category: 'womens',
    price: 1299, mrp: 1799, discount: 28, image: '/assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8,9], colors: ['Pink','Black','White'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 25
  },
  {
    id: 8, brand: 'Red Tape', name: 'Red Tape Wedge Heel Sandal', category: 'womens',
    price: 1799, mrp: 2499, discount: 28, image: '/assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8], colors: ['Nude','Gold','Silver'],
    labels: ['trending', 'festival'], stock: 'Low Stock', stockCount: 4
  },
  {
    id: 9, brand: 'One8', name: 'One8 Comfort Flat Slipper', category: 'womens',
    price: 899, mrp: 1299, discount: 31, image: '/assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8,9], colors: ['Peach','Blue','Green'],
    labels: ['discount'], stock: 'In Stock', stockCount: 30
  },
  // Kids
  {
    id: 10, brand: 'Puma', name: 'Puma Fun Racer Kids Sneaker', category: 'kids',
    price: 1499, mrp: 1999, discount: 25, image: '/assets/images/kids_shoes.png',
    sizes: [1,2,3,4,5,6], colors: ['Red','Blue','Yellow'],
    labels: ['new', 'bestseller'], stock: 'In Stock', stockCount: 18
  },
  {
    id: 11, brand: 'Nike', name: 'Nike Revolution 6 Kids', category: 'kids',
    price: 1799, mrp: 2499, discount: 28, image: '/assets/images/kids_shoes.png',
    sizes: [2,3,4,5,6], colors: ['Green','Pink','Black'],
    labels: ['trending'], stock: 'In Stock', stockCount: 14
  },
  {
    id: 12, brand: 'Hummer', name: 'Hummer School Comfort Shoe', category: 'kids',
    price: 799, mrp: 1199, discount: 33, image: '/assets/images/kids_shoes.png',
    sizes: [1,2,3,4,5,6,7], colors: ['Black','Brown'],
    labels: ['discount'], stock: 'In Stock', stockCount: 22
  },
  // Sports
  {
    id: 13, brand: 'Puma', name: 'Puma Resolve Street Runner', category: 'sports',
    price: 3799, mrp: 4999, discount: 24, image: '/assets/images/sports_shoes.png',
    sizes: [6,7,8,9,10,11], colors: ['Black','Red','Blue'],
    labels: ['new', 'trending'], stock: 'In Stock', stockCount: 9
  },
  {
    id: 14, brand: 'Nike', name: 'Nike Flex Runner Training', category: 'sports',
    price: 4499, mrp: 5999, discount: 25, image: '/assets/images/sports_shoes.png',
    sizes: [7,8,9,10,11], colors: ['White','Black','Neon Yellow'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 6
  },
  {
    id: 15, brand: 'One8', name: 'One8 Pro Running Light', category: 'sports',
    price: 2599, mrp: 3299, discount: 21, image: '/assets/images/sports_shoes.png',
    sizes: [6,7,8,9,10], colors: ['Orange','Grey','Blue'],
    labels: ['new'], stock: 'Low Stock', stockCount: 2
  },
  // Formal & Casual
  {
    id: 16, brand: 'Red Tape', name: 'Red Tape Classic Derby', category: 'formal',
    price: 2499, mrp: 3499, discount: 29, image: '/assets/images/formal_shoes.png',
    sizes: [6,7,8,9,10,11], colors: ['Black','Brown'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 16
  },
  {
    id: 17, brand: 'Hummer', name: 'Hummer Premium Loafer', category: 'formal',
    price: 1999, mrp: 2799, discount: 29, image: '/assets/images/formal_shoes.png',
    sizes: [6,7,8,9,10], colors: ['Black','Navy','Brown'],
    labels: ['trending'], stock: 'In Stock', stockCount: 11
  },
  {
    id: 18, brand: 'One8', name: 'One8 Casual Slip-On', category: 'formal',
    price: 1799, mrp: 2299, discount: 22, image: '/assets/images/mens_shoes.png',
    sizes: [7,8,9,10,11], colors: ['Olive','Grey','Black'],
    labels: ['new', 'discount'], stock: 'In Stock', stockCount: 13
  },
];

export const LABELS = {
  new:        { text: '🆕 New Arrival',    class: 'badge-new' },
  bestseller: { text: '⭐ Best Seller',    class: 'badge-bestseller' },
  trending:   { text: '🔥 Trending',       class: 'badge-trending' },
  discount:   { text: '💰 Flat Discount',  class: 'badge-discount' },
  limited:    { text: '⚡ Limited Stock',  class: 'badge-limited' },
  festival:   { text: '🎉 Festival Offer', class: 'badge-festival' },
};
