import "../index.css";
import { ResturantCard } from "./Cards";

/**
 * Header
 * -logo
 * -nav bar
 * Body
 * -search
 * -resto container
 * Footer
 * -copyright
 * -links
 * -Address/contact
 *
 */
const restList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "619503",
      name: "Litti Heist",
      city: "1",
      slugs: {
        restaurant: "litti-heist-hsr-hsr",
        city: "bangalore",
      },
      cloudinaryImageId: "kq5fmu174kikep8wfljh",
      address:
        "No 151/17, Shiradi Sai Nilaya, 3rd Main Road,  Jakkasandra, Karnataka-560034",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "20000",
      costForTwoMessage: "₹200 FOR TWO",
      cuisines: ["Indian", "Beverages", "Chaat"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "619503",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
        title: "Delivery Charge",
        amount: "3900",
      },
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "38 MINS",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_5",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian"}',
      objectValue: "619503",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "619503",
        query: "North Indian",
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "16197",
      name: "Kullad Cafe",
      city: "1",
      slugs: {
        restaurant: "kullad-cafe-btm-btm",
        city: "bangalore",
      },
      cloudinaryImageId: "0710d30011c08d58472626112628bb5c",
      address: "16th Main, BTM Layout, 2nd Stage, Near Udupi Signal.",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "15000",
      costForTwoMessage: "₹150 FOR TWO",
      cuisines: ["North Indian", "Snacks", "Fast Food", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "16197",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2700,
        title: "Delivery Charge",
        amount: "2700",
      },
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=7622625~p=0~eid=00000189-a9c7-2719-04f1-34ce00d30077~srvts=1690770548505",
      sla: {
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "23 MINS",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_4",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian","adTrackingId":"cid=7622625~p=0~eid=00000189-a9c7-2719-04f1-34ce00d30077~srvts=1690770548505"}',
      objectValue: "16197",
      impressionObjectName: "impression-restaurant-ad",
      clickObjectName: "click-restaurant-ad",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "16197",
        query: "North Indian",
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "132622",
      name: "Marwadi Chaat & Tiffin Services Shanti nagar",
      city: "1",
      slugs: {
        restaurant: "marwadi-chaat-tiffin-services-shantinagar-shantinagar",
        city: "bangalore",
      },
      cloudinaryImageId: "e8f48a82caf1cdc428448f64dba7b61e",
      address: "No :9 5 th Cross Lakshmi road shantinagar Bangalore-560027",
      locality: "Lakshmi road",
      areaName: "Shanthi Nagar",
      costForTwo: "30000",
      costForTwoMessage: "₹300 FOR TWO",
      cuisines: ["Rajasthani", "North Indian", "Snacks", "Chaat"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "132622",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5100,
        title: "Delivery Charge",
        amount: "5100",
      },
      avgRatingString: "3.7",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "42 MINS",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_4",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian"}',
      objectValue: "132622",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
        restaurant_id: "132622",
        query: "North Indian",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "42748",
      name: "Indori Zaika",
      city: "1",
      slugs: {
        restaurant: "indori-zaika-hsr-hsr",
        city: "bangalore",
      },
      cloudinaryImageId: "foz4sgtzgy4tmtcc86h8",
      address:
        "Shop No. 672, 13th cross, 27th  main, 1st sector, landmark opposite to Kidzee play school, HSR Layout, Bangalore 560102",
      locality: "1ST Sector",
      areaName: "HSR Layout",
      costForTwo: "25000",
      costForTwoMessage: "₹250 FOR TWO",
      cuisines: ["North Indian"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "42748",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
        title: "Delivery Charge",
        amount: "4500",
      },
      avgRatingString: "3.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "45 MINS",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_4",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian"}',
      objectValue: "42748",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "42748",
        query: "North Indian",
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "617919",
      name: "Shree Annapurneshwari Kitchen",
      city: "1",
      slugs: {
        restaurant: "shree-annapurneshwari-kitchen-hsr-hsr",
        city: "bangalore",
      },
      cloudinaryImageId: "nryq9372abir0ohaog1i",
      address:
        "#526/A, Ganesha complex,19th  main road, 3rd sector , hsr layout,  Bangalore 560102",
      locality: "3rd Sector",
      areaName: "Hsr Layout",
      costForTwo: "60000",
      costForTwoMessage: "₹600 FOR TWO",
      cuisines: ["South Indian", "Beverages", "Biryani", "Ice Cream"],
      avgRating: 2,
      feeDetails: {
        restaurantId: "617919",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
        title: "Delivery Charge",
        amount: "4500",
      },
      avgRatingString: "2.0",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "42 MINS",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_2",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian"}',
      objectValue: "617919",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "617919",
        query: "North Indian",
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "617922",
      name: "Davanagere Benne Dose New",
      city: "1",
      slugs: {
        restaurant: "davanagere-benne-dose-new-hsr-hsr",
        city: "bangalore",
      },
      cloudinaryImageId: "mxlzyoct4ylgkbibbtao",
      address:
        "#526/A, Ganesha complex,19th  main road, 3rd sector , hsr layout,  Bangalore 560102",
      locality: "3rd Sector",
      areaName: "Hsr Layout",
      costForTwo: "50000",
      costForTwoMessage: "₹500 FOR TWO",
      cuisines: ["South Indian", "Beverages", "Indian"],
      avgRating: 1.9,
      feeDetails: {
        restaurantId: "617922",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
        title: "Delivery Charge",
        amount: "4500",
      },
      avgRatingString: "1.9",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 47,
        minDeliveryTime: 47,
        maxDeliveryTime: 47,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "47 MINS",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_2",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian"}',
      objectValue: "617922",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
        restaurant_id: "617922",
        query: "North Indian",
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
      },
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "646137",
      name: "Veg Sri Annapurneshwari Kitchen",
      city: "1",
      slugs: {
        restaurant:
          "veg-sri-annapurneshwari-kitchen-bellandur-sarjapur-bellandur-sarjapur",
        city: "bangalore",
      },
      cloudinaryImageId: "f2036ffdbe75667c6a9445733924fda9",
      address:
        "No.163,84/2, Ground Floor, Opp to Apollo  Pharmacy,Green Glen Layout, Bellandur,  Bangalore, Mahadevapura , B.B.M.P East,  Karnataka - 560103",
      locality: "Green Glen Layout",
      areaName: "Bellandur",
      costForTwo: "30000",
      costForTwoMessage: "₹300 FOR TWO",
      cuisines: ["North Indian", "Chinese", "Beverages"],
      avgRating: 1.7,
      feeDetails: {
        restaurantId: "646137",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7200,
        title: "Delivery Charge",
        amount: "7200",
      },
      avgRatingString: "1.7",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 52,
        minDeliveryTime: 52,
        maxDeliveryTime: 52,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "52 MINS",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      ratingSlab: "RATING_SLAB_2",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
    },
    analytics: {
      screenName: "explore",
      context:
        '{"tid":"58c68fe4-7c88-971e-d219-8b6a0d1995d5","grid":"a57e2339-6030-4305-a9ef-700608d7a0f2","queryUniqueId":"f3d9813b-4d8e-8896-3a0c-03782feca882","query":"North Indian"}',
      objectValue: "646137",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        isSld: "false",
        sourceRequestId: "64c71c7459d03a971eef24cdb2c9a70f",
        restaurant_id: "646137",
        query: "North Indian",
        sourceSessionId: "8hj80a2d-7136-4798-b81e-c9d899488a7d",
        source: "SEARCH",
      },
    },
  },
];

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-name">
        {restList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
