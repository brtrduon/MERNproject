import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <label>Lunch</label>
                <p>
                    Mon - Thur 12pm to 3pm
                </p>
                <p>
                    Fri - Sun 11:30am to 3pm
                </p>
                <label>Dinner</label>
                <p>
                    Mon - Thur 6pm to 10pm
                </p>
                <p>
                    Fri - Sun 5pm to 12am
                </p>
                <label>Address</label>
                <p>
                    1600 Amphitheatre Pkwy, Mountain View, CA 94043
                </p>
                <Link to='/fullmenu'>View Full Menu</Link>
            </div>
        );
    }
}

export default Sidebar;