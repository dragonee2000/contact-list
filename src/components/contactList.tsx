import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI imports
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, Grid, Modal, Typography } from "@mui/material";

// project imports
import ContactCard from "./contactCard";
import Contact from "models/Contact";
import Avatar from "./nameAvatar";

interface ContactProps {
  contacts: Contact[] | undefined;
  setOpen: (open: boolean) => void;
  setId: (id: string) => void;
}

const MODAL_STYLE = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 15,
  p: 1,
};

const ContactList: React.FC<ContactProps> = ({ contacts, setOpen, setId }) => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [modalContact, setModalContact] = useState<Contact>();

  let navigate = useNavigate();
  const handleUpdate = (id: string) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    setOpen(true);
    setId(id);
  };

  const handleOpenModal = (contact: Contact) => {
    setModalContact(contact);
    setShowModal(true);
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={MODAL_STYLE}>
          <Card sx={{ m: 2, borderRadius: "20px", height: "200px" }}>
            <CardContent
              sx={{ height: "50%" }}
              aria-labelledby="contact card content"
            >
              <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              first_name={modalContact?.first_name || ""}
              last_name={modalContact?.last_name || ""}
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
                sx={{ fontSize: 22, mr: 0.5 }}
                color="text.secondary"
                gutterBottom
                aria-labelledby="first name"
                aria-label={`${modalContact?.first_name}`}
              >
                {modalContact?.first_name}
              </Typography>
              <Typography
                sx={{ fontSize: 22, fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
                aria-labelledby="last name"
                aria-label={`${modalContact?.last_name}`}
              >
                {modalContact?.last_name}
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
                aria-label={`${modalContact?.phone_number}`}
              >
                {modalContact?.phone_number}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              aria-label="email content"
            >
              <Typography
                sx={{ fontSize: 14, mr: 0.5 }}
                color="text.secondary"
                gutterBottom
                aria-labelledby="email"
                aria-label={`${modalContact?.email}`}
              >
                {modalContact?.email}
              </Typography>
            </Box>
          </Box>
        </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
      <Grid container aria-labelledby="contact list">
        {contacts &&
          contacts.map((contact) => (
            <Grid
              item
              sx={{
                [theme.breakpoints.down("sm")]: {
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
              }}
            >
              <ContactCard
                key={contact.id}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onView={handleOpenModal}
                contact={contact}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ContactList;
