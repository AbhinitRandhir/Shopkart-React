import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* Hero Section */}

            <div className="bg-primary text-white py-5">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <h1 className="display-4 fw-bold">
                                Welcome to ShopKart
                            </h1>

                            <p className="lead mt-3">
                                Discover the latest fashion trends for women at
                                affordable prices. Shop your favorite styles
                                with an easy and secure shopping experience.
                            </p>

                            <Link
                                to="/products"
                                className="btn btn-light btn-lg mt-3"
                            >
                                Shop Now
                            </Link>

                        </div>

                        <div className="col-md-6 text-center">

                            <img
                                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600"
                                alt="Shopping"
                                className="img-fluid rounded shadow"
                            />

                        </div>

                    </div>

                </div>
            </div>

            {/* Features */}

            <div className="container my-5">

                <h2 className="text-center mb-5">
                    Why Shop With Us?
                </h2>

                <div className="row text-center">

                    <div className="col-md-4">

                        <div className="card shadow-sm h-100">

                            <div className="card-body">

                                <h1>🚚</h1>

                                <h4>Free Delivery</h4>

                                <p>
                                    Get free delivery on every order with
                                    fast shipping.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow-sm h-100">

                            <div className="card-body">

                                <h1>💳</h1>

                                <h4>Secure Payment</h4>

                                <p>
                                    Multiple payment options with secure
                                    transactions.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow-sm h-100">

                            <div className="card-body">

                                <h1>⭐</h1>

                                <h4>Premium Quality</h4>

                                <p>
                                    Carefully selected products with the best
                                    quality.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Categories */}

            <div className="container my-5">

                <h2 className="text-center mb-4">
                    Shop by Category
                </h2>

                <div className="row g-4">

                    <div className="col-md-4">

                        <div className="card shadow">

                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"
                                className="card-img-top"
                                height="250"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4>Women's Fashion</h4>

                                <Link
                                    to="/products"
                                    className="btn btn-primary"
                                >
                                    Explore
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow">

                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
                                className="card-img-top"
                                height="250"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4>Trending Styles</h4>

                                <Link
                                    to="/products"
                                    className="btn btn-primary"
                                >
                                    Explore
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow">

                            <img
                                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500"
                                className="card-img-top"
                                height="250"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4>New Arrivals</h4>

                                <Link
                                    to="/products"
                                    className="btn btn-primary"
                                >
                                    Explore
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Call To Action */}

            <div className="bg-light py-5">

                <div className="container text-center">

                    <h2>Start Shopping Today</h2>

                    <p className="lead">
                        Discover amazing products and enjoy a smooth shopping
                        experience.
                    </p>

                    <Link
                        to="/products"
                        className="btn btn-primary btn-lg"
                    >
                        Browse Products
                    </Link>

                </div>

            </div>
        </>
    );
}

export default Home;