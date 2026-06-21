// home.jsx
import { Link } from "react-router"

export function Home () {
    return (
        <>
            <h1>This is Home</h1>
            <Link to="/shop">Click this for shop page</Link>
        </>
    )
}