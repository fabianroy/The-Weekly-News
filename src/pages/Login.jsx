import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="w-fit mx-auto mt-20">
                <h2 className="text-2xl">Login</h2>
                <form onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Email
                        <input name="email" type="email" className="grow" placeholder="@example.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Password
                        <input name="password" type="password" className="grow" placeholder="enter password" required />
                    </label>
                    <button className="w-full btn mt-4">Login</button>
                    <p className="mt-8">Don&apos;t have an account? <Link className="text-blue-600" to="/register">Register Here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;