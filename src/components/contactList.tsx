import { useState } from "react";
import { useNavigate } from "react-router-dom"

// MUI imports
import { useTheme } from "@mui/material/styles"
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
  const theme = useTheme();

  let navigate = useNavigate();
  const dispatch = useAppDispatch();

    const handleUpdate = (id: string) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id: string) => {
      dispatch(destroy({id}))
    }


  return (
    <Grid container>
      {contacts &&
        contacts.map((contact) => (
          <Grid item sx={{ [theme.breakpoints.down("sm")]: {
            width: "100%",
         },
          [theme.breakpoints.only("sm")]: {
            minWidth: "50%",
          },
          [theme.breakpoints.only("md")]: {
            minWidth: "32.5%",
         },
         [theme.breakpoints.up("md")]: {
          minWidth: "25%",
       },
    }}>
          <ContactCard 
          key={contact.id} 
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          contact={contact} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ContactList;
