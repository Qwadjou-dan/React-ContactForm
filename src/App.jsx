import React, { useState } from "react";
import Contacts from "./Components/Contacts";
import ContactsForm from "./Components/ContactsForm";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Daniel",
      phone: +23321245674,
      location: "Takoradi",
    },
    {
      name: "David",
      phone: +23321498645,
      location: "Accra",
    },
    {
      name: "Esther",
      phone: +23302444527,
      location: "Suhum",
    },
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <div className="flex flex-row  items-start h-full">
        <div className=" h-screen bg-blue-gray-100 p-10">
          <ContactsForm handleAddContact={handleAddContact} />
        </div>
        <div className="bg-gray-300 h-screen w-screen p-10">
          <Contacts contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default App;
