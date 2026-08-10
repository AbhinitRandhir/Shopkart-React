// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Cart() {

//     const { state, dispatch } = useContext(CartContext);

//     const grandTotal = state.cart.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//     );

//     if (state.cart.length === 0) {

//         return (

//             <div className="text-center mt-5">

//                 <h2>Your Cart is Empty 🛒</h2>

//             </div>

//         );

//     }

//     return (

//         <div className="container">

//             <h2 className="mb-4 text-center">
//                 Shopping Cart
//             </h2>

//             {

//                 state.cart.map((item) => (

//                     <div
//                         key={item.id}
//                         className="card mb-3 shadow-sm"
//                     >

//                         <div className="row g-0 align-items-center">

//                             <div className="col-md-2 text-center">

//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className="img-fluid p-3"
//                                     style={{
//                                         height: "150px",
//                                         objectFit: "contain"
//                                     }}
//                                 />

//                             </div>

//                             <div className="col-md-6">

//                                 <div className="card-body">

//                                     <h5 className="card-title">
//                                         {item.title}
//                                     </h5>

//                                     <h4 className="text-primary">
//                                         ₹ {item.price}
//                                     </h4>

//                                 </div>

//                             </div>

//                             <div className="col-md-4">

//                                 <div className="card-body text-center">

//                                     <div
//                                         className="btn-group"
//                                         role="group"
//                                     >

//                                         <button
//                                             className="btn btn-primary"
//                                             onClick={() =>
//                                                 dispatch({
//                                                     type: "DECREASE",
//                                                     payload: item.id
//                                                 })
//                                             }
//                                         >
//                                             -
//                                         </button>

//                                         <button
//                                             className="btn btn-light border"
//                                             disabled
//                                         >
//                                             {item.quantity}
//                                         </button>

//                                         <button
//                                             className="btn btn-primary"
//                                             onClick={() =>
//                                                 dispatch({
//                                                     type: "INCREASE",
//                                                     payload: item.id
//                                                 })
//                                             }
//                                         >
//                                             +
//                                         </button>

//                                     </div>

//                                     <h5 className="mt-3">

//                                         Total :

//                                         <span className="text-primary">

//                                             ₹ {(item.price * item.quantity).toFixed(2)}

//                                         </span>

//                                     </h5>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 ))

//             }

//             <div className="card mt-4 shadow">

//                 <div className="card-body d-flex justify-content-between align-items-center">

//                     <h3>

//                         Grand Total

//                     </h3>

//                     <h2 className="text-primary">

//                         ₹ {grandTotal.toFixed(2)}

//                     </h2>

//                 </div>

//             </div>

//         </div>

//     );

// }

// export default Cart;



import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

    const { state, dispatch } = useContext(CartContext);

    const navigate = useNavigate();

    // Total Quantity
    const totalItems = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Grand Total
    const grandTotal = state.cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    if (state.cart.length === 0) {
        return (
            <div className="container mt-5 text-center">

                <h2>Your Cart is Empty 🛒</h2>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/")}
                >
                    Continue Shopping
                </button>

            </div>
        );
    }

    return (

        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Shopping Cart
            </h2>

            {
                state.cart.map((item) => (

                    <div
                        className="card shadow-sm mb-3"
                        key={item.id}
                    >

                        <div className="row g-0 align-items-center">

                            {/* Product Image */}

                            <div className="col-md-2 text-center">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="img-fluid p-3"
                                    style={{
                                        height: "140px",
                                        objectFit: "contain"
                                    }}
                                />

                            </div>

                            {/* Product Details */}

                            <div className="col-md-5">

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {item.title}
                                    </h5>

                                    <h4 className="text-primary">
                                        ₹ {item.price}
                                    </h4>

                                </div>

                            </div>

                            {/* Quantity */}

                            <div className="col-md-3 text-center">

                                <div
                                    className="btn-group"
                                    role="group"
                                >

                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            dispatch({
                                                type: "DECREASE",
                                                payload: item.id
                                            })
                                        }
                                    >
                                        -
                                    </button>

                                    <button
                                        className="btn btn-light border"
                                        disabled
                                    >
                                        {item.quantity}
                                    </button>

                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            dispatch({
                                                type: "INCREASE",
                                                payload: item.id
                                            })
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                            {/* Total */}

                            <div className="col-md-2 text-center">

                                <h5 className="text-primary">

                                    ₹ {(item.price * item.quantity).toFixed(2)}

                                </h5>

                            </div>

                        </div>

                    </div>

                ))
            }

            {/* Order Summary */}

            <div className="card shadow mt-4">

                <div className="card-body">

                    <h3 className="mb-4">
                        Order Summary
                    </h3>

                    <div className="d-flex justify-content-between">

                        <h5>Total Items</h5>

                        <h5>{totalItems}</h5>

                    </div>

                    <div className="d-flex justify-content-between">

                        <h5>Grand Total</h5>

                        <h4 className="text-primary">

                            ₹ {grandTotal.toFixed(2)}

                        </h4>

                    </div>

                    <hr />

                    <div className="text-end">

                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate("/payment")}
                        >
                            Proceed To Payment
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Cart;