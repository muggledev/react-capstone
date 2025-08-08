import cakeLeveler from "../../assets/cake-leveler.jpg";
import cakeScrapers from "../../assets/cake-scrapers.jpg";
import cakeKnives from "../../assets/cake-knives.webp";
import foodColoring from "../../assets/food-coloring.jpg";
import disposablePipingBag from "../../assets/disposable-piping-bag.jpg";
import fiveTierPans from "../../assets/five-tier-pans.jpg";
import bundtPan from "../../assets/bundt-pan.jpg";
import rectanglePan from "../../assets/9x13-pan.jpg";
import fallSprinkles from "../../assets/fall-sprinkles.jpg";
import easterSprinkles from "../../assets/easter-sprinkles.jpg";
import stpatricksdaySprinkles from "../../assets/stpatricksday-sprinkles.jpg";
import patrioticSprinkles from "../../assets/patriotic-sprinkles.jpg";
import valentinesSprinkles from "../../assets/valentines-sprinkles.jpg";
import sugarSprinkles from "../../assets/sugar-sprinkles.webp";
import frostingTips from "../../assets/frosting-tips.jpg";
import frostingTipsPack from "../../assets/tips.jpg";
import cupcakeTin from "../../assets/cupcake-tin.jpg";
import spinningStand from "../../assets/spinning-stand.jpg";
import bigKit from "../../assets/big-kit.jpg";
import beginningKit from "../../assets/beginning-kit.webp";
import whisks from "../../assets/whisks.jpg";
import reusablePipingBags from "../../assets/reusable-piping-bags.jpg";
import rainbowSprinkles from "../../assets/rainbow-sprinkles.jpg";
import cakeAirbrush from "../../assets/cake-airbrush.jpg";

