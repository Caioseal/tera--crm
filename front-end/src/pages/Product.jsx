import { Topbar } from "../components/Topbar/Topbar"
import { PrivateRoute } from './PrivateRoute'
import { BoardwithTable } from "../components/BoardWithTable"

export function Product() {
    return (
        <PrivateRoute>
            <Topbar />
            <BoardwithTable />
        </PrivateRoute>
    )
}