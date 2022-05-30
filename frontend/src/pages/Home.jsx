import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/materialUi/Header";
import HomeImg from "../images/randomFoodMain.jpg";
import classes from "../modules/Home.module.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

export const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (e, url) => {
    e.preventDefault();
    navigate(url);
  };
  return (
    <>
      <Grid
        container
        component="main"
        height="100%"
        className={classes.container}
      >
        <CssBaseline />

        <Grid item xs={12} sm={4} md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "primary.main",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="primary.main"
              className={classes.pStyle}
            >
              飲食店ランダム検索アプリ
            </Typography>

            <img src={HomeImg} width="100%"></img>
          </Box>

          {/* ボタングリッド */}
          <Box
            xs={12}
            sm={4}
            md={12}
            sx={{
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              className={classes.buttonStyle}
              noValidate
              sx={{ mt: 4 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleClick(e, "/random")}
              >
                <div className={classes.margin}>Random Search</div>
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleClick(e, "/login")}
              >
                login
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleClick(e, "/signup")}
              >
                signup
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
