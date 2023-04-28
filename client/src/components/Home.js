import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MetaData from './layout/MetaData'
import { getProducts } from '../actions/productActions';
import { useSelector } from "react-redux";



const Home = () => {
    const { products } = useSelector(state => state.products)

    const dispatch = useDispatch();
    // Get All Products
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    console.log(products);
    return (
        <>
            <MetaData title="Buy Now !" />

            <div className="container container-fluid">
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">

                    <div className="row">
                        {products && products.map(product =>
                        (
                            <div key={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                                <div className="card p-3 rounded">
                                    <img
                                        alt=""
                                        className="card-img-top mx-auto"
                                        src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">

                                            <a href="/">{product.name}</a>
                                        </h5>
                                        <div className="ratings mt-auto">
                                            <div className="rating-outer">
                                                <div className="rating-inner"></div>
                                            </div>
                                            <span id="no_of_reviews">(5 Reviews)</span>
                                        </div>
                                        <p className="card-text">$45.67</p>
                                        <a href="/" id="view_btn" className="btn btn-block">View Details</a>
                                    </div>
                                </div>
                            </div>
                        )


                        )}


                    </div>
                </section>
            </div>
        </>
    )
}

export default Home