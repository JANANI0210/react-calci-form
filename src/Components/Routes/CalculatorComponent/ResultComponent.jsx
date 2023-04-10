import React, { Component } from "react";

export class ResultComponent extends Component {
  render() {
    let { result } = this.props;

    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
