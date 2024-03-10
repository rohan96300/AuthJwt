import React from 'react'
import { useState } from 'react'
import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit');
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>

        <Form onSubmit={submitHandler}>
            <FormGroup controlId='email' className='py-2'>
                <FormLabel>Email </FormLabel>
                <FormControl
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></FormControl>
            </FormGroup>

            <FormGroup controlId='password' className='py-2'>
                <FormLabel>Password </FormLabel>
                <FormControl
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></FormControl>
            </FormGroup>

            <Button type='submit' variant='primary' className='mt-2'>
                Login
            </Button>
        </Form>
    </FormContainer>
  )
}

export default SignInScreen