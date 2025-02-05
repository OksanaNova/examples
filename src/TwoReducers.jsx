import { useReducer } from "react";


const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment': 
            return state +1;
        case 'decrement':
            return state -1;
        default:
            return state
    }
}

function TwoReducers () {

    const [count, dispatch] = useReducer(reducer, initialState);

    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div className="container">

            <div className="counter">
                <p><b>Counter1:</b> {count}</p>
                <button onClick={() => dispatch('increment')} >+</button>
                <button onClick={() => dispatch('decrement')} >-</button>
            </div>

            <div className="counter">
                <p><b>Counter2:</b> {count2}</p>
                <button onClick={() => dispatch2('decrement')} >-</button>
                <button onClick={() => dispatch2('increment')} >+</button>
            </div>
            
        </div>
    )
}

export default TwoReducers;