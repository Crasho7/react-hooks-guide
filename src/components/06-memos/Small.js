import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('llamada al small')

    return (
        <small>
            {value}
        </small>
    )
});