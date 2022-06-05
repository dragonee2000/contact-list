import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MUI imports
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// project imports
import { selectContactList } from "features/contact/contactSlice";
import { useAppSelector } from "helper/hooks";
import Contact from "models/Contact";
import ContactList from "components/contactList";
import PerfectScrollbar from "react-perfect-scrollbar";
import { customInput } from "./Action";

// assets
import AddIcon from "@mui/icons-material/Add";
import "react-perfect-scrollbar/dist/css/styles.css";

const ContactListPage: React.FC = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const getContactData = useAppSelector(selectContactList);
  const [contactData, setContactData] = useState<Contact[]>();
  const [search, setSearch] = useState<string>("");

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
            <InputLabel htmlFor="outlined-adornment-email">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              value={search}
              name="email"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              label="Email"
              inputProps={{
                "aria-label": "email",
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
      <PerfectScrollbar>
        <Box
          sx={{
            display: "flex",
            height: "90vh",
          }}
        >
          <ContactList contacts={contactData} />
        </Box>
      </PerfectScrollbar>
    </Box>
  );
};

export default ContactListPage;
