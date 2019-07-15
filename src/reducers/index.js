import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import addBooks from './product'


export default combineReducers({
    signup,
    login,
    addBooks
})