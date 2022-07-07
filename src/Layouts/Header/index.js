import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav>
            <Link className="nav-link" to="/">Albums</Link>
            <Link className="nav-link" to="/about">About</Link>
        </nav>
    )
}

export default Header;