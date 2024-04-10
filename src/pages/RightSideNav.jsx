import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-xl mb-2">Login With</h2>
                <button className="btn w-full flex items-center gap-2 mb-4"><FaGoogle />Login with Google</button>
                <button className="btn w-full flex items-center gap-2"><FaGithub />Login with GitHub</button>
            </div>

            <div className="p-4 mb-6">
                <h2 className="text-xl mb-2">Find Us On</h2>
                <a className="px-4 py-2 flex items-center gap-2 border rounded-t-lg">
                    <FaFacebook className="text-blue-700"></FaFacebook>
                    Facebook
                </a>
                <a className="px-4 py-2 flex items-center gap-2 border">
                    <FaTwitter className="text-blue-500"></FaTwitter>
                    Twitter
                </a>
                <a className="px-4 py-2 flex items-center gap-2 border rounded-b-lg">
                    <FaInstagram className="text-red-600"></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className="p-4">
            <h2 className="text-xl mb-2">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;