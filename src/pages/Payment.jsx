import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Payment() {

    const { state, dispatch } = useContext(CartContext);

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        mobile: "",
        address: "",
        payment: "UPI"
    });

    // Calculate Total Items
    const totalItems = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Calculate Grand Total
    const grandTotal = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {

        setCustomer({

            ...customer,

            [e.target.name]: e.target.value

        });

    };

    const handlePayment = () => {

        if (
            customer.name === "" ||
            customer.email === "" ||
            customer.mobile === "" ||
            customer.address === ""
        ) {

            alert("Please fill all details.");

            return;

        }

        alert("Payment Successful ✅");

        dispatch({
            type: "CLEAR_CART"
        });

        navigate("/success");

    };

    return (

        <div className="container mt-4">

            <div className="row">

                {/* Customer Details */}

                <div className="col-md-7">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h4>Customer Details</h4>

                        </div>

                        <div className="card-body">

                            <div className="mb-3">

                                <label className="form-label">

                                    Full Name

                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={customer.name}
                                    onChange={handleChange}
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
                                    value={customer.email}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Mobile Number

                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    value={customer.mobile}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Delivery Address

                                </label>

                                <textarea
                                    rows="3"
                                    className="form-control"
                                    name="address"
                                    value={customer.address}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Payment Method

                                </label>

                                <select
                                    className="form-select"
                                    name="payment"
                                    value={customer.payment}
                                    onChange={handleChange}
                                >

                                    <option>UPI</option>

                                    <option>Credit Card</option>

                                    <option>Debit Card</option>

                                    <option>Cash On Delivery</option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Order Summary */}

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h4>Order Summary</h4>

                        </div>

                        <div className="card-body">

                            {

                                state.cart.map((item) => (

                                    <div
                                        key={item.id}
                                        className="d-flex justify-content-between mb-3"
                                    >

                                        <span>

                                            {item.title.substring(0, 18)}...

                                            × {item.quantity}

                                        </span>

                                        <span>

                                            ₹ {(item.price * item.quantity).toFixed(2)}

                                        </span>

                                    </div>

                                ))

                            }

                            <hr />

                            <div className="d-flex justify-content-between">

                                <h5>

                                    Total Items

                                </h5>

                                <h5>

                                    {totalItems}

                                </h5>

                            </div>

                            <div className="d-flex justify-content-between">

                                <h4>

                                    Grand Total

                                </h4>

                                <h4 className="text-primary">

                                    ₹ {grandTotal.toFixed(2)}

                                </h4>

                            </div>

                            <button
                                className="btn btn-primary w-100 mt-4"
                                onClick={handlePayment}
                            >

                                Pay Now

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Payment;