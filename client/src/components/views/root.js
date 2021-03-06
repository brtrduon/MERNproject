import React, { Component } from 'react';
import $ from 'jquery';
import bxSlider from 'bxslider';

class Root extends Component {
    componentDidMount = () => {
        $('.slide').bxSlider({
            controls: false,
            auto: true,
            speed: 700,
            infiniteLoop: true,
            mode: 'fade',
            // adaptiveHeight: true,
        });
    };

    render() {
        return (
            <div className='rootBody'>
                <ul className='slide'>
                    <li>
                        <img src='./../../../img/1.jpg' alt='1.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/2.jpg' alt='2.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/3.jpg' alt='3.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/4.jpg' alt='4.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/5.jpg' alt='5.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/6.jpg' alt='6.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/7.jpg' alt='7.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/8.jpg' alt='8.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/9.jpg' alt='9.jpg' />
                    </li>
                    <li>
                        <img src='./../../../img/10.jpg' alt='10.jpg' />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Root;