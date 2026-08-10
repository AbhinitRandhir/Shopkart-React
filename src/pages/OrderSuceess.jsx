import { useNavigate } from "react-router-dom";

function OrderSuccess() {

    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow text-center">

                        <div className="card-body p-5">

                            <h1 className="display-1 text-primary">
                                ✔
                            </h1>

                            <h2 className="mt-3">
                                Order Placed Successfully!
                            </h2>

                            <p className="text-muted mt-3">
                                Thank you for shopping with <strong>ShopKart</strong>.
                            </p>

                            <p>
                                Your payment has been received successfully.
                            </p>

                            <p>
                                Your order will be delivered within
                                <strong> 3 - 5 business days.</strong>
                            </p>

                            <div className="mt-4">

                                <button
                                    className="btn btn-primary me-3"
                                    onClick={() => navigate("/")}
                                >
                                    Continue Shopping
                                </button>

                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => navigate("/cart")}
                                >
                                    View Cart
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default OrderSuccess;