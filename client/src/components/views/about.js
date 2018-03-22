import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='body'>
                <p className='title'>Jamie Lynn Sato</p>
                <div className='middle'>
                    <p>
                        "It's always been something I wanted to do...to create delectable dishes that no one has seen before that everyone can enjoy..."
                    </p>
                </div>
                <img className='profile_pic' src='./../img/profile_pic.jpg' alt='profile_pic.jpg' />
                <br></br>
                <br></br>
                <p>
                Born and raised in Tokyo, Japan, Jamie Lynn Sato discovered her talent and passion for cooking during her pre-teen years. After completing her bachelor's degree at the University of California, Berkeley, Jamie worked as Head Chef at several acclaimed restaurants in the Bay Area including, but not limited to, Fleur de Lys in San Francisco, Firehouse No.1 Gastropub in San Jose, and Woood Tavern in Oakland.
                </p>
                <br></br>
                <p>
                Wanting to bring together a mixture of Japanese and American cuisine and to expand upon her passion for cooking, Jamie opened Jamie's Kitchen, a 100-seat neighborhood restaurant, in the heart of Mountain View, CA. "I'm really excited to bring together such a hybrid of taste and culture to the community," Jamie explains. "It's always been something I wanted to do to since I was a little girl to create delectable dishes that no one has seen before that everyone can enjoy, regardless if they are a member of our community or if they are just visiting." 
                </p>
            </div>
        );
    }
}

export default About;