import React, { useEffect } from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('cambio email');
    }, [email])

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook</h1>
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
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='****'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button
                type='submit'
                className='btn btn-primary'
            >Enviar</button>
        </form>
    )
}
