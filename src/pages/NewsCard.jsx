import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, thumbnail_url, details, _id } = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                        {
                            details.length > 100 
                            ? <p className="text-sm mt-4">{details.slice(0, 100)} <Link to={`/news/${_id}`} className="font-semibold text-blue-600 ml-2">Read More...</Link></p>
                            : <P className="text-sm mt-4">{details}</P> 
                        }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;