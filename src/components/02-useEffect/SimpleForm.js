import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formData

    useEffect(() => {
        console.log('hola');
    }, []);

    useEffect(() => {
        console.log('formState cambia');
    }, [formData]);

    useEffect(() => {
        console.log('email cambia');
    }, [email]);

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setFormData({ ...formData, [name]: value })
    };

    return (
        <div>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre aqui'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Tu email aqui'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {name === '123' && <Message />}
        </div>
    )
}
