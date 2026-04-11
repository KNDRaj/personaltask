export const categories = [
  {
    id: 'corporate',
    name: 'Corporate Gifts',
    icon: '🏢',
    subCategories: [
      {
        id: 'desk-accessories',
        name: 'Desk Accessories',
        categoryId: 'corporate',
      },
      {
        id: 'branded-apparel',
        name: 'Branded Apparel',
        categoryId: 'corporate',
      },
      {
        id: 'tech-gadgets',
        name: 'Tech & Gadgets',
        categoryId: 'corporate',
      },
      {
        id: 'executive-gifts',
        name: 'Executive Gifts',
        categoryId: 'corporate',
      },
    ],
  },
  {
    id: 'personal',
    name: 'Personal Gifts',
    icon: '🎁',
    subCategories: [
      {
        id: 'birthday',
        name: 'Birthday',
        categoryId: 'personal',
      },
      {
        id: 'anniversary',
        name: 'Anniversary',
        categoryId: 'personal',
      },
      {
        id: 'wedding',
        name: 'Wedding',
        categoryId: 'personal',
      },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal & Festive',
    icon: '🎄',
    subCategories: [
      {
        id: 'christmas',
        name: 'Christmas',
        categoryId: 'seasonal',
      },
      {
        id: 'eid',
        name: 'Eid',
        categoryId: 'seasonal',
      },
      {
        id: 'diwali',
        name: 'Diwali',
        categoryId: 'seasonal',
      },
      {
        id: 'new-year',
        name: "New Year",
        categoryId: 'seasonal',
      },
    ],
  },
  {
    id: 'promotional',
    name: 'Promotional Items',
    icon: '📣',
    subCategories: [
      {
        id: 'bags-totes',
        name: 'Bags & Totes',
        categoryId: 'promotional',
      },
      {
        id: 'drinkware',
        name: 'Drinkware',
        categoryId: 'promotional',
      },
      {
        id: 'stationery',
        name: 'Stationery',
        categoryId: 'promotional',
      },
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury Collection',
    icon: '✨',
    subCategories: [
      {
        id: 'premium-sets',
        name: 'Premium Gift Sets',
        categoryId: 'luxury',
      },
      {
        id: 'leather-goods',
        name: 'Leather Goods',
        categoryId: 'luxury',
      },
      {
        id: 'crystal-glass',
        name: 'Crystal & Glass',
        categoryId: 'luxury',
      },
    ],
  },
];

export const products = [
  // Corporate > Desk Accessories
  {
    id: 'p001',
    name: 'Executive Pen Set',
    subCategoryId: 'desk-accessories',
    categoryId: 'corporate',
    price: 45.00,
    quantity: 150,
    description: 'A premium executive pen set featuring a ballpoint and rollerball pen in a sleek gift box. Made with brushed metal finish and custom engraving available. Perfect for corporate gifting and milestone recognitions.',
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&q=80',
      'https://images.unsplash.com/photo-1619683034960-bc7a0ae78c94?w=600&q=80',
      'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&q=80',
    ],
    tags: ['pen', 'writing', 'executive'],
    sku: 'CORP-DA-001',
  },
  {
    id: 'p002',
    name: 'Bamboo Desk Organizer',
    subCategoryId: 'desk-accessories',
    categoryId: 'corporate',
    price: 32.50,
    quantity: 80,
    description: 'Eco-friendly bamboo desk organizer with 5 compartments. Holds pens, sticky notes, phone, and other desk essentials. Laser engraving of company logo available. Natural finish with smooth edges.',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    ],
    tags: ['desk', 'organizer', 'eco', 'bamboo'],
    sku: 'CORP-DA-002',
  },
  {
    id: 'p003',
    name: 'Leather Mouse Pad with Wireless Charger',
    subCategoryId: 'desk-accessories',
    categoryId: 'corporate',
    price: 68.00,
    quantity: 60,
    description: 'Premium genuine leather mouse pad with built-in 10W wireless charging pad. Features non-slip base, Qi-compatible charging, and debossed logo option. Available in black, brown, and tan.',
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80',
      'https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=600&q=80',
    ],
    tags: ['leather', 'wireless charger', 'mouse pad', 'tech'],
    sku: 'CORP-DA-003',
  },
  // Corporate > Branded Apparel
  {
    id: 'p004',
    name: 'Premium Cotton Polo Shirt',
    subCategoryId: 'branded-apparel',
    categoryId: 'corporate',
    price: 28.00,
    quantity: 200,
    description: '100% premium pima cotton polo shirt with moisture-wicking properties. Available in S-3XL. Custom embroidery up to 8,000 stitches included. 12 color options. Perfect for staff uniforms and corporate events.',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
      'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80',
    ],
    tags: ['apparel', 'polo', 'uniform', 'embroidery'],
    sku: 'CORP-APP-001',
  },
  {
    id: 'p005',
    name: 'Softshell Jacket',
    subCategoryId: 'branded-apparel',
    categoryId: 'corporate',
    price: 65.00,
    quantity: 120,
    description: 'Water-resistant softshell jacket with fleece inner lining. YKK zippers, two front pockets, and one inner zip pocket. Custom logo embroidery on chest. Available in navy, black, grey, and red.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    ],
    tags: ['jacket', 'apparel', 'outdoor', 'branded'],
    sku: 'CORP-APP-002',
  },
  // Corporate > Tech & Gadgets
  {
    id: 'p006',
    name: 'Wireless Earbuds in Custom Case',
    subCategoryId: 'tech-gadgets',
    categoryId: 'corporate',
    price: 55.00,
    quantity: 90,
    description: 'True wireless earbuds with 6-hour playback per charge, 24-hour total with charging case. Custom printed case with company branding. Bluetooth 5.1, touch controls, and IPX4 water resistance.',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    ],
    tags: ['earbuds', 'wireless', 'tech', 'audio'],
    sku: 'CORP-TG-001',
  },
  {
    id: 'p007',
    name: '20000mAh Power Bank',
    subCategoryId: 'tech-gadgets',
    categoryId: 'corporate',
    price: 38.00,
    quantity: 180,
    description: '20,000mAh slim power bank with dual USB-A and one USB-C port. PD 22.5W fast charging. Custom printed with company logo. Airline safe. LED charge indicator. Available in 5 colors.',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80',
      'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?w=600&q=80',
    ],
    tags: ['power bank', 'charging', 'tech', 'travel'],
    sku: 'CORP-TG-002',
  },
  // Corporate > Executive Gifts
  {
    id: 'p008',
    name: 'Crystal Trophy Plaque',
    subCategoryId: 'executive-gifts',
    categoryId: 'corporate',
    price: 95.00,
    quantity: 40,
    description: 'Optically clear crystal award plaque with beveled edges. Deep sandblast engraving or full-color UV printing. Mounted on a wooden base. Available in 3 sizes. Presentation gift box included.',
    images: [
      'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=600&q=80',
      'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=600&q=80',
    ],
    tags: ['trophy', 'award', 'crystal', 'recognition'],
    sku: 'CORP-EX-001',
  },
  {
    id: 'p009',
    name: 'Luxury Leather Portfolio',
    subCategoryId: 'executive-gifts',
    categoryId: 'corporate',
    price: 78.00,
    quantity: 55,
    description: 'Full-grain leather portfolio with A4 notepad, business card holder, USB pocket, and pen loop. Holds iPad up to 11". Gold-tone hardware. Embossed branding option. Available in black and cognac.',
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
      'https://images.unsplash.com/photo-1613723467219-9b69fb7c26f5?w=600&q=80',
    ],
    tags: ['leather', 'portfolio', 'executive', 'organizer'],
    sku: 'CORP-EX-002',
  },
  // Personal > Birthday
  {
    id: 'p010',
    name: 'Personalized Birthday Gift Hamper',
    subCategoryId: 'birthday',
    categoryId: 'personal',
    price: 85.00,
    quantity: 35,
    description: 'Curated birthday hamper with artisan chocolates, scented candle, mini skincare set, and a personalised birthday card in a premium gift box with ribbon. Choose from 3 box sizes and customize message.',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    tags: ['birthday', 'hamper', 'personal', 'chocolate'],
    sku: 'PERS-BD-001',
  },
  {
    id: 'p011',
    name: 'Custom Star Map Print',
    subCategoryId: 'birthday',
    categoryId: 'personal',
    price: 42.00,
    quantity: 100,
    description: 'Personalized star map showing the exact night sky on a special date and location. Print on museum-quality matte paper, A3 size. Includes custom title and message. Ships in protective tube.',
    images: [
      'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    ],
    tags: ['star map', 'personalized', 'art', 'print'],
    sku: 'PERS-BD-002',
  },
  // Personal > Anniversary
  {
    id: 'p012',
    name: 'Couple Photo Book',
    subCategoryId: 'anniversary',
    categoryId: 'personal',
    price: 58.00,
    quantity: 50,
    description: 'Premium hardcover photo book, 40 pages. Upload up to 80 photos with custom captions and layout. Printed on gloss paper. Lay-flat binding. Various cover materials. Ships in 5-7 business days.',
    images: [
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    ],
    tags: ['photo book', 'anniversary', 'personalized', 'memories'],
    sku: 'PERS-ANN-001',
  },
  // Seasonal > Christmas
  {
    id: 'p013',
    name: 'Christmas Gift Box Set',
    subCategoryId: 'christmas',
    categoryId: 'seasonal',
    price: 72.00,
    quantity: 65,
    description: 'Festive Christmas gift box containing: premium hot chocolate mix, assorted shortbread cookies, scented Christmas candle, and ornament. Wrapped in a red and gold gift box with satin ribbon.',
    images: [
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80',
      'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&q=80',
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&q=80',
    ],
    tags: ['christmas', 'gift box', 'festive', 'seasonal'],
    sku: 'SEAS-XMAS-001',
  },
  {
    id: 'p014',
    name: 'Santa Personalised Mug Set',
    subCategoryId: 'christmas',
    categoryId: 'seasonal',
    price: 24.00,
    quantity: 200,
    description: 'Set of 2 ceramic mugs with custom name print. 330ml capacity. Dishwasher safe. Festive holiday design with space for personalised name. Gift box included. Great for Secret Santa.',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80',
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
    ],
    tags: ['mug', 'christmas', 'personalised', 'ceramic'],
    sku: 'SEAS-XMAS-002',
  },
  // Promotional > Drinkware
  {
    id: 'p015',
    name: 'Insulated Stainless Steel Tumbler',
    subCategoryId: 'drinkware',
    categoryId: 'promotional',
    price: 22.00,
    quantity: 300,
    description: '20oz double-wall vacuum insulated tumbler. Keeps drinks hot 12hrs, cold 24hrs. Spill-proof sliding lid. BPA-free. 360° laser engraving or full-wrap printing. 10 color options. Min order 50 pcs.',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80',
    ],
    tags: ['tumbler', 'drinkware', 'insulated', 'promotional'],
    sku: 'PROMO-DW-001',
  },
  {
    id: 'p016',
    name: 'Branded Canvas Tote Bag',
    subCategoryId: 'bags-totes',
    categoryId: 'promotional',
    price: 12.00,
    quantity: 500,
    description: '100% natural cotton canvas tote bag. 38x42cm. 140gsm. Long handles. Screen print or full-color transfer. Up to 4 color print. Available in natural, black, and navy. Min order 100 pcs.',
    images: [
      'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=600&q=80',
      'https://images.unsplash.com/photo-1544816565-aa8c1166648f?w=600&q=80',
    ],
    tags: ['tote', 'bag', 'canvas', 'eco', 'promotional'],
    sku: 'PROMO-BT-001',
  },
  // Luxury > Premium Gift Sets
  {
    id: 'p017',
    name: 'Luxury Spa Gift Set',
    subCategoryId: 'premium-sets',
    categoryId: 'luxury',
    price: 135.00,
    quantity: 25,
    description: 'Premium spa experience gift set with organic body scrub, moisturising body butter, bath salts, aromatherapy candle, and bamboo spa headband. Presented in a keepsake wooden box with magnetic closure.',
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      'https://images.unsplash.com/photo-1607006483224-bdf2ebec87a3?w=600&q=80',
      'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=600&q=80',
    ],
    tags: ['spa', 'luxury', 'wellness', 'premium'],
    sku: 'LUX-PS-001',
  },
  {
    id: 'p018',
    name: 'Premium Whiskey Decanter Set',
    subCategoryId: 'crystal-glass',
    categoryId: 'luxury',
    price: 120.00,
    quantity: 30,
    description: 'Hand-blown lead-free crystal whiskey decanter (750ml) with 4 matching rocks glasses. Deep cut diamond pattern. Custom engraving on decanter. Presented in a wooden crate with straw packing.',
    images: [
      'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&q=80',
      'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
    ],
    tags: ['whiskey', 'decanter', 'crystal', 'luxury'],
    sku: 'LUX-CG-001',
  },
  {
    id: 'p019',
    name: 'Genuine Leather Wallet',
    subCategoryId: 'leather-goods',
    categoryId: 'luxury',
    price: 58.00,
    quantity: 75,
    description: 'Full-grain leather bifold wallet with RFID blocking technology. 6 card slots, 2 note compartments, ID window. Custom monogram embossing available. Gift box with care card. Available in 4 colors.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80',
    ],
    tags: ['wallet', 'leather', 'rfid', 'luxury'],
    sku: 'LUX-LG-001',
  },
  // Seasonal > Eid
  {
    id: 'p020',
    name: 'Eid Celebration Gift Hamper',
    subCategoryId: 'eid',
    categoryId: 'seasonal',
    price: 90.00,
    quantity: 45,
    description: 'Elegant Eid hamper with premium dates, Arabic sweets, luxury soap, prayer beads, attar perfume, and a personalised Eid card. Presented in a gold and green gift box with ribbon and bow.',
    images: [
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    ],
    tags: ['eid', 'hamper', 'dates', 'festive', 'arabic'],
    sku: 'SEAS-EID-001',
  },
];

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

export function getSubCategoryById(id) {
  for (const cat of categories) {
    const sub = cat.subCategories.find((s) => s.id === id);
    if (sub) return sub;
  }
  return null;
}

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductsBySubCategory(subCategoryId) {
  return products.filter((p) => p.subCategoryId === subCategoryId);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}
