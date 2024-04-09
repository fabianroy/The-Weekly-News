import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center p-4 bg-gray-100">
            <button className="btn btn-error text-white">Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="text-xl text-red-600">Welcome to the Breaking News Section</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;