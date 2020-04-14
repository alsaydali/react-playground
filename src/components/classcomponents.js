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
  render() {
    const { text } = this.props;
    return (
      <>
        <div>Hi I am a Class Component {text}</div>
        {this.state.toggle && <p>This will hide and show</p>}

        <button onClick={this.toggle}>Show / Hid</button>
      </>
    );
  }
}

export default ClassComponents;
