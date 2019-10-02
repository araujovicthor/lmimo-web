import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  margin: 80px auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 50%;
  }

  h1 {
    padding: 10px;
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 80%;

  input {
    display: flex;
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #845ec2;
  border: 0;
  padding: 12px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
