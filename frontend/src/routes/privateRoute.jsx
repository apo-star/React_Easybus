import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
    (
        <Box>
            <CircularProgress />
        </Box>
    )
}

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const loaction = useLocation()

    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: loaction }} replace />
    }

}

export default PrivateRoute;