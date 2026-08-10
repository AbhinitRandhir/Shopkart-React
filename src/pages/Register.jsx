import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const [user, setUser] = useState({

        name: "",

        email: "",

        password: "",

        confirmPassword: ""

    });

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleRegister = (e) => {

        e.preventDefault();

        if (user.password !== user.confirmPassword) {

            alert("Passwords do not match");

            return;

        }

        dispatch({

            type: "REGISTER",

            payload: user

        });

        alert("Registration Successful");

        navigate("/login");

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow-lg border-0">

                        <div className="card-header bg-primary text-white text-center">

                            <h3>Create Account</h3>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleRegister}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Full Name

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="name"

                                        value={user.name}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        name="email"

                                        value={user.email}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <input

                                        type="password"

                                        className="form-control"

                                        name="password"

                                        value={user.password}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Confirm Password

                                    </label>

                                    <input

                                        type="password"

                                        className="form-control"

                                        name="confirmPassword"

                                        value={user.confirmPassword}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Register
                                </button>

                            </form>

                            <hr />

                            <p className="text-center">

                                Already have an account?

                                <Link
                                    to="/login"
                                    className="ms-2"
                                >
                                    Login
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;