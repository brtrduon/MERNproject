import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {
        return [
            <li className='nav-item' key={4}>
                <Link className='navbar-brand' to='/'>Welcome</Link>
            </li>,
            <li className='nav-item' key={1}>
                <Link className='nav-link' to='/about'>About</Link>
            </li>,
            <li className='nav-item' key={2}>
                <Link className='nav-link' to='/location'>Location</Link>
            </li>,
            <li className='nav-item' key={3}>
                <Link className='nav-link' to='/reserve'>Reservations</Link>
            </li>
        ];
    }

    render() {
        return (
            <nav className='navbar navbar-light'>
                <ul className='navbar navbar-nav'>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }

}

export default Header;