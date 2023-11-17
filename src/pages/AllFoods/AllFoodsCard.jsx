import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Aos from 'aos';

const AllFoodsCard = ({ topFood }) => {
    const {_id, image, name } = topFood;
    useEffect(() => {
        Aos.init({duration: '1000', delay: '500'})
    }, [])
    return (
        <div data-aos="flip-right" className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl md:h-60 md:w-96 lg:h-60 lg:w-96" />
            </figure>
            <div className="px-5 py-5 space-y-2">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-3">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <span>5/5</span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/details/${_id}`}><button className='btn-sm bg-orange-600 text-white rounded'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllFoodsCard.propTypes = {
    topFood: PropTypes.object
};

export default AllFoodsCard;