import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(6);

    //const increment = () => setCounter(counter + 1);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook: <small>{counter}</small></h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
