import { SIGNIN_LOCAL } from './types/Login';

export const submitSignUpFailure = payload => ({ type: SIGNIN_LOCAL, payload });
export const signinLocal = (postData) => dispatch => {
        return fetch('https://tugure.herokuapp.com/api/v1/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(loginUser => {
            localStorage.setItem('token', loginUser.user.token);
            dispatch(submitSignUpFailure(loginUser.user));
            return loginUser;
        })
        .catch((err) => {
            return err;
          });
}


