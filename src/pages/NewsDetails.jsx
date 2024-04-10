import Header from "./Header";
import RightSideNav from './RightSideNav';

const NewsDetails = () => {

    return (
        <div>
            <Header></Header>
            <div className="grid lg:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl">News Details</h2>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;