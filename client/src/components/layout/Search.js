import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {

    const navigate = useNavigate();
    const location = useLocation()

    const handleRouteChange = () => {
        setKeyword('')
    };
    const [keyword, setKeyword] = useState('');


    const searchHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            navigate(`/search/${keyword.trim()}`)


        } else {
            navigate('/')
            setKeyword(" ");

        }

    }
    useEffect(() => {
        console.log(keyword);
        handleRouteChange();
    }, [location]);



    return (
        <form onSubmit={searchHandler} >
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name "
                    onChange={(e) => setKeyword(e.target.value)}
                // value={keyword}
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search
