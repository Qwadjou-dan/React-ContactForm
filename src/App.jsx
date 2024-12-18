import React, { useState } from "react";
import Contacts from "./Components/Contacts";
import ContactsForm from "./Components/ContactsForm";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  function handleDeleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  function handleEditContact(id, updatedContact) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === id) {
          return updatedContact;
        } else {
          return contact;
        }
      })
    );
  }

  return (
    <div>
      <div className="flex flex-row  items-start h-full">
        <div className=" h-screen bg-blue-gray-100 p-10">
          <ContactsForm handleAddContact={handleAddContact} />
        </div>
        <div className="bg-gray-300 h-screen w-screen p-10">
          <Contacts
            handleDeleteContact={handleDeleteContact}
            contacts={contacts}
            handleEditContact={handleEditContact}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
