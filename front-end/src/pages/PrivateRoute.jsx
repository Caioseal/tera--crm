import { Navigate } from 'react-router-dom'

export function PrivateRoute({ children }) {
  
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