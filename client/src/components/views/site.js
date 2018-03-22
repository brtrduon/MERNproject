import React, { Component } from 'react';

class Site extends Component {
    render() {
        return (
            <div>
                <p className='location'>LOCATION</p>
                <p>IN THE HEART OF MOUNTAIN VIEW</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6392906210644!2d-122.08624618422137!3d37.42199987982516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1521674663637" allowFullScreen></iframe>
            </div>
        );
    }
}

export default Site;