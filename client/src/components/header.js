import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {
        return [
            <li className='nav-item' key={1}>
                <Link className='navbar-brand' to='/'><img className='logo' src='../../img/logo.png' alt='logo.png' /></Link>
            </li>,
            <li className='nav-item' key={2}>
                <Link className='nav-link' to='/about'>ABOUT</Link>
            </li>,
            <li className='nav-item' key={3}>
                <Link className='nav-link' to='/location'>LOCATION</Link>
            </li>,
            <li className='nav-item' key={4}>
                <Link className='nav-link' to='/food'>FOOD</Link>
            </li>,
            <li className='nav-item' key={5}>
                <Link className='nav-link' to='/reserve'>RESERVE</Link>
            </li>
        ];
    }

    render() {
        return (
            <nav className='navbar-light'>
                <ul className='navbar navbar-nav'>
                    {/* <Link className='navbar-brand' to='/'><img className='logo' src='../../img/logo.png' alt='logo.png' /></Link> */}
                    {/* <p className='address'>(408) 123-4567 | 1600 Amphitheatre Pkwy, Mountain View, CA 94043</p> */}
                    <div className='links'>
                        {this.renderLinks()}
                    </div>
                </ul>
            </nav>
        );
    }

}

export default Header;