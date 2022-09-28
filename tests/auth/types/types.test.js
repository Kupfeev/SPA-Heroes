import { types } from "../../../src/auth";

describe('Tests in types.js', () => {
    test('Should return this types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });
})