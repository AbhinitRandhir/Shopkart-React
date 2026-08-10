import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const { dispatch } = useContext(AuthContext);

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleLogin = (e) => {

        e.preventDefault();

        setError("");

        const registeredUser = JSON.parse(
            localStorage.getItem("shopkartUser")
        );

        if (!registeredUser) {

            setError("No account found. Please register first.");

            return;

        }

        if (
            user.email === registeredUser.email &&
            user.password === registeredUser.password
        ) {

            dispatch({
                type: "LOGIN",
                payload: registeredUser
            });

            navigate(location.state?.from || "/");

        }

        else {

            setError("Invalid Email or Password");

        }

    };

    return (

        <div className="container">

            <div
                className="row justify-content-center align-items-center"
                style={{ minHeight: "85vh" }}
            >

                <div className="col-md-5">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white text-center">

                            <h3 className="mb-0">
                                ShopKart Login
                            </h3>

                        </div>

                        <div className="card-body p-4">

                            {
                                error && (

                                    <div className="alert alert-danger">

                                        {error}

                                    </div>

                                )
                            }

                            <form onSubmit={handleLogin}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email Address

                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </form>

                            <hr />

                            <div className="text-center">

                                Don't have an account?

                                <Link
                                    to="/register"
                                    className="ms-2 text-decoration-none fw-bold"
                                >
                                    Register
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;