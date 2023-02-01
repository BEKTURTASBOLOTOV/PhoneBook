import React, { Component } from "react";
import "./App.css";
export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <form className="formContact container" onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <input
            className="formInput"
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles "
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <h3>Number</h3>
          <input
            className="formInput"
            placeholder="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button className="formBtn">Add contact</button>
        </form>
        <h2>Contacts</h2>
      </>
    );
  }
}
