import axios from 'axios';

import { API_DOMEN } from '../../config';

export const sendContactus = (data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_CONTACTUS",
		payload: true
	})

	let formData = new FormData();

	formData.append("email", data.email);
	formData.append("name", data.name);
	formData.append("wishes", data.wishes);

	axios.post(`${API_DOMEN}/sendMail.php`, formData).then(() => {
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