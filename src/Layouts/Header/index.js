import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav>
            <Link to="/">Albums</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Header;