import PropTypes from 'prop-types';

const TopFoodCard = ({topFood}) => {
    const {name, img, foodCategory} = topFood;
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} className='w-full' />
            <h1>{foodCategory}</h1>
        </div>
    );
};

TopFoodCard.propTypes = {
  topFood: PropTypes.object  
};

export default TopFoodCard;