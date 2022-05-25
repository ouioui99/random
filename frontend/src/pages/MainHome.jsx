import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//mui系
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import theme from "../theme/theme";
import textFieldTheme from "../theme/component/textFieldTheme";

import { CheckLoggedIn } from "../CheckLogin";
import { UserContext } from "../providers/UserProvider";
import { getRestraunt } from "../api/getRestrauntAxios";

import { GoogleMapComponent } from "../components/GoogleMap";
import { GenreCodeSelector } from "../components/GenreCodeSelector";
import { BudgetCodeSelector } from "../components/BudgetCodeSelector";
import { RangeSelector } from "../components/RangeSelector";
import { TextInput } from "../components/TextInput";
import Header from "../components/materialUi/Header";

export const MainHome = () => {
  useEffect(() => {
    setIsLoggedIn(CheckLoggedIn());
  }, []);

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [genreCode, setGenreCode] = useState("");
  const [bugetCode, setBugetCode] = useState("");
  const [range, setRange] = useState(2);

  const [referenceSitePosition, setReferenceSitePosition] = useState({});
  const [resultSitePosition, setResultSitePosition] = useState({});

  const [resultRestrauntName, setResultRestrauntName] = useState("");
  const [resultAddress, setResultAddress] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [resultCatchPhrase, setResultCatchPhrase] = useState("");
  const [resultGenre, setResultGenre] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [restrauntImage, setRestrauntImage] = useState("");

  const [searched, setSearched] = useState(false);

  //初回レンダリング検知state
  const [rendering, setRendering] = useState(false);

  //stateリセット関数
  const resetState = (e) => {
    e.preventDefault();
    setRendering(false);
    setSearched(false);
    setGenreCode("");
    setBugetCode("");
    setReferenceSitePosition({});
    setResultSitePosition({});
    setResultRestrauntName("");
    setResultAddress("");
    setResultCatchPhrase("");
    setResultGenre("");
    setRange(1);
    setRestrauntImage("");
  };

  const clicked = (e) => {
    e.preventDefault();
    getRestraunt({
      referenceSiteLat: referenceSitePosition.lat,
      referenceSiteLng: referenceSitePosition.lng,
      genreCode: genreCode,
      bugetCode: bugetCode,
      range: range,
    }).then((response) => {
      if (response.status === 200) {
        setSearched(true);
        setResultRestrauntName(response.data.name);
        setResultAddress(response.data.address);
        setResultUrl(response.data.url);
        setResultSitePosition({
          lat: parseFloat(response.data.lat),
          lng: parseFloat(response.data.lng),
        });
        setResultCatchPhrase(response.data.catchPhrase);
        setResultGenre(response.data.genre);
        setResultCount(response.data.resultCount);
        setRestrauntImage(response.data.restrauntImage);
      } else {
        resetState(e);
        alert("検索結果が見つかりませんでした");
      }
    });
  };

  const test = {
    "& .MuiOutlinedInput-input": {
      borderColor: "blue",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Header />

          <Grid item xs={12} sm={4} md={7}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <div style={theme.mixins.toolbar} />
              <GoogleMapComponent
                referenceSitePosition={referenceSitePosition}
                resultSitePosition={resultSitePosition}
                rendering={rendering}
                setRendering={setRendering}
                searched={searched}
                range={range}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={5}>
            <Box
              sx={{
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {searched ? (
                <>
                  {/* 大きさを固定する */}
                  <Paper
                    elevation={0}
                    sx={{ display: { md: "block", xs: "none" } }}
                  >
                    <div style={theme.mixins.toolbar} />
                    <div style={theme.mixins.toolbar} />
                    <Box
                      component="img"
                      alt=""
                      src={restrauntImage}
                      sx={{ width: "200px" }}
                    />
                  </Paper>

                  <Box component="form" noValidate sx={{ mt: 4 }}>
                    <a href={resultUrl}>
                      <h4>{resultRestrauntName}</h4>
                    </a>
                    <h4>{resultAddress}</h4>
                    <h4>{resultCatchPhrase}</h4>
                    <h4>{resultGenre}</h4>
                    <h4>該当件数/{resultCount}件</h4>

                    {/*TODO: size固定したい */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      endIcon={<AutorenewIcon />}
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
                      endIcon={<SettingsBackupRestoreIcon />}
                      onClick={(e) => resetState(e)}
                    >
                      検索条件変更
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Paper
                    elevation={0}
                    sx={{ display: { md: "block", xs: "none" } }}
                  >
                    <div style={theme.mixins.toolbar} />
                    <div style={theme.mixins.toolbar} />
                  </Paper>

                  <Typography component="h1" variant="h5">
                    飲食店ランダム検索
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 5 }}>
                    <TextInput
                      referenceSitePosition={referenceSitePosition}
                      setReferenceSitePosition={setReferenceSitePosition}
                      theme={textFieldTheme}
                    />
                    <GenreCodeSelector
                      genreCode={genreCode}
                      setGenreCode={setGenreCode}
                      theme={test}
                    />
                    <BudgetCodeSelector
                      bugetCode={bugetCode}
                      setBugetCode={setBugetCode}
                    />
                    <RangeSelector range={range} setRange={setRange} />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={(e) => clicked(e)}
                      endIcon={<SearchIcon />}
                      disabled={
                        !referenceSitePosition.lat && !referenceSitePosition.lng
                      }
                    >
                      検索
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
