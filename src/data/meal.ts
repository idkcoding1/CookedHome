export interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
    servingSize: number;
    image: string;
    category: string;
  }
  
  export const getTodaysMeals = (): Meal[] => {
    
    const today = new Date().getDay(); 
    
    switch(today) {
      case 1: 
        return mondayMeals;
      case 2: 
        return tuesdayMeals;
      case 3: 
        return wednesdayMeals;
      case 4: 
        return thursdayMeals;
      case 5: 
        return fridayMeals;
      case 6: 
        return saturdayMeals;
      default:
        return sundayMeals;
    }
  };
  

export const mondayMeals: Meal[] = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and spices",
    price: 1200,          // PKR
    servingSize: 1,
    image: "/assets/images/chicken-biryani.jpg",
    category: "Biryani"
  },
  {
    id: "m2",
    name: "Karahi Gosht",
    description: "Spicy mutton cooked in a rich tomato-onion gravy",
    price: 1400,
    servingSize: 2,
    image: "/assets/images/karahi-gosht.jpg",
    category: "Curry"
  },
  {
    id: "m3",
    name: "Daal Chawal",
    description: "Yellow lentils simmered with aromatic spices, served with rice",
    price: 400,
    servingSize: 1,
    image: "/assets/images/daal-chawal.jpg",
    category: "Vegetarian"
  },
  {
    id: "m4",
    name: "Chicken Karahi",
    description: "Chicken pieces cooked in a wok-style karahi with green chilies",
    price: 1300,
    servingSize: 4,
    image: "/assets/images/chicken-karahi.jpg",
    category: "Curry"
  }
];

export const tuesdayMeals: Meal[] = [
  {
    id: "t1",
    name: "Beef Korma",
    description: "Slow-cooked beef stew in a spicy, flavourful broth",
    price: 1500,
    servingSize: 2,
    image: "assets/images/Beef-Korma.jpeg",
    category: "Stew"
  },
  {
    id: "t2",
    name: "Kaloonji Naan",
    description: "NAAN with creamy spinach use inside",
    price: 800,
    servingSize: 1,
    image: "/assets/images/Kalonji-Naan.jpg",
    category: "Vegetarian"
  },
  {
    id: "t3",
    name: "Aloo Gosht",
    description: "Potatoes and mutton cooked together in spicy curry",
    price: 900,
    servingSize: 1,
    image: "/assets/images/aloo-keema.jpg",
    category: "Curry"
  },
  {
    id: "t4",
    name: "Chicken Soup",
    description: "Wheat and lentils cooked with shredded chicken and spices",
    price: 1100,
    servingSize: 3,
    image: "/assets/images/chicken-Soup.jpg",
    category: "Stew"
  }
];

export const wednesdayMeals: Meal[] = [
  {
    id: "w1",
    name: "Achar",
    description: "Minced spices, shallowed  in oil",
    price: 700,
    servingSize: 2,
    image: "/assets/images/Achar.jpg",
    category: "Snack"
  },
  {
    id: "w2",
    name: "Bhindi Masala",
    description: "Vegetables Bhindi finger like served with naan or rice",
    price: 600,
    servingSize: 1,
    image: "/assets/images/bhindi.jpg",
    category: "Vegetarian"
  },
  {
    id: "w3",
    name: "Shinwari Karahi",
    description: "Mutton pieces cooked in a creamy yogurt-based sauce",
    price: 1600,
    servingSize: 2,
    image: "/assets/images/Shinwari-karahi.jpg",
    category: "Curry"
  },
  {
    id: "w4",
    name: "Chapshurro",
    description: "Chicken roti traditional pathans receipe ",
    price: 2000,
    servingSize: 4,
    image: "/assets/images/chapshurro.jpg",
    category: "Biryani"
  }
];

