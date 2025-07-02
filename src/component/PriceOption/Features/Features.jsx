import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Features = ({features}) => {
    return (
        <div>
            <p className="flex items-center "> <FaCircleCheck className="text-green-500 mr-2" />{features}</p>
            
        </div>
    );
};

Features.propTypes = {
   features:PropTypes.string
}


export default Features;