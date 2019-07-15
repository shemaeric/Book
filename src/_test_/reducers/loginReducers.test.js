import reducer from '../../reducers/login';
import { SIGNIN_LOCAL } from '../../actions/types/Signup';

describe('SignUp Reducer', () => {

    // if no payload provided the state remains the same as initial state
    test('returns the initial state when an action type is not passed', () => {
        const initialState = {
            "userLogin": {},
            };
        const reducers = reducer(undefined, {});
        expect(reducers).toEqual(initialState);
    });

    // when we pass new payload to our reducer then the state will be updated to the new payloads
    test('should handle NEW_POST and signup the user', () => {
        const payload = {
          email: 'test@user.com',
          password: 'test123'
        };
        const expectedState = {
          type: SIGNIN_LOCAL,
          payload,
        };
        expect(reducer({}, expectedState)).toEqual({});
      });
})