import { PrivateRoute } from './PrivateRoute'
import { Topbar } from "../components/Topbar/Topbar"

export function Reports() {
    return (
        <PrivateRoute>
            <Topbar />

        </PrivateRoute>
    )
}