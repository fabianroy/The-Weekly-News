import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // createUser
        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="w-fit mx-auto mt-20">
                <h2 className="text-2xl">Register</h2>
                <form onSubmit={handleRegister}>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Name
                        <input name="name" type="text" className="grow" placeholder="enter your name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Email
                        <input name="email" type="email" className="grow" placeholder="@example.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Password
                        <input name="password" type="password" className="grow" placeholder="enter password" required />
                    </label>
                    <button className="w-full btn mt-4">Register</button>
                    <p className="mt-8">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;