import React from "react";

const ContactsItem = ({ name, number, id, deleteContact }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}{" "}
        <button
          onClick={() => {
            deleteContact(id);
          }}
        >
          delete
        </button>
      </p>
    </li>
  );
};

export default ContactsItem;
