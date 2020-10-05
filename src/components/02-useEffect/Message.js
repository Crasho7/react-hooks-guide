import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, [])

    return (
        <div>
            <h3>Mensaje en la botella</h3>

            <div>
                <p>X: {coords.x}</p>
                <p>Y: {coords.y}</p>
            </div>
        </div>
    )
}