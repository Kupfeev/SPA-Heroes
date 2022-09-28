import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PublicRoutes } from "../../src/router/PublicRoutes";

describe('Tests in <PublicRoutes />', () => {
    test('Should render children if user is not logged.', () => {
        
        const contextValue = {
            logged: false
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoutes>
                    <h1>Public Route</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        );
        
        //screen.debug();
        expect(screen.getByText("Public Route")).toBeTruthy();
    });
    
    test('Should navigate out if logged equals true', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name: 'abc123'
            }
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoutes>
                                <h1>Public Route</h1>
                            </PublicRoutes>
                        } />

                        <Route path="marvel" element={
                            <h1>Marvel Page</h1>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Marvel Page')).toBeTruthy();
    });
})