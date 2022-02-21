import React from 'react';
import {Link} from 'react-router-dom'
export const Navbar:React.FC = () => (
    <nav>
        <div className="nav-wrapper col1 px1">
            <a href="/" className="brand-logo">React TO-DO</a>
            <ul className="right hide-on-med-and-down">
                <li><Link to='/Todo'>Список дел</Link></li>
                <li><Link to="/About">О нас</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;