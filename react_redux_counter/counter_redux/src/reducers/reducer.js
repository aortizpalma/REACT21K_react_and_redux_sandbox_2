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
        case actionTypes.INCREMENT_X: 
            return {
                ...state, counter: state.counter + action.value,
            }
        case actionTypes.DECREMENT:
            return {
                ...state, counter: state.counter - 1,
            }
        case actionTypes.DECREMENT_X:
            return {
                ...state, counter: state.counter - action.value,
            }
        case actionTypes.RESET:
            return {
                ...state, counter: 0,
            }
        
        // APPROACH TO STORE RESULTS USING CONCAT
        // case actionTypes.STORE_RESULT:
        //     return {
        //         ...state, results: state.results.concat({id:new Date(), value: state.counter}),
        //     }

        // APPROACH TO STORE RESULTS USING SPREAD OPERATOR
        case actionTypes.STORE_RESULT:
            return {
                ...state, results: [...state.results, { value: state.counter, id: new Date() }],
            }
        case actionTypes.REMOVE_RESULT:
            const updatedArray = state.results.filter((item) => item.id !== action.item);
            return {
                ...state, results: updatedArray,
            }
            

    }

    return state;
};

const initialState = {
    counter: 0,
    results: [
        {
        id: 1,
        value: 10,
        },
        {
        id: 2,
        value: 9,
        },
        {
        id: 3,
        value: 8,
        },
],
};

export default reducer;
