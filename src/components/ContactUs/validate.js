const validate = values => {
	const errors = {};

	const defaultMax = 255;

	if (!values.name) {
		errors.name = 'The field cannot be empty';
	} else if (values.name.length > defaultMax) {
		errors.name = `No more than ${defaultMax} characters`;
	}

	if (!values.email) {
		errors.email = 'The field cannot be empty';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email'
	} else if (values.email.length > defaultMax) {
		errors.email = `No more than ${defaultMax} characters`;
	}

	if (!values.wishes) {
		errors.wishes = 'The field cannot be empty';
	} else if (values.wishes.length > 10000) {
		errors.wishes = `No more than 10 000 characters`;
	}

	return errors;
};

export default validate;