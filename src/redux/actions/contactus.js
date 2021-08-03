import axios from 'axios';

import {API_DOMEN} from '../../config';

export const sendContactus = (data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_CONTACTUS",
		payload: true
	})

	axios.post(`${API_DOMEN}/sendMail.php`, data).then(() => {
		dispatch({
			type: "SET_CONTACTUS",
			payload: "success"
		})
		dispatch({
			type: "SET_IS_SEND_CONTACTUS",
			payload: false
		})
	})
}