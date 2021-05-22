import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SignIn = () => {
  const style = {
    width: '400px',
    maxWidth: '600px'
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container style={style} className="mb-5">
      <h2>Please Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;