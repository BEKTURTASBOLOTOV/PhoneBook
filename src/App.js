import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contactKey"));
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contactKey", JSON.stringify(contacts));
    }
  }
  addContacts = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    console.log(this.state.contacts);

    this.setState(({ contacts }) => {
      const alreadyInContacts = contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      );
      if (alreadyInContacts) {
        alert("This contact already exists");
        return { contacts };
      }
      return { contacts: [...contacts, newContact] };
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
    return (
      <div>
        <Form onSubmit={this.addContacts} />
        <Filter changeFilter={this.changeFilter} filter={this.state.filter} />
        <Contacts
          deleteContact={this.deleteContact}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}
