import { useState } from "react"

type authUserProps = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<authUserProps>({} as authUserProps)
    const handleLogin = () => {
        setUser({ 
            name: "Femi",
            email: "femi.com"
        })
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>user name is {user.name}</div>
            <div>user email is {user.email} </div>
        </div>
    )
}

export default User