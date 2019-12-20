import React, { Component } from 'react';
import styled from 'styled-components'
import {Button} from '../utils/Buttons'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      coinSymbol: '',
     };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value.toUpperCase()
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getCoin(this.state.coinSymbol)
  }

  render() {
    const {coinSymbol} = this.state
    return (
      <FormContainer>
        <h3>Coin Lookup:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='enter coin symbol'
            type='text'
            name='coinSymbol'
            value={coinSymbol}
            onChange={this.handleChange}
          />
           <Button 
          type="submit"
          width='100%'
          height='35px'
          font='12px'
          >
            Look Up
          </Button>
        </form>
      </FormContainer>
    );
  }
}

export default Form;

//styled
const FormContainer = styled.div`
  display: grid;

  form {
    width: 300px;
    display: grid;
    grid-template-columns: 250px 100px;
    grid-gap: 10px
  }
  input {
    border: 1px thin black;
    height: 20px;
    font-size: 1rem;
    padding: 5px;
  }
  `;