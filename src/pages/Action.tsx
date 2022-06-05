import React, { useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "helper/hooks";

// MUI imports
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";

// third party libraries
import { Formik } from "formik";

// assets
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const customInput = {
  marginTop: 1,
  marginBottom: 1,
  "& > label": {
    top: 23,
    left: 0,
    color: "#000",
    '&[data-shrink="false"]': {
      top: 5,
    },
  },
  "& > div > input": {
    padding: "30.5px 14px 11.5px !important",
  },
  "& legend": {
    display: "none",
  },
  "& fieldset": {
    top: 0,
  },
};

const EditContactPage: React.FC = (props) => {
  const theme = useTheme();
  let { action, id } = useParams();

  const contactData = useAppSelector((state) =>
    state.contact.contactList.find((contact) => contact.id === id)
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setFirstName(contactData?.first_name || "");
    setLastName(contactData?.last_name || "");
    setEmail(contactData?.email || "");
    setPhoneNumber(contactData?.phone_number || "");
  }, [contactData]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "50vw",
          padding: 2,
          borderRadius: 2.5,
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="h1"
            sx={{
              [theme.breakpoints.down("md")]: {
                fontSize: "20px",
              },
              fontSize: "40px",
              WebkitBackgroundClip: "text !important",
              WebkitTextFillColor: "transparent",
              background: "-webkit-linear-gradient(360deg, #ff4c00, #FDA766)",
            }}
          >
            {action === "create" ? "Create Contact" : "Edit Contact"}
          </Typography>
        </Box>
        <Formik
          initialValues={{
            first_name: firstName || "",
            last_name: lastName || "",
            email: email || "",
            phone_number: phoneNumber || "",
          }}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container direction="column">
                <Grid container direction="row" spacing={1}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.first_name && errors.first_name)}
                      sx={customInput}
                    >
                      <InputLabel htmlFor="outlined-adornment-first-name">
                        First Name
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-first-name"
                        value={firstName ? firstName : values.first_name}
                        name="first_name"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          setFirstName(e.target.value);
                        }}
                        label="First Name"
                        inputProps={{}}
                      />
                      {touched.first_name && errors.first_name && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-first-name"
                        >
                          {errors.first_name}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.last_name && errors.last_name)}
                      sx={customInput}
                    >
                      <InputLabel htmlFor="outlined-adornment-last-name">
                        Last Name
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-last-name"
                        value={lastName ? lastName : values.last_name}
                        name="last_name"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          setLastName(e.target.value);
                        }}
                        label="Last Name"
                        inputProps={{
                          "aria-label": "last name",
                        }}
                      />
                      {touched.last_name && errors.last_name && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-last-name"
                        >
                          {errors.last_name}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container direction="column" spacing={1}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      sx={customInput}
                    >
                      <InputLabel htmlFor="outlined-adornment-email">
                        Email
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-email"
                        value={email ? email : values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          setEmail(e.target.value);
                        }}
                        label="Email"
                        inputProps={{
                          "aria-label": "email",
                        }}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email"
                        >
                          {errors.email}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FormControl
                      fullWidth
                      error={Boolean(
                        touched.phone_number && errors.phone_number
                      )}
                      sx={customInput}
                    >
                      <InputLabel htmlFor="outlined-adornment-phone-number">
                        Phone Number
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-phone-number"
                        value={phoneNumber ? phoneNumber : values.phone_number}
                        name="phone_number"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          setPhoneNumber(e.target.value);
                        }}
                        label="Phone Number"
                        inputProps={{
                          "aria-label": "phone number",
                        }}
                      />
                      {touched.phone_number && errors.phone_number && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-phone-number"
                        >
                          {errors.phone_number}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  disableElevation
                  variant={"contained"}
                  size="large"
                  sx={{
                    //   width: 300,
                    mt: 1,
                    color: "#fbe9e7",
                    borderRadius: "10px",
                    backgroundColor: "#ffab91",

                  }}
                >
                  {action === "create" ? "Create" : "Update"}
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default EditContactPage;
