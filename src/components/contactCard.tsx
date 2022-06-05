import React from "react";

// MUI imports
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

// project imports
import Contact from "models/Contact";
import Avatar from "./nameAvatar";

interface ContactProps {
  contact: Contact;
  onUpdate: (id: string) => void;
}

const ContactCard: React.FC<ContactProps> = (props) => {
  const { contact, onUpdate } = props;

  const updateContact = (id: string) => {
    onUpdate(id);
  };

  return (
    <Card sx={{ borderRadius: "20px", width: "225px", height: "150px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
            
          }}
        >
            <Box sx={{ display: "flex"}}>
                <Avatar first_name={contact.first_name} last_name={contact.last_name} />
            </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
              <Typography
                sx={{ fontSize: 14, mr: 0.5 }}
                color="text.secondary"
                gutterBottom
              >
                {contact.first_name}
              </Typography>
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
              >
                {contact.last_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
              <Typography
                sx={{ fontSize: 14, mr: 0.5 }}
                color="text.secondary"
                gutterBottom
              >
                {contact.phone_number}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
