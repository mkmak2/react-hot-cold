import React from "react";

import "./UserInput.css";

class UserInput extends React.Component {
  inputsRef = React.createRef();

  provideInput = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    console.log(this.inputsRef.current.value);

    const guess = {
      inputs: parseInt(this.inputsRef.current.value)
    };

    this.props.enterInput(guess);
    event.currentTarget.reset();
  };

  render() {
    //return <div className="input">User Input!!!</div>;
    return (
      <form className="user-input" onSubmit={this.provideInput}>
        <input
          name="inputs"
          ref={this.inputsRef}
          type="number"
          placeholder="Enter your guess"
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
}

export default UserInput;
