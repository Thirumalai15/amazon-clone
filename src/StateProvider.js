import React , { createContext, useContext, useReducer } from 'react';

//Prepares the datalayer
export const StateContext = createContext();

//providing the datalayer to all the contents in the app
export const StateProvider = ({ reducer , initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);