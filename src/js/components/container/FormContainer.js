import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      sheriff_id: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { sheriff_id } = this.state;
    return (
      <form id="article-form">
        <Input
          text="Nombre del Sheriff del fraccionamiento"
          label="Sheriff"
          type="text"
          id="sheriff_id"
          value={sheriff_id}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById("sheriff-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
