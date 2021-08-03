const initialState = {
	isSend: false,
	success: false,
}

const contactus = (state = initialState, action) => {
	if (action.type === "SET_CONTACTUS") {
		return {
			...state,
			success: true
		}
	}

	if (action.type === "SET_IS_SEND_CONTACTUS") {
		return {
			...state,
			isSend: action.payload
		}
	}

	return state
}

export default contactus