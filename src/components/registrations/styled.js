import styled from 'styled-components'

export const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 50px;
  form {
    width: 300px;
    display: grid;
    grid-gap: 10px
  }
  input {
    border: 1px thin black;
    height: 20px;
    font-size: 1rem;
    padding: 5px;
  }
  a {
    &:hover {
      font-weight: bold;
    }
  }
`;

export const ToSignup = styled.div`
  font-size: 15px;
  text-align: right;
  display: inline-block;
`;

export const ErrorsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  width: 300px;
  border: 1px thin red;
  background-color: #FCF1F1;
  :nth-child(1) {
    color: red;
  }
`;