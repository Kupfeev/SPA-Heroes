import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/heroes/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Tests in <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: "123",
            name: "abc"
        },
        logout: jest.fn()
    };

    

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should show username', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('abc')).toBeTruthy();
    });

    test('Should call fn logout and navigate when button is clicked', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });
});