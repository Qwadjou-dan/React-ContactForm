import React from "react";
import { Button } from "@material-tailwind/react";
import { EditContactForm } from "./EditContactForm";

const Contacts = ({ contacts, handleDeleteContact, handleEditContact }) => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl mb-10">Contacts List</h1>
        <ol className="grid grid-cols-[repeat(auto-fit,300px)] gap-10 ">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="border p-5 rounded-xl space-y-2 text-nowrap bg-blue-gray-100"
            >
              <li>
                <p>Name: {contact.name}</p>
                <p>Phone: {contact.phone}</p>
                <p>Location: {contact.location}</p>
              </li>
              <div className="flex gap-5">
                <EditContactForm
                  contact={contact}
                  handleEditContact={handleEditContact}
                />
                <Button
                  onClick={() => handleDeleteContact(contact.id)}
                  color="red"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Contacts;
