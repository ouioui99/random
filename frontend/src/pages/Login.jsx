import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { UserContext, LoadContext } from "../providers/UserProvider";
import { postLogin } from "../api/userAxios";
import { useNavigate } from "react-router-dom";

import Header from "../components/materialUi/Header";

import { CheckLoggedIn } from "../CheckLogin";

export const Login = () => {
  const theme = createTheme();

  const { setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    postLogin({
      name: name,
      password: password,
    }).then((response) => {
      if (response.status === 200) {
        navigate("/");
        sessionStorage.setItem("session", "sessionID");
        sessionStorage.setItem("name", response.data.name);
        setIsLoggedIn(CheckLoggedIn());
      }
    });

    e.preventDefault();
  };

  return (
    <>
      <Header></Header>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!name || !password ? true : false}
                sx={{ mt: 5, mb: 2 }}
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
