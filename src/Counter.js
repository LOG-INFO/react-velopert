import React, { useReducer, useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

const Counter = ({ initialCount }) => {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
            <button onClick={onIncrease}>++</button>
            <button onClick={onDecrease}>--</button>
        </>
    )
}

Counter.defaultProps = {
    initialCount: 0
}

export default React.memo(Counter)