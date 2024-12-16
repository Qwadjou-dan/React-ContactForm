import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export function EditContactForm({ contact, handleEditContact }) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [location, setLocation] = useState(contact.location);

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

    let newContact = { name, phone, location, id: contact.id };

    handleEditContact(contact.id, newContact);

    setName("");
    setPhone("");
    setLocation("");
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Edit
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit contact Info.</DialogHeader>
        <DialogBody>
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
            <Button
              className="mt-6"
              fullWidth
              type="submit"
              onClick={handleOpen}
            >
              Edit Contact
            </Button>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
