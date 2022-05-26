import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";

import styles from "../../modules/Header.module.css";

import { UserContext } from "../../providers/UserProvider";

export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("session");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
          <Button color="inherit" size="large" onClick={() => navigate("/")}>
            <Typography
              variant="h6"
              component="div"
              className={styles.mainLogo}
            >
              Random
            </Typography>
          </Button>
          {isLoggedIn ? (
            <>
              <Typography
                align="right"
                variant="subtitle2"
                component="div"
                sx={{ flexGrow: 10 }}
                pr={1}
              >
                ようこそ、{sessionStorage.getItem("name")}さん
              </Typography>
              <Button
                disableElevation
                variant="contained"
                size="large"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </>
          ) : (
            <Grid container>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  disableElevation
                  variant="contained"
                  align="right"
                  size="large"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  disableElevation
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/signup")}
                >
                  SignUp
                </Button>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
