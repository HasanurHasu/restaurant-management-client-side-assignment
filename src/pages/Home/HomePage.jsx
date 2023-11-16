import { Helmet } from "react-helmet-async";
import AllFoods from "../AllFoods/AllFoods";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import FeaturedRecipes from "./FeaturedRecipes";
import Subscribe from "./Subscribe";
import TopFood from "./TopFood";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFood></TopFood>
            <FeaturedRecipes></FeaturedRecipes>
            <div className="mt-20">
            <AllFoods></AllFoods>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;