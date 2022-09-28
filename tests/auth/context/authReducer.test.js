import { authReducer, types } from "../../../src/auth";

describe('Tests in authReducer.js', () => {

    test('Should return default state', () => { 
        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged: false});
    });

    test('Should return logged in true and stablish a user after calling login', () => {
        const action = {
            type: types.login,
            payload: {
                name: "abc123"
            }
        };
        const state = authReducer({logged: false}, action);

        expect(state.logged).toBeTruthy();
        expect(state.user).toEqual(action.payload);
    });

    test('Should return logged in false without a user after calling logout', () => {
        
        const userState = {logged: true, user: {name: "abc123"}};
        const action = {type: types.logout}
        const state = authReducer(userState, action);

        expect(state).toEqual({logged: false});
    });
})