export const thursdayMeals: Meal[] = [
  {
    id: "th1",
    name: "Chapli Kebabs",
    description: "Spiced beef patties fried with fresh herbs and tomatoes",
    price: 850,
    servingSize: 1,
    image: "/assets/images/chapli-kebab.jpg",
    category: "Snack"
  },
  {
    id: "th2",
    name: "Aloo Keema",
    description: "Minced beef and potatoes cooked in a flavorful gravy",
    price: 950,
    servingSize: 2,
    image: "/assets/images/aloo-keema.jpg",
    category: "Curry"
  },
  {
    id: "th3",
    name: "Platter chicken curry etc",
    description: "Spiced mustard greens served with cornmeal flatbread",
    price: 500,
    servingSize: 1,
    image: "/assets/images/Chicken-Boti.jpg",
    category: "Vegetarian"
  },
  {
    id: "th4",
    name: "Chapli Kebab",
    description: "Marinated chicken chunks grilled to perfection",
    price: 1200,
    servingSize: 4,
    image: "/assets/images/Chapli-kebab.jpg",
    category: "Grill"
  }
];

export const fridayMeals: Meal[] = [
  {
    id: "f1",
    name: "Fish Curry",
    description: "River fish cooked in a tangy tomato and spice gravy",
    price: 1000,
    servingSize: 1,
    image: "/assets/images/Trout.jpg",
    category: "Seafood"
  },
  {
    id: "f2",
    name: "Prawn Masala",
    description: "Spicy prawn curry with coconut and tamarind notes",
    price: 1400,
    servingSize: 1,
    image: "/assets/images/Mantu-.jpg",
    category: "Seafood"
  },
  {
    id: "f3",
    name: "Daal Makhani",
    description: "Black lentils slow-cooked in butter and cream",
    price: 700,
    servingSize: 2,
    image: "/assets/images/Daal-mash.jpg",
    category: "Vegetarian"
  },
  {
    id: "f4",
    name: "Beef Biryani",
    description: "Spiced beef layered with fragrant basmati rice",
    price: 1500,
    servingSize: 4,
    image: "/assets/images/Biryani.jpg",
    category: "Biryani"
  }
];

export const saturdayMeals: Meal[] = [
  {
    id: "s1",
    name: "Seekh Kebabs",
    description: "Spiced minced meat skewers grilled over charcoal",
    price: 900,
    servingSize: 2,
    image: "/assets/images/mutton-kebab.jpeg",
    category: "Grill"
  },
  {
    id: "s2",
    name: "Butter Chicken",
    description: "Tender chicken in a rich tomato-butter sauce",
    price: 1300,
    servingSize: 1,
    image: "/assets/images/Chicken-handi.jpg",
    category: "Curry"
  },
  {
    id: "s3",
    name: "Veg Pulao",
    description: "Aromatic rice cooked with mixed vegetables and spices",
    price: 600,
    servingSize: 1,
    image: "/assets/images/pulao.jpg",
    category: "Vegetarian"
  },
  {
    id: "s4",
    name: "Mutton Biryani",
    description: "Slow-cooked mutton layered with fragrant rice",
    price: 1600,
    servingSize: 4,
    image: "/assets/images/biryani.jpg",
    category: "Biryani"
  }
];

export const sundayMeals: Meal[] = [
  {
    id: "su1",
    name: "Nihari",
    description: "Rich beef stew, slow-cooked overnight with spices",
    price: 1500,
    servingSize: 1,
    image: "/assets/images/nihari.jpeg",
    category: "Stew"
  },
  {
    id: "su2",
    name: "Halwa Puri",
    description: "Sweet semolina dessert served with deep-fried bread",
    price: 500,
    servingSize: 2,
    image: "/assets/images/halwa-puri.jpeg",
    category: "Breakfast"
  },
  {
    id: "su3",
    name: "Chanay Chaat",
    description: "Spiced chickpea snack with tamarind and chutneys",
    price: 300,
    servingSize: 1,
    image: "/assets/images/chana-chat.webp",
    category: "Snack"
  },
  {
    id: "su4",
    name: "Mutton Kebab Roll",
    description: "Spiced mutton kebab wrapped in a flatbread roll",
    price: 800,
    servingSize: 1,
    image: "/assets/images/mutton-kebab.jpeg",
    category: "Street Food"
  }
];
