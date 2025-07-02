import PropTypes from "prop-types";

const PriceOption = ({option}) => {

   
    const { name, price, features } = option;

    return (
        <div>
            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-3xl">/mon</span>
                </h2>
            
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
}


export default PriceOption;