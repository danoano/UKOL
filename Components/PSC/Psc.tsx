import React, { useContext } from "react";
import {PasswordSettingsContext} from "@/pages";


const PasswordSettingsForm = () => {
    const { state, dispatch } = useContext(PasswordSettingsContext);

    const handleLengthChange = (e) => {
        dispatch({ type: "SET_LENGTH", payload: e.target.value });
    };
    const handleUppercaseToggle = () => {
        dispatch({ type: "TOGGLE_UPPERCASE" });
    };
    const handleLowercaseToggle = () => {
        dispatch({ type: "TOGGLE_LOWERCASE" });
    };
    const handleNumbersToggle = () => {
        dispatch({ type: "TOGGLE_NUMBERS" });
    };
    const handleSpecialCharsToggle = () => {
        dispatch({ type: "TOGGLE_SPECIALCHARS" });
    };

    return (
        <form>
            <label>
                Délka hesla:
                <input
                    type="number"
                    value={state.length}
                    onChange={handleLengthChange}
                />
            </label>
            <label>
                velká písmena:
                <input
                    type="checkbox"
                    checked={state.includeUpperCase}
                    onChange={handleUppercaseToggle}
                />
            </label>
        </form>
    );
};

export default PasswordSettingsForm;