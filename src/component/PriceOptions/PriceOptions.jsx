import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
  {
    "id": 1,
    "name": "Basic Membership",
    "price": 30,
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "Free Wi-Fi"
    ]
  },
  {
    "id": 2,
    "name": "Standard Membership",
    "price": 50,
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "Free Wi-Fi",
      "Access to group classes",
      "One free personal training session per month"
    ]
  },
  {
    "id": 3,
    "name": "Premium Membership",
    "price": 80,
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "Free Wi-Fi",
      "Unlimited group classes",
      "Weekly personal training sessions",
      "Access to spa & sauna",
      "Nutrition consultation"
    ]
  },
  {
    "id": 4,
    "name": "VIP Membership",
    "price": 120,
    "features": [
      "24/7 gym access",
      "Private locker",
      "Unlimited group classes",
      "Unlimited personal training",
      "Access to spa & sauna",
      "Nutrition and lifestyle coaching",
      "Priority class booking",
      "Guest passes included"
    ]
  }
]

    return (
        <div className="m-12">
            <h2>Best Prices in the town</h2>

          <div className="grid md:grid-cols-3 gap-6">
              {
                 priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
          </div>
            
        </div>
    );
};

export default PriceOptions;