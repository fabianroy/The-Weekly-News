import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2 className="p-4 text-2xl font-semibold">All Categories</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="block text-xl ml-8 mb-3" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;