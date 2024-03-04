import React, { Component } from "react";
import Controls from "./Controls";
import Output from "./Output";

class Body extends Component {
  state = {
    HOffSet: 5,
    VOffSet: 5,
    Blur: 10,
    Spread: 0,
    Opacity: 0.4,
    Color: "#000000",
    Inset: "",
  };

  handleCssProps = ({ target }) => {
    const { name, value } = target;
    const { state } = this;

    if (target.type === "checkbox") {
      state[name] = target.checked ? "inset" : "";
    } else {
      state[name] = value;
    }

    this.setState({ state });
  };

  render() {
    const { state } = this;

    return (
      <div className="main-body">
        <Output code={state} />
        <Controls onChange={this.handleCssProps} code={state} />
      </div>
    );
  }
}

export default Body;
