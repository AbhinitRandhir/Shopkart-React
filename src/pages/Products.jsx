import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, []);

    if (loading) {

        return (

            <div className="container text-center mt-5">

                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>

                <h5 className="mt-3">
                    Loading Products...
                </h5>

            </div>

        );

    }

    return (

        <div className="container py-4">

            <h2 className="text-center fw-bold mb-4">

                ShopKart - Multi Collection

            </h2>

            <div className="row g-4">

                {

                    products.map((product) => (

                        <div
                            className="col-lg-3 col-md-4 col-sm-6"
                            key={product.id}
                        >

                            <ProductCard
                                product={product}
                            />

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default Products;