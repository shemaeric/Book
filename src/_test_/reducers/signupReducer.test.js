import reducer from '../../reducers/signup';
import { NEW_POST } from '../../actions/types/Signup';

describe('SignUp Reducer', () => {

    // if no payload provided we remain with the initial state
    test('returns the initial state when an action type is not passed', () => {
        const initialState = {
           "errors": null,
            "user": {},
            };
        const reducers = reducer(undefined, {});
        expect(reducers).toEqual(initialState);
    });

    // when we pass new payload to our reducer then the state will be updated to the new payloads
    test('should handle NEW_POST and signup the user', () => {
        const payload = {
          username: 'test',
          email: 'test@user.com',
          password: 'test123'
        };
        const expectedState = {
          type: NEW_POST,
          payload,
        };
        expect(reducer({}, expectedState)).toEqual({ user: payload});
      });
})