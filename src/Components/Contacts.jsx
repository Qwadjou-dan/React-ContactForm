import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl mb-10">Contacts List</h1>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 h-full w-full ">
          {contacts.map((contact) => (
            <li className="border p-5 rounded-xl space-y-2 text-nowrap bg-blue-gray-100">
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.phone}</p>
              <p>Location: {contact.location}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Contacts;
