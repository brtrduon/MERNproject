import React, { Component } from 'react';
import { Link } from 'react-router';

class Confirmation extends Component {
    render() {
        return (
            <div className='body'>
                <p>
                    Your confirmation has been confirmed.
                </p>
                <br></br>
                <p>
                    <Link to='/'>Click here</Link> to return to the home page.
                </p>
            </div>
        );
    }
}

export default Confirmation;