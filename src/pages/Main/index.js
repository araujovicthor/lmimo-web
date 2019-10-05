import React, { Component } from 'react';

import axios from 'axios';

import { FaTelegramPlane, FaSpinner } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

// import api from '../../services/api';

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

    const { newEmail } = this.state;
    this.setState({ loading: true });

    const baseURL =
      'https://hooks.slack.com/services/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';
    const data = {
      text: `Tem gente ansiosa pro lançamento: ${newEmail}`,
    };
    await axios.post(baseURL, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post['Content-Type'];
          return data;
        },
      ],
    });

    this.setState({ loading: false, newEmail: '' });
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
