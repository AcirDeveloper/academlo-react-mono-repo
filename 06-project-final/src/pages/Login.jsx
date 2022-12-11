import axios from 'axios'
import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then((res) => {
                localStorage.setItem('token', res.data.data.token)
                navigate('/')
            })
            .catch((error) => {
                if (error.response?.status === 401) {
                    alert('Usuario o contraseña incorrectos')
                } else if (error.response?.status === 400) {
                    alert('Faltan datos')
                } else if (error.response?.status === 500) {
                    alert('Error en el servidor')
                } else if (error.response?.status === 404) {
                    alert('Usuario no encontrado')
                }
                console.log(error.response)
            })
    }

    return (
        <div style={{ maxWidth: '500px', margin: '10% auto' }}>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' {...register('email')} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        {...register('password')}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login
