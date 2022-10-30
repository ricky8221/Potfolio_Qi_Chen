import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { validateEmail } from '../utils/helpers';




function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }
  }

  return (
    <>
    <Form className='contactForm'>
      <Form.Group className="mb-3 email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 name" controlId="formBasicPassword"value={name}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"/>
      </Form.Group>
      <Form.Group className="mb-3 message" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="password" placeholder="Message" as="textarea"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
              )}
    </Form>
    </>
  );
}

export default Contact;