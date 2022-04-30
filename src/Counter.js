import React, { useState } from "react";

const Counter = ({initialCount}) => {
    let [number, setNumber] = useState(initialCount)

    const onEncrease = () => {
        setNumber(prev => prev + 1)
    }

    const onDecrease = () => {
        setNumber(prev => prev - 1)
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={()=>{setNumber(initialCount)}}>reset</button>
            <button onClick={onEncrease}>++</button>
            <button onClick={onDecrease}>--</button>
        </>
    )
}

Counter.defaultProps = {
    initialCount: 0
}

export default Counter