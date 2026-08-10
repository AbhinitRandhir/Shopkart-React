import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function ProductCard({ product }) {

    const navigate = useNavigate();

    const { state: cartState, dispatch } = useContext(CartContext);

    const { state: authState } = useContext(AuthContext);

    // Check if product already exists in cart
    const cartItem = cartState.cart.find(
        (item) => item.id === product.id
    );

    // Add Product
    const handleAddToCart = () => {

        // User not logged in
        if (!authState.isLoggedIn) {

            navigate("/login", {
                state: {
                    from: "/"
                }
            });

            return;
        }

        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });

    };

    // Increase Quantity
    const increaseQuantity = () => {

        dispatch({

            type: "INCREASE",

            payload: product.id

        });

    };

    // Decrease Quantity
    const decreaseQuantity = () => {

        dispatch({

            type: "DECREASE",

            payload: product.id

        });

    };

    return (

        <div className="card h-100 shadow-sm">

            <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{
                    height: "220px",
                    objectFit: "contain"
                }}
            />

            <div className="card-body d-flex flex-column">

                <h6
                    className="card-title"
                    style={{
                        height: "50px",
                        overflow: "hidden"
                    }}
                >
                    {product.title}
                </h6>

                <h4 className="text-primary fw-bold">
                    ₹ {product.price}
                </h4>

                <small className="text-muted mb-3">
                    Free Delivery
                </small>

                {

                    cartItem ?

                        <div
                            className="input-group mt-auto"
                        >

                            <button
                                className="btn btn-primary"
                                onClick={decreaseQuantity}
                            >
                                -
                            </button>

                            <input
                                type="text"
                                className="form-control text-center"
                                value={cartItem.quantity}
                                readOnly
                            />

                            <button
                                className="btn btn-primary"
                                onClick={increaseQuantity}
                            >
                                +
                            </button>

                        </div>

                        :

                        <button
                            className="btn btn-primary mt-auto"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>

                }

            </div>

        </div>

    );

}

export default ProductCard;