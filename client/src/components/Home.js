import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import MetaData from './layout/MetaData'
import { getProducts } from '../actions/productActions';
import { useSelector } from "react-redux";
import Product from './product/Product';
import Loader from './layout/Loader';
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const alert = useAlert()

    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector(state => state.products)

    // Get All Products

    useEffect(() => {


        if (error) {
            return alert.error(error)
        }
        console.log('currentPage', currentPage);
        dispatch(getProducts(currentPage));


    }, [dispatch, alert, error, currentPage])


    function setCurrentPageNumber(pageNumber) {
        setCurrentPage(pageNumber)
    }


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

                        {resPerPage <= productsCount && (

                            <div className="d-flex justify-content-center mt-5">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNumber}
                                    nextPageText={'Next'}
                                    prevPageText={'Prev'}
                                    firstPageText={'First'}
                                    lastPageText={'Last'}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default Home