import { SIGNIN_LOCAL } from '../actions/types/Login';

const initialState = {
    userLogin: {}
}

export default function( state = initialState, action) {
    switch(action.type) {
        case SIGNIN_LOCAL:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
