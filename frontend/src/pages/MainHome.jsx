import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { CheckLoggedIn } from "../CheckLogin";
import { UserContext } from "../providers/UserProvider";
import { getRestraunt } from "../api/getRestrauntAxios";
import { GoogleMapComponent } from "../components/GoogleMap";
import { GenreCodeSelector } from "../components/GenreCodeSelector";
import { BudgetCodeSelector } from "../components/BudgetCodeSelector";

import { getGeocode } from "../api/getGeocode";

import Header from "../components/materialUi/Header";

export const MainHome = () => {
  const theme = createTheme();

  useEffect(() => {
    setIsLoggedIn(CheckLoggedIn());
  }, []);

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [referenceSite, setReferenceSiteInput] = useState("");
  const [genreCode, setGenreCode] = useState("");
  const [bugetCode, setBugetCode] = useState("");

  const [referenceSiteLat, setReferenceSiteLat] = useState("");
  const [referenceSiteLng, setReferenceSitelng] = useState("");

  const [resultRestrauntName, setResultRestrauntName] = useState("");
  const [resultAddress, setResultAddress] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [resultLat, setResultLat] = useState(35.69575);
  const [resultlng, setResultLng] = useState(139.77521);
  const [resultCatchPhrase, setResultCatchPhrase] = useState("");
  const [resultGenre, setResultGenre] = useState("");
  const [searched, setSearched] = useState(false);

  const clicked = (e) => {
    e.preventDefault();
    getRestraunt({
      referenceSiteLat: referenceSiteLat,
      referenceSiteLng: referenceSiteLng,
      genreCode: genreCode,
      bugetCode: bugetCode,
    }).then((response) => {
      if (response.status === 200) {
        setSearched(true);
        setResultRestrauntName(response.data.name);
        setResultAddress(response.data.address);
        setResultUrl(response.data.url);
        setResultLat(parseFloat(response.data.lat));
        setResultLng(parseFloat(response.data.lng));
        setResultCatchPhrase(response.data.catchPhrase);
        setResultGenre(response.data.genre);
      } else {
        alert("検索結果が見つかりませんでした");
      }
    });
  };

  const handleOnblur = (e) => {
    const address = e.target.value;
    //空文字判定
    if (address) {
      getGeocode({
        address: address,
      }).then((res) => {
        console.log(res);
        setReferenceSiteLat(res.data.lat);
        setReferenceSitelng(res.data.lng);
      });
    }
  };

  return (
    <>
      <Header></Header>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <GoogleMapComponent
              referenceSiteLat={referenceSiteLat}
              referenceSiteLng={referenceSiteLng}
              resultLat={resultLat}
              resultlng={resultlng}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                飲食店ランダム検索
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {searched ? (
                  <>
                    <h3>{resultAddress}</h3>
                    <a href={resultUrl}>
                      <h3>{resultRestrauntName}</h3>
                    </a>
                    <h3>{resultLat}</h3>
                    <h3>{resultlng}</h3>
                    <h3>{resultCatchPhrase}</h3>
                    <h3>{resultGenre}</h3>
                    {/*TODO: size固定したい */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={(e) => clicked(e)}
                    >
                      再検索
                    </Button>
                    {/*TODO: size固定したい */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() => setSearched(false)}
                    >
                      検索条件変更
                    </Button>
                  </>
                ) : (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="referenceSite"
                      label="基準地"
                      name="referenceSite"
                      autoComplete="email"
                      autoFocus
                      onChange={(e) => setReferenceSiteInput(e.target.value)}
                      onBlur={(e) => handleOnblur(e)}
                    />
                    <GenreCodeSelector setGenreCode={setGenreCode} />
                    <BudgetCodeSelector setBugetCode={setBugetCode} />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={(e) => clicked(e)}
                      disabled={!referenceSiteLat || !referenceSiteLng}
                    >
                      検索
                    </Button>
                    <h3>{referenceSiteLat}</h3>
                    <h3>{referenceSiteLng}</h3>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
