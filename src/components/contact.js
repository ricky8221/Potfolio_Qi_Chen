import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { validateEmail } from '../utils/helpers';

function Form() {
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
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
        setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!message || !name) {
      setErrorMessage(
        `Message and name it's required ${name}`
      );
      return;
    }
    alert(`Hello ${name}! Thank you for the message!`);

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='contactBody'>
      <h1>Contact</h1>
      <form className="form contactForm">
        <input
          className='email'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          className='name'
          value={name}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className='message'
          value={message}
          name="password"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Message"
        />
        <Button variant="primary" type="button" onClick={handleFormSubmit} className='submit'>Submit</Button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
