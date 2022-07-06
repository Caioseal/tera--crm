import { Navigate } from 'react-router-dom'

export function PrivateRoute({ children }) {
    console.log('você está na rota privada')

    const user = localStorage.getItem('user')

    if(!user) {
        return <Navigate to="/"/>
    }

    return (
        <>
            {children}
        </>
    )
}