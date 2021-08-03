import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import contactus from '../reducers/contactus';

const rootReducer = combineReducers({
	contactus,
	form: formReducer
});

export default rootReducer;