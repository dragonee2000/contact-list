import React, { useState, useEffect } from "react";

// MUI imports
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// project imports
import { selectContactList } from "features/contact/contactSlice";
import { useAppSelector } from "helper/hooks";
import Contact from "models/Contact";
import ContactList from "components/contactList";
import PerfectScrollbar from "react-perfect-scrollbar";

// assets
import "react-perfect-scrollbar/dist/css/styles.css";

const ContactListPage: React.FC = (props) => {
  const getContactData = useAppSelector(selectContactList);
  const [contactData, setContactData] = useState<Contact[]>();

  useEffect(() => {
    console.log("passes");
    setContactData(getContactData);
    console.log(getContactData);
  }, [getContactData]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        padding: "5vw",
      }}
    >
      <PerfectScrollbar>
        <ContactList contacts={contactData} />
      </PerfectScrollbar>
    </Box>
  );
};

export default ContactListPage;
