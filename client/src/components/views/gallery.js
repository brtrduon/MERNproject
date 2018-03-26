import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import Sidebar from './sidebar';

class Gallery extends Component {
    componentDidMount = () => {
        $('.lfood').mouseenter(function() {
            // enlarge img by some percentage and revert back to original size on mouseexit. also need to add same effect for .rfood
        });
    };

    render() {
        return (
            <div className='body'>
                <p className='title'>GALLERY</p>
                <div className='middle'>
                    <p>
                        At Jamie's Kitchen, we strive to deliver the highest quality food made from the freshest ingredients guaranteed.
                    </p>
                </div>
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
                <Sidebar />
            </div>
        );
    }
}

export default Gallery;