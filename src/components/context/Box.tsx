import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const Box = () => {
    const Theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: Theme.primary.main, color: Theme.primary.text }}>Box Goes Here</div>
    )
}

export default Box