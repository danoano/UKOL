import React, {createContext, Reducer, useReducer} from "react";
import {PSC} from "../Components"

const initialState = {
  length: 8,
  includeUpperCase: true,
  includeLowerCase: true,
  includeNumbers: true,
  includeSpecialChars: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LENGTH":
      return { ...state, length: action.payload };
    case "TOGGLE_UPPERCASE":
      return { ...state, includeUpperCase: !state.includeUpperCase };
    case "TOGGLE_LOWERCASE":
      return { ...state, includeLowerCase: !state.includeLowerCase };
    case "TOGGLE_NUMBERS":
      return { ...state, includeNumbers: !state.includeNumbers };
    case "TOGGLE_SPECIALCHARS":
      return { ...state, includeSpecialChars: !state.includeSpecialChars };
    default:
      return state;
  }
};


type Action = "TOGGLE_SPECIALCHARS" | "TOGGLE_NUMBERS"



interface State {
  length: number
}

interface Context {
  state: State
  dispatch: React.Dispatch<Action>
  }
export const PasswordSettingsContext = createContext<Context>(
    {
      state: {length: 2},
      dispatch: () => {}
    }
);

export const PasswordSettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <PasswordSettingsContext.Provider value={{ state, dispatch }}>
        {children}
      </PasswordSettingsContext.Provider>
  );
};