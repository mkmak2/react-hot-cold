import React from "react";
import "./UserAnswers.css";

class UserAnswers extends React.Component {
  render() {
    const { inputs } = this.props.answers;
    return <ul className="input-numbers">{inputs}</ul>;
  }
}

export default UserAnswers;
