import { useState } from 'react'

type Props = {}

const LoggedIn = (props: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn((prev) => !prev)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn? 'login' : 'logout'}</div>
        </div>
    )
}

export default LoggedIn