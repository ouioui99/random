import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import textFieldTheme from "../theme/component/textFieldTheme";

import { UserContext } from "../providers/UserProvider";
import { postSignup } from "../api/userAxios";
import { useNavigate } from "react-router-dom";

import Header from "../components/materialUi/Header";

export const Signup = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const handleSubmit = (e) => {
    if (password === passwordConf) {
      postSignup({
        name: name,
        password: password,
      }).then((response) => {
        if (response.status === 200) {
          navigate("/");
          setIsLoggedIn(true);
        }
      });
    } else {
      alert("NG");
    }

    e.preventDefault();
  };

  return (
    <>
      <Header></Header>

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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              sx={textFieldTheme}
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
              sx={textFieldTheme}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConf"
              label="Password Confirm"
              type="password"
              id="passwordConf"
              autoComplete="current-password"
              onChange={(e) => setPasswordConf(e.target.value)}
              sx={textFieldTheme}
            />
            {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!name || !password || !passwordConf ? true : false}
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
