import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar () {
    return(
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Tweet
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar