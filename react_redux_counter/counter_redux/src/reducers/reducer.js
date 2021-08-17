import * as actionTypes from '../actions/actions';

const reducer = (state = initialState, action) => {

    // Example using IF statements

/*     if (action.type === "INCREMENT") {
        return {
            ...state, counter: state.counter + 1,
        }
    }
    if (action.type === "DECREMENT") {
        return {
            ...state, counter: state.counter - 1,
        }
    }
    if (action.type === "RESET") {
        return {
            ...state, counter: 0,
        }
    } */

    // Example using SWITCH statements

    switch (action.type) {
        case actionTypes.INCREMENT: 
            return {
                ...state, counter: state.counter + 1,
            }
        case actionTypes.DECREMENT:
            return {
                ...state, counter: state.counter - 1,
            }
        case actionTypes.RESET:
            return {
                ...state, counter: 0,
            }
            
        // default:
        //     return {
        //         ...state, counter: 0,
        //     }
    }

    return state;
};

const initialState = {
    counter: 0,
};

export default reducer;
