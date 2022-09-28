import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";

Storage.prototype.setItem = jest.fn();
beforeEach(() => {
    jest.clearAllMocks();
}); //Clean up

describe('Tests in <PrivateRoutes />', () => {
    test('Should render children if user is logged.', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name: 'abc123'
            }
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoutes>
                        <h1>Private Route</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        //screen.debug();
        expect(screen.getByText("Private Route")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
    
    test('Should navigate out if logged equals false', () => {
        
        const contextValue = {
            logged: false
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <Routes>
                        <Route path="marvel" element={
                            <PrivateRoutes>
                                <h1>Marvel Page</h1>
                            </PrivateRoutes>
                        } />

                        <Route path="login" element={
                            <h1>Public Route</h1>  
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Public Route')).toBeTruthy();
    });
})