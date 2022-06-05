import { useState } from "react";

// MUI imports
import { Grid } from "@mui/material";

// project imports
import ContactCard from "./contactCard";
import Contact from "models/Contact";

interface ContactProps {
  contacts: Contact[] | undefined;
}

const ContactList: React.FC<ContactProps> = ({ contacts }) => {

    const handleUpdate = (id: string) => {
        
    }


  return (
    <Grid container display="flex"  >
      {contacts &&
        contacts.map((contact) => (
          <ContactCard 
          key={contact.id} 
          onUpdate={handleUpdate}
          contact={contact} />
        ))}
    </Grid>
  );
};

export default ContactList;
