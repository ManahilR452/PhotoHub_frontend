// Gallery data organized by countries and categories
export const categories = [
  {
    id: 'landmarks',
    name: 'Tourist Attractions / Landmarks',
    description: 'Famous landmarks or iconic sites of each country',
    icon: '🏛️'
  },
  {
    id: 'cultural',
    name: 'Cultural & Historical Sites',
    description: 'Museums, old towns, heritage sites',
    icon: '🏺'
  },
  {
    id: 'nature',
    name: 'Nature & Scenic Spots',
    description: 'Mountains, beaches, parks, rivers, gardens',
    icon: '🏔️'
  },
  {
    id: 'modern',
    name: 'Modern / Urban Experiences',
    description: 'Cities, skylines, modern architecture, nightlife',
    icon: '🌆'
  },
  {
    id: 'food',
    name: 'Food & Markets / Street Life',
    description: 'Local culture through food, markets, and festivals',
    icon: '🍜'
  }
];

export const galleryPhotos = [
  // PAKISTAN
  {
    id: 'pak-1',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'landmarks',
    title: 'Badshahi Mosque',
    location: 'Lahore',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Badshahi_Mosque_front_picture.jpg',
    description: 'One of the largest mosques in the world'
  },
  {
    id: 'pak-2',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'landmarks',
    title: 'Faisal Mosque',
    location: 'Islamabad',
    image: 'https://media.istockphoto.com/id/1372621727/photo/faisal-mosque.jpg?s=612x612&w=0&k=20&c=IIRrKM_Drv_kmdnLtbrR3n0aq9Bj3MDMJxehe2bPTbE=',
    description: 'Modern architectural marvel'
  },
  {
    id: 'pak-3',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'cultural',
    title: 'Mohenjo-daro',
    location: 'Sindh',
    image: 'https://stdc.gos.pk/wp-content/uploads/2024/10/Mohenjo-Daro-Canvas-2-16x20-copies-scaled.jpg',
    description: 'Ancient Indus Valley civilization site'
  },
  {
    id: 'pak-4',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'cultural',
    title: 'Lahore Fort',
    location: 'Lahore',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lahore_Fort_view_from_Baradari.jpg/1200px-Lahore_Fort_view_from_Baradari.jpg',
    description: 'Mughal-era fortress'
  },
  {
    id: 'pak-5',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'nature',
    title: 'Hunza Valley',
    location: 'Gilgit-Baltistan',
    image: 'https://naturehikepakistan.pk/wp-content/uploads/2024/03/gulmit-a-min.jpeg',
    description: 'Breathtaking mountain valley'
  },
  {
    id: 'pak-6',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'nature',
    title: 'Fairy Meadows',
    location: 'Gilgit-Baltistan',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/d0/91/51/mesmerizing-view-of-fairy.jpg?w=1200&h=-1&s=1',
    description: 'Alpine meadow near Nanga Parbat'
  },
  {
    id: 'pak-7',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'modern',
    title: 'Karachi Cityscape',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1709326955894-ed49938291ed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYWNoaSUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
    description: 'Modern urban skyline'
  },
  {
    id: 'pak-8',
    country: 'Pakistan',
    countryCode: 'PK',
    category: 'food',
    title: 'Lahore Food Street',
    location: 'Lahore',
    image: 'https://visitlahore.com/wp-content/uploads/2020/06/food-street-lahore.jpg',
    description: 'Traditional Pakistani cuisine'
  },

  // CHINA
  {
    id: 'chn-1',
    country: 'China',
    countryCode: 'CN',
    category: 'landmarks',
    title: 'Great Wall of China',
    location: 'Beijing',
    image: 'https://images.unsplash.com/photo-1608037521277-154cd1b89191?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlYXQlMjB3YWxsJTIwb2YlMjBjaGluYXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Ancient wonder of the world'
  },
  {
    id: 'chn-2',
    country: 'China',
    countryCode: 'CN',
    category: 'landmarks',
    title: 'Forbidden City',
    location: 'Beijing',
    image: 'https://media.istockphoto.com/id/516680609/photo/forbidden-city.jpg?s=612x612&w=0&k=20&c=DgDYW8NBnByMNAYtck9CHKuvDhZ7rKB_WqJTeCdhDpY=',
    description: 'Imperial palace complex'
  },
  {
    id: 'chn-3',
    country: 'China',
    countryCode: 'CN',
    category: 'cultural',
    title: 'Terracotta Army',
    location: 'Xi\'an',
    image: 'https://media.odynovotours.com/article/78000/spectacular-army_75081.jpg',
    description: 'Ancient warrior sculptures'
  },
  {
    id: 'chn-4',
    country: 'China',
    countryCode: 'CN',
    category: 'cultural',
    title: 'Summer Palace',
    location: 'Beijing',
    image: 'https://www.chinaxiantour.com/media/2024/11/Beijing-Summer-Palace-in-summer.webp',
    description: 'Imperial garden and palace'
  },
  {
    id: 'chn-5',
    country: 'China',
    countryCode: 'CN',
    category: 'nature',
    title: 'Zhangjiajie',
    location: 'Hunan',
    image: 'https://media.odynovotours.com/article/78000/national-forest-park_76217.jpg',
    description: 'Towering sandstone pillars'
  },
  {
    id: 'chn-6',
    country: 'China',
    countryCode: 'CN',
    category: 'nature',
    title: 'Li River',
    location: 'Guilin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/87318-Li-River.jpg',
    description: 'Karst mountains and river'
  },
  {
    id: 'chn-7',
    country: 'China',
    countryCode: 'CN',
    category: 'modern',
    title: 'Shanghai Skyline',
    location: 'Shanghai',
    image: 'https://www.rolcruise.co.uk/media/responsive/gallery-1280/upload/pagebuilder/rol-cruise-blog-a-guide-to-shanghais-skyline-shanghai-tower-672251be7e9b1.jpeg',
    description: 'Futuristic cityscape'
  },
  {
    id: 'chn-8',
    country: 'China',
    countryCode: 'CN',
    category: 'food',
    title: 'Beijing Street Food',
    location: 'Beijing',
    image: 'https://www.albomadventures.com/wp-content/uploads/2012/04/Beijing-street-food-36128-2.jpg',
    description: 'Traditional Chinese street food'
  },

  // TURKEY
  {
    id: 'tur-1',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'landmarks',
    title: 'Hagia Sophia',
    location: 'Istanbul',
    image: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_139196242.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop',
    description: 'Historic Byzantine cathedral'
  },
  {
    id: 'tur-2',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'landmarks',
    title: 'Blue Mosque',
    location: 'Istanbul',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1IMglrOgZW1InNoEo_zZEF8vXx5hr0vWhA&s',
    description: 'Ottoman imperial mosque'
  },
  {
    id: 'tur-3',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'cultural',
    title: 'Topkapi Palace',
    location: 'Istanbul',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/19/66158.jpg',
    description: 'Ottoman sultans\' palace'
  },
  {
    id: 'tur-4',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'cultural',
    title: 'Cappadocia Cave Towns',
    location: 'Cappadocia',
    image: 'https://images.squarespace-cdn.com/content/v1/57b9b98a29687f1ef5c622df/1478512054866-Q8DVBYVAYFHX64M143UJ/The+town+of+Goreme',
    description: 'Ancient rock-cut architecture'
  },
  {
    id: 'tur-5',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'nature',
    title: 'Pamukkale',
    location: 'Denizli',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/08/34440.jpg',
    description: 'Natural thermal pools'
  },
  {
    id: 'tur-6',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'nature',
    title: 'Cappadocia Landscape',
    location: 'Cappadocia',
    image: 'https://assets-guidebook.isango.com/wp-content/uploads/2022/02/Cappadocia-featured.1.jpg',
    description: 'Fairy chimneys and hot air balloons'
  },
  {
    id: 'tur-7',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'modern',
    title: 'Bosphorus Bridge',
    location: 'Istanbul',
    image: 'https://bridgewiz.com/wp-content/uploads/2020/09/78c897de38ce71d01d2fbb32fc38f51e.jpg',
    description: 'Modern Istanbul cityscape'
  },
  {
    id: 'tur-8',
    country: 'Turkey',
    countryCode: 'TR',
    category: 'food',
    title: 'Grand Bazaar',
    location: 'Istanbul',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/08/11/135601.jpg',
    description: 'Historic covered market'
  },

  // JAPAN
  {
    id: 'jpn-1',
    country: 'Japan',
    countryCode: 'JP',
    category: 'landmarks',
    title: 'Mount Fuji',
    location: 'Honshu',
    image: 'https://www.wamazing.com/media/wp-content/uploads/sites/7/2023/06/fujisantrivia_pixta_77370238_L.jpg.webp',
    description: 'Iconic volcanic mountain'
  },
  {
    id: 'jpn-2',
    country: 'Japan',
    countryCode: 'JP',
    category: 'landmarks',
    title: 'Tokyo Tower',
    location: 'Tokyo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Tokyo_Tower_2023.jpg',
    description: 'Iconic communications tower'
  },
  {
    id: 'jpn-3',
    country: 'Japan',
    countryCode: 'JP',
    category: 'cultural',
    title: 'Kyoto Temples',
    location: 'Kyoto',
    image: 'https://www.wamazing.com/media/wp-content/uploads/sites/7/2019/11/pixta_50951500_M.jpg.webp',
    description: 'Ancient Buddhist temples'
  },
  {
    id: 'jpn-4',
    country: 'Japan',
    countryCode: 'JP',
    category: 'cultural',
    title: 'Himeji Castle',
    location: 'Himeji',
    image: 'https://www.japan-guide.com/g21/3501_11.jpg',
    description: 'Feudal Japanese castle'
  },
  {
    id: 'jpn-5',
    country: 'Japan',
    countryCode: 'JP',
    category: 'nature',
    title: 'Arashiyama Bamboo Forest',
    location: 'Kyoto',
    image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-06/arashiyama-bamboo-forest_3.jpg?itok=822ih-Jp',
    description: 'Serene bamboo grove'
  },
  {
    id: 'jpn-6',
    country: 'Japan',
    countryCode: 'JP',
    category: 'nature',
    title: 'Mount Fuji Region',
    location: 'Honshu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztGdr6AhrILRcF6fpbacOha6uEk2heaMIJQ&s',
    description: 'Cherry blossoms and Mt. Fuji'
  },
  {
    id: 'jpn-7',
    country: 'Japan',
    countryCode: 'JP',
    category: 'modern',
    title: 'Tokyo Skyscrapers',
    location: 'Tokyo',
    image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isKNGHIx.S_s/v0/-1x-1.webp',
    description: 'Modern Tokyo cityscape'
  },
  {
    id: 'jpn-8',
    country: 'Japan',
    countryCode: 'JP',
    category: 'food',
    title: 'Tsukiji Fish Market',
    location: 'Tokyo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/2018_Tsukiji_fish_market.jpg',
    description: 'Fresh seafood market'
  },

  // FRANCE
  {
    id: 'fra-1',
    country: 'France',
    countryCode: 'FR',
    category: 'landmarks',
    title: 'Eiffel Tower',
    location: 'Paris',
    image: 'https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg',
    description: 'Iconic iron lattice tower'
  },
  {
    id: 'fra-2',
    country: 'France',
    countryCode: 'FR',
    category: 'landmarks',
    title: 'Mont Saint-Michel',
    location: 'Normandy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Mont-Saint-Michel_vu_du_ciel.jpg',
    description: 'Medieval island abbey'
  },
  {
    id: 'fra-3',
    country: 'France',
    countryCode: 'FR',
    category: 'cultural',
    title: 'Louvre Museum',
    location: 'Paris',
    image: 'https://t4.ftcdn.net/jpg/03/02/03/03/360_F_302030306_VLGXUtPa0QId7O6Zqz9AF6RSql6uIdVd.jpg',
    description: 'World\'s largest art museum'
  },
  {
    id: 'fra-4',
    country: 'France',
    countryCode: 'FR',
    category: 'cultural',
    title: 'Versailles',
    location: 'Versailles',
    image: 'https://cdn-imgix.headout.com/media/images/00a87210d0b9efdc10c1230b916c105f-269-paris-paris--palace-of-versailles-01.jpg?auto=format&q=90&crop=faces&fit=crop',
    description: 'Royal palace and gardens'
  },
  {
    id: 'fra-5',
    country: 'France',
    countryCode: 'FR',
    category: 'nature',
    title: 'French Riviera',
    location: 'Côte d\'Azur',
    image: 'https://hips.hearstapps.com/hmg-prod/images/villefranche-sur-mer-on-the-french-riviera-royalty-free-image-1713237547.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=1200:*',
    description: 'Mediterranean coastline'
  },
  {
    id: 'fra-6',
    country: 'France',
    countryCode: 'FR',
    category: 'nature',
    title: 'Loire Valley',
    location: 'Loire',
    image: 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/034/535/original/ea8069c3053e8206b5a2a82239463cd4/article-france-loire-chenonceau-chateau.jpg',
    description: 'Châteaux and vineyards'
  },
  {
    id: 'fra-7',
    country: 'France',
    countryCode: 'FR',
    category: 'modern',
    title: 'La Défense',
    location: 'Paris',
    image: 'https://media.istockphoto.com/id/1306624327/photo/modern-architecture-in-paris.jpg?s=612x612&w=0&k=20&c=Caq5zTaumm2IYSVnTk2GeZeZE_446JmCJgvVfus3LeM=',
    description: 'Modern business district'
  },
  {
    id: 'fra-8',
    country: 'France',
    countryCode: 'FR',
    category: 'food',
    title: 'Paris Cafés',
    location: 'Paris',
    image: 'https://cdn.sortiraparis.com/images/80/96972/720285-les-cafes-fleuris-de-paris.jpg',
    description: 'Traditional French café culture'
  }
];

// Helper function to get photos by country
export const getPhotosByCountry = (country) => {
  return galleryPhotos.filter(photo => photo.country === country);
};

// Helper function to get photos by category
export const getPhotosByCategory = (category) => {
  return galleryPhotos.filter(photo => photo.category === category);
};

// Helper function to get photos by country and category
export const getPhotosByCountryAndCategory = (country, category) => {
  return galleryPhotos.filter(
    photo => photo.country === country && photo.category === category
  );
};

// Get list of unique countries
export const getCountries = () => {
  const countries = [...new Set(galleryPhotos.map(photo => photo.country))];
  return countries.sort();
};

export default galleryPhotos;