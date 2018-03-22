import React, { Component } from 'react';
import { Link } from 'react-router';

class Food extends Component {
    render() {
        return (
            <div className='body'>
                insert menu pics, desc, and prices here
                <br></br>
                <Link to='/fullmenu'>View full menu</Link>
            </div>
        );
    }
}

export default Food;