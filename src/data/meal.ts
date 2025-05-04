export interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
    servingSize: number;
    image: string;
    category: string;
  }
  
  // Function to get today's meals
  export const getTodaysMeals = (): Meal[] => {
    // In a real application, this would come from an API
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Different meals for different days of the week
    switch(today) {
      case 1: // Monday
        return mondayMeals;
      case 2: // Tuesday
        return tuesdayMeals;
      case 3: // Wednesday
        return wednesdayMeals;
      case 4: // Thursday
        return thursdayMeals;
      case 5: // Friday
        return fridayMeals;
      case 6: // Saturday
        return saturdayMeals;
      default: // Sunday
        return sundayMeals;
    }
  };
  
  // Mock data for each day of the week
  const mondayMeals: Meal[] = [
    {
      id: "m1",
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with rich meat sauce and parmesan cheese",
      price: 12.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1627286400579-027de47e9e73",
      category: "Italian"
    },
    {
      id: "m2",
      name: "Vegetable Curry",
      description: "Spicy vegetable curry with basmati rice",
      price: 10.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      category: "Indian"
    },
    {
      id: "m3",
      name: "Chicken Caesar Salad",
      description: "Fresh romaine lettuce with grilled chicken, croutons, and Caesar dressing",
      price: 9.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
      category: "Salad"
    },
    {
      id: "m4",
      name: "Family Lasagna",
      description: "Homemade lasagna with layers of pasta, bechamel sauce, and ground beef",
      price: 24.99,
      servingSize: 4,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
      category: "Italian"
    }
  ];
  
  const tuesdayMeals: Meal[] = [
    {
      id: "t1",
      name: "Beef Tacos",
      description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa",
      price: 11.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
      category: "Mexican"
    },
    {
      id: "t2",
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with mushrooms and parmesan cheese",
      price: 13.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a",
      category: "Italian"
    },
    {
      id: "t3",
      name: "Grilled Salmon",
      description: "Norwegian salmon with lemon butter sauce and steamed vegetables",
      price: 16.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      category: "Seafood"
    },
    {
      id: "t4",
      name: "Family Tray Enchiladas",
      description: "Chicken enchiladas with red sauce, cheese, and sour cream",
      price: 22.99,
      servingSize: 3,
      image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
      category: "Mexican"
    }
  ];
  
  const wednesdayMeals: Meal[] = [
    {
      id: "w1",
      name: "Butter Chicken",
      description: "Tender chicken in a creamy tomato sauce with rice and naan bread",
      price: 14.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      category: "Indian"
    },
    {
      id: "w2",
      name: "Veggie Stir Fry",
      description: "Fresh vegetables stir-fried with tofu in a savory sauce",
      price: 11.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      category: "Asian"
    },
    {
      id: "w3",
      name: "Beef Bourguignon",
      description: "Slow-cooked beef stew with red wine, mushrooms, and herbs",
      price: 16.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      category: "French"
    },
    {
      id: "w4",
      name: "Family Pasta Bake",
      description: "Baked pasta with cheese, vegetables, and Italian herbs",
      price: 21.99,
      servingSize: 4,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
      category: "Italian"
    }
  ];
  
  const thursdayMeals: Meal[] = [
    {
      id: "th1",
      name: "Chicken Tikka Masala",
      description: "Grilled chicken pieces in spiced curry sauce with rice",
      price: 13.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      category: "Indian"
    },
    {
      id: "th2",
      name: "Margherita Pizza",
      description: "Thin crust pizza with tomato sauce, mozzarella, and basil",
      price: 12.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
      category: "Italian"
    },
    {
      id: "th3",
      name: "Mediterranean Salad",
      description: "Mixed greens with feta cheese, olives, tomatoes, and cucumber",
      price: 9.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
      category: "Salad"
    },
    {
      id: "th4",
      name: "Family Roast Chicken",
      description: "Whole roasted chicken with potatoes, carrots, and gravy",
      price: 24.99,
      servingSize: 4,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
      category: "American"
    }
  ];
  
  const fridayMeals: Meal[] = [
    {
      id: "f1",
      name: "Fish & Chips",
      description: "Battered cod with french fries and tartar sauce",
      price: 12.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc",
      category: "British"
    },
    {
      id: "f2",
      name: "Pad Thai",
      description: "Thai noodles with shrimp, tofu, bean sprouts, and peanuts",
      price: 11.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
      category: "Thai"
    },
    {
      id: "f3",
      name: "BBQ Ribs",
      description: "Slow-cooked ribs with homemade barbecue sauce and coleslaw",
      price: 15.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      category: "American"
    },
    {
      id: "f4",
      name: "Family Taco Kit",
      description: "Make-your-own tacos with all toppings included",
      price: 26.99,
      servingSize: 4,
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
      category: "Mexican"
    }
  ];
  
  const saturdayMeals: Meal[] = [
    {
      id: "s1",
      name: "Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce",
      price: 10.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      category: "American"
    },
    {
      id: "s2",
      name: "Chicken Alfredo",
      description: "Fettuccine pasta with creamy alfredo sauce and grilled chicken",
      price: 13.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023882a",
      category: "Italian"
    },
    {
      id: "s3",
      name: "Vegetable Stir-Fry",
      description: "Mixed vegetables in a ginger soy sauce with rice or noodles",
      price: 11.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      category: "Asian"
    },
    {
      id: "s4",
      name: "Family Paella",
      description: "Traditional Spanish rice dish with seafood, chicken, and vegetables",
      price: 29.99,
      servingSize: 4,
      image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b",
      category: "Spanish"
    }
  ];
  
  const sundayMeals: Meal[] = [
    {
      id: "su1",
      name: "Sunday Roast",
      description: "Roast beef with yorkshire pudding, vegetables, and gravy",
      price: 14.99,
      servingSize: 1,
      image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02",
      category: "British"
    },
    {
      id: "su2",
      name: "Vegetable Lasagna",
      description: "Layers of pasta, vegetables, tomato sauce, and cheese",
      price: 12.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1540914124281-342587941389",
      category: "Italian"
    },
    {
      id: "su3",
      name: "Chicken Biryani",
      description: "Fragrant rice dish with chicken, spices, and caramelized onions",
      price: 13.99,
      servingSize: 2,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
      category: "Indian"
    },
    {
      id: "su4",
      name: "Family Pot Roast",
      description: "Slow-cooked pot roast with potatoes, carrots, and onions",
      price: 27.99,
      servingSize: 4,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      category: "American"
    }
  ];
  