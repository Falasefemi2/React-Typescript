import { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        userContext.setUser({
            name: "femi falase",
            email: 'femifalase2gmail.com'
        })
    }
    const handleLogOut = () => {
        userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User name is {userContext.user?.email}</div>
        </div>
    )
}

export default User