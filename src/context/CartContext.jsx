/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useReducer } from "react";


export const CartContext = createContext();

export const initialState = {
    cart: []
};

export function cartReducer(state, action) {

    switch (action.type) {

        case "ADD_TO_CART": {

            const product = state.cart.find(
                item => item.id === action.payload.id
            );

            // If already exists increase quantity
            if (product) {

                return {
                    ...state,

                    cart: state.cart.map(item =>

                        item.id === action.payload.id

                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            }

                            : item

                    )

                };

            }

            // Add new product

            return {

                ...state,

                cart: [

                    ...state.cart,

                    {

                        ...action.payload,

                        quantity: 1

                    }

                ]

            };

        }

        case "INCREASE":

            return {

                ...state,

                cart: state.cart.map(item =>

                    item.id === action.payload

                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }

                        : item

                )

            };

        case "DECREASE":

            return {

                ...state,

                cart: state.cart

                    .map(item =>

                        item.id === action.payload

                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }

                            : item

                    )

                    .filter(item => item.quantity > 0)

            };
        case "CLEAR_CART":

            return {

                ...state,

                cart: []

            };

        default:

            return state;

    }

}

export function CartProvider({ children }) {

    const [state, dispatch] = useReducer(
        cartReducer,
        initialState
    );

    return (

        <CartContext.Provider
            value={{
                state,
                dispatch,
            }}
        >

            {children}

        </CartContext.Provider>

    );
}

