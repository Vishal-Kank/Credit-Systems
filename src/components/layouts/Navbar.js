import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <h1>Credit Systems</h1>
            <ul>
                <li><Link to={'/registration'}>Registration</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;