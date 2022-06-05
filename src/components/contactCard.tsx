import React, { useState } from "react";

// MUI imports
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

// project imports
import Contact from "models/Contact";
import Avatar from "./nameAvatar";

// assets
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface ContactProps {
  contact: Contact;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContactCard: React.FC<ContactProps> = (props) => {
  const { contact, onUpdate, onDelete } = props;
  const [hover, setHover] = useState(false);

  const updateContact = (id: string) => {
    onUpdate(id);
  };

  const deleteContact = (id: string) => {
    onDelete(id);
  };

  return (
    <Card
      sx={{ m: 2, borderRadius: "20px",
      height: "150px" }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      aria-labelledby="contact card"
    >
      <CardContent sx={{ height: "50%" }} aria-labelledby="contact card content">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              first_name={contact.first_name}
              last_name={contact.last_name}
              aria-labelledby="avatar for user"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              aria-label="name content"
            >
              <Typography
                sx={{ fontSize: 14, mr: 0.5 }}
                color="text.secondary"
                gutterBottom
                aria-labelledby="first name"
                aria-label={`${contact.first_name}`}
              >
                {contact.first_name}
              </Typography>
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
                aria-labelledby="last name"
                aria-label={`${contact.last_name}`}
              >
                {contact.last_name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              aria-label="phone number content"
            >
              <Typography
                sx={{ fontSize: 14, mr: 0.5 }}
                color="text.secondary"
                gutterBottom
                aria-labelledby="phone number"
                aria-label={`${contact.phone_number}`}
              >
                {contact.phone_number}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          height: "50%",
          justifyContent: "flex-end",
          display: hover ? "flex" : "none",
        }}
        aria-label="contact-card-action"
      >
        <Stack direction="row" spacing={2}>
          <IconButton
            color="primary"
            aria-label="edit-contact"
            onClick={() => updateContact(contact.id)}
            aria-labelledby="contact-card-action-edit"
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="delete-contact"
            onClick={() => deleteContact(contact.id)}
            aria-labelledby="contact-card-action-delete"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
