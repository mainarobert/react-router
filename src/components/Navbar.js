import React from 'react';
import { Link, NavLink } from 'react-router-dom'

// replace anchor tags with Link/ NavLink, does the job of preventing default of anchor tags(kind of e preventDefault)
// NavLink adds class of active. See in inspect browser

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Router</a>
                <ul className= "right">
                    <li><Link to ="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar