import BreakingNews from "./BreakingNews";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";
import RightSideNav from './RightSideNav';
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">

                    {/* News Container */}

                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;