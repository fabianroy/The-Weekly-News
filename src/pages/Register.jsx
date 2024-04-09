import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="w-fit mx-auto mt-20">
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="enter your name" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                    Email
                    <input type="text" className="grow" placeholder="@example.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                    Password
                    <input type="password" className="grow" placeholder="enter password" />
                </label>
                <button className="w-full btn mt-4">Register</button>
                <p className="mt-8">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;