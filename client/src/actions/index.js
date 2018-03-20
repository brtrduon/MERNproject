import axios from 'axios';
import { browserHistory } from 'react-router';
import  { AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:8000';

export function makeReservation({ first_name, last_name, phone_number, party_size, date, time }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/reserve`, { first_name, last_name, phone_number, party_size, date, time })
            .then(response => {
                browserHistory.push('/confirmation');
            })
            .catch(response => dispatch(authError(response.response.data.err)));
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}