const productData = [
  {
    id: 1,
    img: cakeLeveler,
    productName: "Adjustable Cake Leveler",
    price: "$13.88",
    description:
      "Wilton Adjustable Cake Leveler for Leveling and Torting, Small Cake Leveler for Even Layers & Stacking Cakes, 12 x 6.25-Inch",
  },
  {
    id: 2,
    img: cakeScrapers,
    productName: "Cake Scrapers",
    price: "$6.99",
    description:
      "Teenitor Cake Scraper Cake Smoother, 7 Pcs Dough Scraper Bowl Scraper Cake Cutter Cake Spatula Bench Scraper Kitchen Plastic Scraper Tool Cake Decorating Kit",
  },
  {
    id: 3,
    img: cakeKnives,
    productName: "Icing Spatulas",
    price: "$9.99",
    description:
      'Anaeat Icing Spatulas, Set of 3 Professional Cake Angled Offset Spatula with 6", 8", 10" Stainless Steel Blades - Thickened Frosting Knife with Plastic Handle for Cake Decorating, Pastry & Baking',
  },
  {
    id: 4,
    img: foodColoring,
    productName: "Food Coloring",
    price: "$9.99",
    description:
      "Food Coloring for Baking - 26 Vibrant Cake Coloring Liquid Set for Dessert Decorating, Food Grade Food Dye for Icing,Fondant,Cookies,Easter Egg,Making DIY Supplies Kit- 0.25 Fl. oz (6 ml)/Bottles",
  },
  {
    id: 5,
    img: disposablePipingBag,
    productName: "Disposable Piping Bags",
    price: "$7.99",
    description:
      "Keenpioneer Piping Bag - Disposable Cake Decorating Bag, Pastry Bag 56 Count, 16 inch, Clear",
  },
  {
    id: 6,
    img: fiveTierPans,
    productName: "Tier Cake Pan Set",
    price: "$19.99",
    description:
      'TeamFar Cake Pan, 4" - 6" - 8" - 9½" - 11", Stainless Steel Round Baking Tier Cake Pans Set, Healthy & Heavy Duty, Mirror Finish & Dishwasher Safe - Set of 5',
  },
  {
    id: 7,
    img: bundtPan,
    productName: "Bundt Pan",
    price: "$9.99",
    description:
      '9.5" Non-stick Cake Pan, Heavy Duty Carbon Steel Fluted Tube Round Baking Pan,Buntz Pound Cake Pan Mold,Tube Bakeware,Baking Mold for Jello,Gelatin,Chocoflan,Flan',
  },
  {
    id: 8,
    img: rectanglePan,
    productName: "9x13 Pan w/Lid",
    price: "$21.99",
    description:
      "Farberware Nonstick Bakeware Baking Pan With Lid / Nonstick Cake Pan With Lid, Rectangle - 9 Inch x 13 Inch, Gray",
  },
  {
    id: 9,
    img: fallSprinkles,
    productName: "Fall Sprinkles",
    price: "$7.99",
    description:
      "Sweets Indeed Sprinkles, Patriotic Edible Sprinkle Mix, Red Blue Gold, 4th of July, Perfect for Cake Decorations, Baking, Ice Cream, Cookies, Cupcake Topper For Birthday, Dairy Free, 4 ounces (Patriotic) (Thankful)",
  },
  {
    id: 10,
    img: easterSprinkles,
    productName: "Easter Sprinkles",
    price: "$7.99",
    description:
      "Sweets Indeed Sprinkles, Patriotic Edible Sprinkle Mix, Red Blue Gold, 4th of July, Perfect for Cake Decorations, Baking, Ice Cream, Cookies, Cupcake Topper For Birthday, Dairy Free, 4 ounces (Patriotic) (Thankful)",
  },
  {
    id: 11,
    img: stpatricksdaySprinkles,
    productName: "St.Patrick's Day Sprinkles",
    price: "$7.99",
    description:
      "Sweets Indeed Sprinkles, Patriotic Edible Sprinkle Mix, Red Blue Gold, 4th of July, Perfect for Cake Decorations, Baking, Ice Cream, Cookies, Cupcake Topper For Birthday, Dairy Free, 4 ounces (Patriotic) (Thankful)",
  },
  {
    id: 12,
    img: patrioticSprinkles,
    productName: "Patriotic Sprinkles",
    price: "$7.99",
    description:
      "Sweets Indeed Sprinkles, Patriotic Edible Sprinkle Mix, Red Blue Gold, 4th of July, Perfect for Cake Decorations, Baking, Ice Cream, Cookies, Cupcake Topper For Birthday, Dairy Free, 4 ounces (Patriotic) (Thankful)",
  },
  {
    id: 13,
    img: valentinesSprinkles,
    productName: "Valentine's Sprinkles",
    price: "$7.99",
    description:
      "Sweets Indeed Sprinkles, Patriotic Edible Sprinkle Mix, Red Blue Gold, 4th of July, Perfect for Cake Decorations, Baking, Ice Cream, Cookies, Cupcake Topper For Birthday, Dairy Free, 4 ounces (Patriotic) (Thankful)",
  },
  {
    id: 14,
    img: sugarSprinkles,
    productName: "Multi-Colored Sugar Sprinkles",
    price: "$9.99",
    description:
      "Sweets Indeed Dye Free Sprinkle Sugar 6 cell Edible Mix Sanding Sugar Perfect for Cake Decorations Baking Ice Cream Cookies Cupcake Topper (Natural Rainbow Sugar)",
  },
  {
    id: 15,
    img: frostingTips,
    productName: "Fancy Icing Tips",
    price: "$7.99",
    description:
      "47 Pcs Russian Piping Tips Set, 12 Flower Frosting Nozzles Icing Tips for Cake Decorating Tips Kit, Baking Supplies for Cookie Cupcake, 2 Leaf Piping Tips 2 Couplers 30 Pastry Baking Bags YLYL",
  },
  {
    id: 16,
    img: frostingTipsPack,
    productName: "Icing Tip Kit",
    price: "$14.99",
    description:
      "Kootek 54 in 1 Piping Bags and Tips Set with 13 Large Size Piping Tips, 35 Standard Size Icing Tips, 2 Reusable Pastry Bags 12 Inch, Cake Decorating Kit Supplies, Frosting Piping Kit for Cake, Cupcake",
  },
  {
    id: 17,
    img: cupcakeTin,
    productName: "24-Cup Muffin Tin",
    price: "$31.31",
    description: "Winco 24-Cup Non-stick Muffin and Cupcake Pan, Aluminum",
  },
  {
    id: 18,
    img: spinningStand,
    productName: "Cake Decorating Stand",
    price: "$26.99",
    description:
      "12'' Cake Stand, Cake Spinner Cake Decorating Supplies, Round Decorating Turntable Revolving Aluminum Table Holder Baking Display Tray Plate Tools Accessories for Birthday Wedding Party",
  },
  {
    id: 19,
    img: bigKit,
    productName: "Full Cake Decorating Kit",
    price: "$59.99",
    description:
      "Aluminum Alloy Revolving Cake Stand & Carrier - 268PCS Kit with 54 Piping Tips, Acrylic Cake Discs, Various Spatulas",
  },
  {
    id: 20,
    img: beginningKit,
    productName: "Beginner Cake Decorating Kit",
    price: "$18.90",
    description:
      "Kootek 71PCs Cake Decorating Kit, Baking Supplies Tools - Includes Cake Stand Turntable, 12 Icing Piping Tips, 2 Frosting Spatulas, 3 Scrapers, 50+2 Piping Bags, Coupler, Video Tutorial, Booklet",
  },
  {
    id: 21,
    img: whisks,
    productName: "Whisks",
    price: "$16.10",
    description:
      "Walfos Whisk, Silicone Whisk Heat Resistant (480°F) Kitchen Whisks Set of 4- Professional Whisks For Cooking Non Scratch, Balloon Egg Wisk Perfect for Frothing, Blending, Beating",
  },
  {
    id: 22,
    img: reusablePipingBags,
    productName: "Reusable Piping Bags",
    price: "$11.99",
    description:
      "16 Pcs Reusable Pastry Piping Bags Silicone Icing Bags with 8 Coupler for Icing Frosting Decorate Cake, (10,12,14,16 inch)",
  },
  {
    id: 23,
    img: rainbowSprinkles,
    productName: "Rainbow Sprinkles",
    price: "$8.59",
    description:
      "Rainbow Sprinkles, Confetti Sprinkles, Round Sprinkles, Rainbow Sprinkles for Cake Decorating, Chocolate, Cupcake, Candy Sprinkles, and Ice Cream Toppings. (120g/4.2oz)",
  },
  {
    id: 24,
    img: cakeAirbrush,
    productName: "Cake Decorating Airbrush Kit",
    price: "$109.99",
    description:
      "U.S. Cake Supply - Complete Cake Decorating Airbrush Kit with a Full Selection of 12 Vivid Airbrush Food Colors - Decorate Cakes, Cupcakes, Cookies & Desserts",
  },
];

export default productData;
