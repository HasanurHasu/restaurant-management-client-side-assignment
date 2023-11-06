const Subscribe = () => {
    return (
        <div data-aos="fade-down" className="my-10 flex flex-col items-center gap-4 py-28 bg-[#FFF8F5]">
            <h1 className="text-3xl font-bold text-black">Subscribe</h1>
            <hr className="border-t-2 border-black bg-black w-1/6" />
            <p className="text-black text-center">Subscribe our newsletter to stay updated every moment</p>
            <div className="flex">
                <input type="text" placeholder="Enter a valid email address" className="border-2 rounded-l-md w-68 md:w-96 lg:w-96 py-2 px-6" />
                <button className="bg-[#D72050] px-5 py-2 rounded-r-md text-white ">Submit</button>
            </div>
        </div>
    );
};

export default Subscribe;