import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MUI imports
import { useTheme } from "@mui/material/styles";
import {
  Alert,
  AlertTitle,
  Collapse,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

// project imports
import { selectContactList } from "features/contact/contactSlice";
import { useAppSelector } from "helper/hooks";
import Contact from "models/Contact";
import ContactList from "components/contactList";
import PerfectScrollbar from "react-perfect-scrollbar";
import { customInput } from "./Action";
import { useAppDispatch } from "helper/hooks";
import { destroy } from "features/contact/contactSlice";

// assets
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import "react-perfect-scrollbar/dist/css/styles.css";

const BUTTON_STYLE = {
  color: "#fbe9e7",
  borderRadius: "15px",
  backgroundColor: "#ffab91",
  mr: 1,
  "&:hover": {
    backgroundColor: "#fbe9e7",
    color: "#ffab91",
  }
}

const ContactListPage: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const getContactData = useAppSelector(selectContactList);
  const [contactData, setContactData] = useState<Contact[]>();
  const [search, setSearch] = useState<string>("");

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const data = getContactData.filter((item) =>
      parseInt(search)
        ? item.phone_number.toLowerCase().includes(search)
        : item.first_name.toLowerCase().includes(search) ||
          item.last_name.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search)
    );
    setContactData(data);
  }, [getContactData, search]);

  return (
    <Box sx={{ mt: "48px", padding: "5vw", width: "100vw" }}>
      <Grid
        container
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
          [theme.breakpoints.up("xs")]: {
            flexDirection: "row",
          },
        }}
      >
        <Grid item xl={11} lg={11} md={11} xs={12}>
          <FormControl fullWidth sx={customInput}>
            <InputLabel htmlFor="search">Search</InputLabel>
            <OutlinedInput
              id="search"
              value={search}
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              label="search"
              inputProps={{
                "aria-label": "search",
              }}
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xl={1}
          lg={1}
          md={1}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            sx={{
              [theme.breakpoints.down("md")]: { display: "none" },
              backgroundColor: "#6b0f1a",
              backgroundImage:
                "linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)",
              color: "#fff",
              ml: 2,
            }}
            aria-label="edit-contact"
            onClick={() => navigate("/create")}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
          <FormControl fullWidth sx={customInput}>
            <Button
              disableElevation
              variant={"contained"}
              size="large"
              sx={{
                [theme.breakpoints.up("md")]: { display: "none" },
                color: "#fbe9e7",
                borderRadius: "10px",
                backgroundColor: "#6b0f1a",
                backgroundImage:
                  "linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)",
              }}
              onClick={() => navigate("/create")}
            >
              Add
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity={"error"}
          action={
            <Stack direction="row">
              <Button
                aria-label="confirm-delete"
                disableElevation
                variant={"contained"}
                size="large"
                sx={BUTTON_STYLE}
                onClick={() => {
                  setOpen(false);
                  dispatch(destroy({ id }));
                  setId("");
                }}
              >
                Yes
              </Button>
              <Button
                aria-label="not-confirm-delete"
                disableElevation
                variant={"contained"}
                size="large"
                sx={BUTTON_STYLE}
                onClick={() => {
                  setOpen(false);
                  setId("");
                }}
              >
                No
              </Button>
            </Stack>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Confirmation</AlertTitle>
          {/* {hasErrors && Object.keys(err).map(key => `${key}\n`)} */}
          Are you sure you want to delete?
        </Alert>
      </Collapse>
      <PerfectScrollbar>
        <Box
          sx={{
            display: "flex",
            height: "90vh",
          }}
        >
          <ContactList
            contacts={contactData}
            setOpen={(open) => setOpen(open)}
            setId={(id) => setId(id)}
          />
        </Box>
      </PerfectScrollbar>
    </Box>
  );
};

export default ContactListPage;
