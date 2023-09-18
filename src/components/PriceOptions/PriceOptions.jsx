import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymData = [
        {
          "id": 1,
          "name": "Gold Membership",
          "price": 50.00,
          "features": [
            "Access to all gym facilities",
            "Sauna access",
            "Personal trainer sessions",
            "Unlimited group fitness classes",
            "Towel service"
          ]
        },
        {
          "id": 2,
          "name": "Basic Membership",
          "price": 30.00,
          "features": [
            "Access to gym equipment",
            "Group fitness classes",
            "Locker room access",
            "Water fountain",
            "Free parking"
          ]
        },
        {
          "id": 3,
          "name": "Treadmill",
          "price": 2000.00,
          "features": [
            "High-quality treadmill",
            "Cardio workout",
            "Built-in heart rate monitor",
            "Programmable workouts",
            "Safety key"
          ]
        },
        {
          "id": 4,
          "name": "Weightlifting Class",
          "price": 20.00,
          "features": [
            "Weightlifting instruction",
            "Strength training",
            "Variety of weights",
            "Spotting assistance",
            "Strength and technique assessment"
          ]
        },
        {
          "id": 5,
          "name": "Yoga Class",
          "price": 15.00,
          "features": [
            "Yoga instruction",
            "Flexibility training",
            "Yoga mats provided",
            "Mindfulness meditation",
            "Breathing exercises"
          ]
        }
      ];
        
    return (
        <div className='m-12'>
            <h2 className='text-6xl mb-6 font-semibold'>All best prices here</h2>
            <div className='grid md:grid-cols-3 gap-4'>
            {
              gymData.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;