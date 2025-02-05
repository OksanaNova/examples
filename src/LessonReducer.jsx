import { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {

    switch(action.type) {

        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };

        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };

        default: 
            return { ...state };
    }
}


function LessonReducer () {

    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <p>ЗНАЧЕНИЕ: { count.firstCounter }</p>

            <button onClick={ () => dispatch({ type: 'increment', value: 2}) } >УВЕЛИЧИТЬ НА 2</button>

            <button onClick={ () => dispatch({ type: 'decrement', value: 4}) }>УМЕНЬШИТЬ НА 4</button>

        </div>
    )
}

export default LessonReducer