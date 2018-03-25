import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Sidebar from './sidebar';
import * as actions from '../../actions';

class Reserve extends Component {
    handleFormSubmit(formProps) {
        console.log(formProps);
        this.props.makeReservation(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'>
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { first_name, last_name, phone_number, party_size, date, time }} = this.props;
        
        return (
            <div className='body'>
                <p className='title'>RESERVATIONS</p>
                <p>
                    *You may also place a reservation via telephone.
                </p>
                <p>
                    Our dining hall sits up to 100 guests at any given time. We take our seating accomodations very seriously and, thus, we only allow guest reservations a 10-minute gap before and after their reservation time. A reservation is considered to be forfeited if no seats are claimed after 10 minutes from the reservation time.
                </p>
                <form className='form' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className='form-group'>
                        <label>First Name:</label>
                        <input className='form-control' {...first_name} />
                        {first_name.touched && first_name.error && <div className='error'>{first_name.error}</div>}
                    </fieldset>
                    <fieldset className='form-group'>
                        <label>Last Name:</label>
                        <input className='form-control' {...last_name} />
                        {last_name.touched && last_name.error && <div className='error'>{last_name.error}</div>}
                    </fieldset>
                    <fieldset className='form-group'>
                        <label>Phone Number (only include numbers):</label>
                        <input className='form-control' {...phone_number} />
                        {phone_number.touched && phone_number.error && <div className='error'>{phone_number.error}</div>}
                    </fieldset>
                    <fieldset className='form-group'>
                        <label>Party Size:</label>
                        <input className='form-control' type='number' {...party_size} />
                        {party_size.touched && party_size.error && <div className='error'>{party_size.error}</div>}
                    </fieldset>
                    <fieldset className='form-group'>
                        <label>Date:</label>
                        <input className='form-control' type='date' {...date} />
                        {date.touched && date.error && <div className='error'>{date.error}</div>}
                    </fieldset>
                    <fieldset className='form-group'>
                        <label>Time:</label>
                        <input className='form-control' type='time' {...time} />
                        {time.touched && time.error && <div className='error'>{time.error}</div>}
                    </fieldset>
                    {this.renderAlert()}
                    <button action='submit' className='btn btn-primary'>Place Reservation</button>
                </form>
                <Sidebar />
            </div>
        );
    }
}


function validate(formProps) {
    const errors = {};

    if (!formProps.first_name) {
        errors.first_name = 'First Name required';
    }
    if (!formProps.last_name) {
        errors.last_name = 'Last Name required';
    }
    if (!formProps.phone_number || !formProps.phone_number.match(/\d/g) || formProps.phone_number.length !== 10) {
        errors.phone_number = 'Enter a valid phone number';
    }
    if (!formProps.party_size) {
        errors.party_size = 'Party Size required'
    }
    if (!formProps.date) {
        errors.date = 'Please select a date for your reservation';
    }
    if (!formProps.time) {
        errors.time = 'Please select a time for your reservation';
    }
    // if (formProps.date < Date.now) {
    //     errors.date = 'Date cannot be in the past';
    // }

    // past time validation isn't working for some reason
    
    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default reduxForm({
    form: 'reserve',
    fields: [
        'first_name',
        'last_name',
        'phone_number',
        'party_size',
        'date',
        'time'
    ], validate
}, mapStateToProps, actions)(Reserve);