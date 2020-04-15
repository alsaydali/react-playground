import React, { Component } from "react";

class Form extends Component {
  state = {
    value: "hello",
  };
  updateState = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  submit = () => {
    console.log(this.text.value);
  };
  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <input
          type="text"
          ref={(input) => {
            this.text = input;
          }}
        />
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateState}
        />
        <button onClick={this.submit}>show value</button>
      </>
    );
  }
}

export default Form;
