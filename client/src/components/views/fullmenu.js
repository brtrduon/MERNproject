import React, { Component } from 'react';
import Sidebar from './sidebar';

class Fullmenu extends Component {
    render(){
        return (
            <div className='body'>
                insert full menu here with BS prices, desc, etc.
                <Sidebar />
            </div>
        );
    }
}

export default Fullmenu;