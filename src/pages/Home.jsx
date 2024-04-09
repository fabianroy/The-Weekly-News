import BreakingNews from "./BreakingNews";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from './RightSideNav';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border col-span-2">
                    <h1 className="text-4xl">News Coming Soon...</h1>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;