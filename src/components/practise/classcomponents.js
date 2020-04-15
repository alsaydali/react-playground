import React, { Component } from "react";
class ClassComponents extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("did");
  }
  comp;
  state = {
    toggle: true,
  };
  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  submit = () => {
    console.log(this.text.value);
  };
  render() {
    const { text } = this.props;
    return (
      <>
        <div>Hi I am a Class Component {text}</div>
        {this.state.toggle && <p>This will hide and show</p>}

        <button onClick={this.toggle}>Show / Hid</button>
        <input
          type="text"
          ref={(input) => {
            this.text = input;
          }}
        />
        <button onClick={this.submit}>show value</button>
      </>
    );
  }
}

export default ClassComponents;
