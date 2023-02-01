import React from "react";
import ContactsItem from "./ContactsItem";

const Contacts = ({ contacts, deleteContact }) => {
  const contactElem = contacts.map((item) => {
    return (
      <ContactsItem key={item.id} {...item} deleteContact={deleteContact} />
    );
  });
  return <ul>{contactElem}</ul>;
};

export default Contacts;
