import React, { Component } from 'react';
import { Link } from 'react-router';

class Food extends Component {
    render() {
        return (
            <div className='body'>
                <p className='title'>FOOD</p>
                
                <img className='lfood' src='./../../../img/1.jpg' alt='1.jpg' />
                <img className='rfood' src='./../../../img/2.jpg' alt='2.jpg' />
                <img className='lfood' src='./../../../img/3.jpg' alt='3.jpg' />
                <img className='rfood' src='./../../../img/4.jpg' alt='4.jpg' />
                <img className='lfood' src='./../../../img/5.jpg' alt='5.jpg' />
                <img className='rfood' src='./../../../img/6.jpg' alt='6.jpg' />
                <img className='lfood' src='./../../../img/7.jpg' alt='7.jpg' />
                <img className='rfood' src='./../../../img/8.jpg' alt='8.jpg' />
                <img className='lfood' src='./../../../img/9.jpg' alt='9.jpg' />
                <img className='rfood' src='./../../../img/10.jpg' alt='10.jpg' />
                <br></br>
                <br></br>
                <Link to='/fullmenu'>View full menu</Link>
            </div>
        );
    }
}

export default Food;