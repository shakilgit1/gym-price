import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <h2 className='flex items-center'>
             <AiFillCheckCircle className='mr-2 text-green-400'></AiFillCheckCircle> 
             {feature}</h2>
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string
};

export default Feature;