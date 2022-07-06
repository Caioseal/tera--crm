import { Topbar } from '../components/Topbar/Topbar'
import { Board } from '../components/Board/Board'

import { PrivateRoute } from './PrivateRoute'

export function Business() {
    return (
        <PrivateRoute>
            <Topbar />
            <Board />
        </PrivateRoute>
    )
}