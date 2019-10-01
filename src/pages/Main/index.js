import React from 'react';

import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h1>Em breve a maior espaço de mimos, todo para você!</h1>

      <Form onSubmit={() => {}}>
        <input type="email" placeholder="Quero ser o primeiro a saber" />
        <SubmitButton disabled>
          <FaTelegramPlane color="#fff" size={20} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
