import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser } from '../../actions/userActions';

const ProtectedRoute = ({ children, isAdmin }) => {

    const dispatch = useDispatch();
    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    useEffect(() => {
        if (!user) {
            dispatch(loadUser);
        }
    }, [user, dispatch, isAuthenticated]);

    if (loading) { return <h1>Loading...</h1> }
    if (!loading && isAuthenticated) {
        if (isAdmin === true && user.role !== "admin") {

            return <Navigate to="/me" />
        }
        return children;
    }
    else {
        return <Navigate to="/login" />
    }

}



export default ProtectedRoute
