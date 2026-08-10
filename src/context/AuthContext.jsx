/* eslint-disable react-refresh/only-export-components */

import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
    isLoggedIn: false,
    user: null
};

// Reducer
function authReducer(state, action) {

    switch (action.type) {

        case "REGISTER":

            localStorage.setItem(
                "shopkartUser",
                JSON.stringify(action.payload)
            );

            return state;

        case "LOGIN":

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(action.payload)
            );

            return {

                ...state,

                isLoggedIn: true,

                user: action.payload

            };

        case "LOGOUT":

            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("loggedInUser");

            return {

                isLoggedIn: false,

                user: null

            };

        default:

            return state;

    }

}

export function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(
        authReducer,
        initialState
    );

    // Keep login after refresh
    useEffect(() => {

        const loginStatus = localStorage.getItem("isLoggedIn");

        const user = JSON.parse(
            localStorage.getItem("loggedInUser")
        );

        if (loginStatus === "true" && user) {

            dispatch({

                type: "LOGIN",

                payload: user

            });

        }

    }, []);

    return (

        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}