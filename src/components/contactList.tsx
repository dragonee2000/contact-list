import { useState } from "react";
import { useNavigate } from "react-router-dom"

// MUI imports
import { Grid } from "@mui/material";

// project imports
import { useAppDispatch } from "helper/hooks";
import { destroy } from "features/contact/contactSlice"
import ContactCard from "./contactCard";
import Contact from "models/Contact";

interface ContactProps {
  contacts: Contact[] | undefined;
}

const ContactList: React.FC<ContactProps> = ({ contacts }) => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

    const handleUpdate = (id: string) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id: string) => {
      dispatch(destroy({id}))
    }


  return (
    <Grid container display="flex"  >
      {contacts &&
        contacts.map((contact) => (
          <ContactCard 
          key={contact.id} 
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          contact={contact} />
        ))}
    </Grid>
  );
};

export default ContactList;
