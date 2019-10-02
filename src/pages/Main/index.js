import React, { Component } from 'react';

import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newEmail: '',
  };

  handleInputChange = e => {
    this.setState({ newEmail: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post('', {
      text: 'Allow me to reintroduce myself!',
    });

    console.log(response.data);
  };

  render() {
    const { newEmail } = this.state;

    return (
      <Container>
        <img src={logo} alt="Logo" />
        <h1>Em breve a maior espaço de mimos, todo para você!</h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Quero ser o primeiro a saber"
            value={newEmail}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit">
            <FaTelegramPlane color="#fff" size={20} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
