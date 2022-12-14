import React, { useState } from 'react;'
import { Form, Button, Alert } from 'react-bootstrap';

import { addUser } from '../utils/API';



const Signup = () => {
    const [userFormData, setUserFormData] =
        useState({ username: '', email: '', password: '' });

    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState
        (false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleSumbit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValid() === false) {
            event.preventDefault();
            event.stopPropagation();

        }
        try {
            const response = await newUser(userFormData);
            if (!response.ok) {
                throw new Error('Wrong!');
            }
            const { user } = await response.json();
            console.log(user);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSumbit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Something went wrong with your signup</Alert>
                <Form.Group>
                    <Form.Label hmtlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Username'
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Username is required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Eamil Address'
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>

                </Form.Group>
                <Button
                    disabled={!(userFormData.username &&
                        userFormData.email && userFormData.password)}
                    type='sumbit'
                    variant='Access Granted'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Signup;