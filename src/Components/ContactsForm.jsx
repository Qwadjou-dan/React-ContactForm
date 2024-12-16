import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";

const ContactsForm = ({ handleAddContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleAddUp = (e) => {
    e.preventDefault();
    handleAddContact({ name, phone, location, id: uuid() });
    let NewContact = [{ name, phone, location, id: uuid() }];
    console.log(NewContact);

    setName("");
    setPhone("");
    setLocation("");
  };
  return (
    <div>
      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details...
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleAddUp}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="fullname"
                value={name}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={handleName}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Phone Number
              </Typography>
              <Input
                size="lg"
                type="phone"
                placeholder="+233000000000"
                value={phone}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={handlePhone}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Location
              </Typography>
              <Input
                type="location"
                size="lg"
                placeholder="eg:Accra"
                value={location}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={handleLocation}
              />
            </div>
            <Button className="mt-6" fullWidth onClick={handleAddUp}>
              Add Contact
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactsForm;
