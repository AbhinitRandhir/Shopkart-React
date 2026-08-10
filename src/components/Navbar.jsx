import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar({ search, setSearch }) {

    const { state, dispatch } = useContext(ThemeContext);

    const { state: cartState } = useContext(CartContext);

    const { state: authState, dispatch: authDispatch } =
        useContext(AuthContext);

    const totalItems = cartState.cart.reduce(

        (total, item) => total + item.quantity,

        0

    );

    return (

        <nav
            className={
                state.theme === "light"

                    ? "navbar navbar-expand-lg navbar-light bg-light shadow"

                    : "navbar navbar-expand-lg navbar-dark bg-dark shadow"
            }
        >

            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3 text-primary"
                    to="/"
                >

                    🛒 ShopKart

                </Link>

                <div
                    className="d-flex"
                    style={{ width: "35%" }}
                >

                    <input

                        className="form-control"

                        placeholder="Search Product..."

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }

                    />

                </div>

                <div className="d-flex align-items-center gap-2">

                    <Link
                        className="btn btn-outline-primary"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="btn btn-outline-primary position-relative"
                        to="/cart"
                    >

                        Cart

                        {

                            totalItems > 0 && (

                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                                >

                                    {totalItems}

                                </span>

                            )

                        }

                    </Link>

                    <button
                        className="btn btn-outline-primary"
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE_THEME"
                            })
                        }
                    >

                        {

                            state.theme === "light"

                                ? "🌙"

                                : "☀"

                        }

                    </button>

                    {

                        authState.isLoggedIn ?

                            <>

                                <span
                                    className="fw-bold"
                                >

                                    Hi,

                                    {authState.user.name}

                                </span>

                                <button

                                    className="btn btn-primary"

                                    onClick={() =>

                                        authDispatch({
                                            type: "LOGOUT"
                                        })

                                    }

                                >

                                    Logout

                                </button>

                            </>

                            :

                            <>

                                <Link
                                    className="btn btn-primary"
                                    to="/login"
                                >

                                    Login

                                </Link>

                                <Link
                                    className="btn btn-outline-primary"
                                    to="/register"
                                >

                                    Register

                                </Link>

                            </>

                    }

                </div>

            </div>

        </nav>

    );

}

export default Navbar;