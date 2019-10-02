import React, { Component } from 'react';

import { FaTelegramPlane, FaSpinner } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newEmail: '',
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newEmail: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const response = await api.get('/', {
      text: 'Allow me to reintroduce myself!',
    });

    console.log(response.data);

    this.setState({ loading: false });
  };

  render() {
    const { newEmail, loading } = this.state;

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
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={20} />
            ) : (
              <FaTelegramPlane color="#fff" size={20} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
