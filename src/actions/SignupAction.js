import { SIGNUP_FAILURE, NEW_POST, SIGNUP_SUCCESS } from './types/Signup';

export const submitSignUpFailure = payload => ({ type: SIGNUP_FAILURE, payload });

export const createPost = (postData) => dispatch => {
    fetch('https://tugure.herokuapp.com/api/v1/auth/signup', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(newUser => dispatch({
            type: NEW_POST,
            payload: newUser
        }))
        .catch((err) => {
            return err;
          });
}

export const submitSignUpSuccess = payload => ({ type: SIGNUP_SUCCESS, payload });

