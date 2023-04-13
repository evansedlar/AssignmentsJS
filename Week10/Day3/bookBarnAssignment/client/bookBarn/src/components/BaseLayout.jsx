import { NavLink } from "react-router-dom"

function BaseLayout(props) {
    return (
        <>
            <Menu />

                {props.children}

            <Footer />
        </>
    )
}

function Menu() {
    return(
        <div className="">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/login'>Login</NavLink>
        </div>
    )
}

function Footer() {
    return (
        <p>Footer</p>
    )
}

export default BaseLayout