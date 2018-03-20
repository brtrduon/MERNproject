import React, { Component } from 'react';
import { Link } from 'react-router';

class Confirmation extends Component {
    render() {
        return (
            <div>
                Your confirmation has been confirmed.
                <br></br>
                <br></br>
                <Link to='/'>Click here</Link> to return to the home page.
            </div>
        );
    }
}

export default Confirmation;