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
    >
      <CardContent sx={{ height: "50%" }}>
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
            >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
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
      <CardActions
        sx={{
          height: "50%",
          justifyContent: "flex-end",
          display: hover ? "flex" : "none",
        }}
      >
        <Stack direction="row" spacing={2}>
          <IconButton
            color="primary"
            aria-label="edit-contact"
            onClick={() => updateContact(contact.id)}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="delete-contact"
            onClick={() => deleteContact(contact.id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
