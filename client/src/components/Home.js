import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MetaData from './layout/MetaData'
import { getProducts } from '../actions/productActions';
import { useSelector } from "react-redux";
import Product from './product/Product';
import Loader from './layout/Loader';
import { useAlert } from 'react-alert'


const Home = () => {
    const alert = useAlert()

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products)
    // Get All Products

    useEffect(() => {


        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts());

        console.log(error);

    }, [dispatch, alert, error])




    return (
        <>
            {loading ? <Loader /> : (
                <>

                    <MetaData title="Buy Now !" />

                    <div className="container container-fluid">
                        <h1 id="products_heading">Latest Products</h1>
                        <section id="products" className="container mt-5">

                            <div className="row">
                                {products && products.map(product =>
                                (
                                    <Product key={product._id} product={product} />
                                )


                                )}


                            </div>
                        </section>
                    </div>
                </>
            )}
        </>
    )
}

export default Home