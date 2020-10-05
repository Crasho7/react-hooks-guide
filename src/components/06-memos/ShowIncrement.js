import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('estoy renderizado otra vez')

    return (
        <button
            className="btn btn-primary"
            onClick={() => increment(7)}
        >
            Incrementar
        </button>
    )
})
