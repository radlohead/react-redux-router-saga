import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/join">Join</Link></li>
            </ul>
        </>
    )
}

export default Menu;