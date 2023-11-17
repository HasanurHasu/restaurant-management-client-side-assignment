import PropTypes from 'prop-types';
import 'aos/dist/aos.css'

const FeaturedRecipesCard = ({ food }) => {
    const {name, image} = food;
    return (
        <div data-aos="zoom-in">
            <div className="h-[400px] flex items-end rounded-md" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
                <div className='bg-base-300 rounded-md px-4 py-2 flex justify-center items-center gap-4'>
                    <div className="">
                        <div className="avatar">
                            <div className="w-10 mt-1 rounded-full">
                                <img src="https://img.freepik.com/free-photo/close-up-portrait-handsome-confident-young-man-white-t-shirt-blurry-outdoor-nature_176420-6301.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-bold'>James Smith</h1>
                        <p className='text-pink-600'>10 Recipes</p>
                    </div>
                </div>

            </div>
            <div className='mt-3 space-y-1'>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h1 className='text-lg font'>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat.</p>
            </div>
        </div>
    );
};

FeaturedRecipesCard.propTypes = {
    food: PropTypes.object
};

export default FeaturedRecipesCard;