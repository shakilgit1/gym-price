
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className='bg-blue-600 p-8 flex flex-col text-white rounded-lg space-y-4'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h2 className='text-4xl text-center'>{name}</h2>
            <div className='pl-8 flex-grow'>
            {
              features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <div>
                <button className="text-xl bg-green-500 hover:bg-green-900 py-2 w-full rounded-lg">Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
};

export default PriceOption;