import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const tokenExists = () => {
        const token = localStorage.getItem('token')
        return token === ''
    }

    if (tokenExists()) {
        return <Navigate to='/login' />
    } else {
        return <Outlet />
    }
}

export default ProtectedRoutes
