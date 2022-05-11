import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { CheckLoggedIn } from "../CheckLogin";
import { UserContext } from '../providers/UserProvider';
import {getRestraunt} from '../api/getRestrauntAxios';
import {MyComponent} from '../components/GoogleMap';
import {GenreCodeSelector} from '../components/GenreCodeSelector';
import {BudgetCodeSelector} from '../components/BudgetCodeSelector';


import Header from "../components/materialUi/Header";


export const MainHome = () => {

    const theme = createTheme();

    useEffect(() => {
        setIsLoggedIn(CheckLoggedIn());
    },[])

    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
    const [referenceSite, setReferenceSite] = useState("");
    const [genreCode, setGenreCode] = useState("");
    const [bugetCode, setBugetCode] = useState("");

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [url, setUrl] = useState("");
    const [lat, setLat] = useState(35.69575);
    const [lng, setLng] = useState(139.77521);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [genre, setGenre] = useState("");
    const [searched, setSearched] = useState(false);

    const clicked = (e) => {
        e.preventDefault();
        getRestraunt({
            referenceSite:referenceSite,
            genreCode:genreCode,
            bugetCode:bugetCode,
        }).then((response) => {
            if(response.status===200) {
                setSearched(true);
                setName(response.data.name);
                setAddress(response.data.address);
                setUrl(response.data.url);
                setLat(parseFloat(response.data.lat));
                setLng(parseFloat(response.data.lng));
                setCatchPhrase(response.data.catchPhrase);
                setGenre(response.data.genre);
            } else {
                alert("検索結果が見つかりませんでした");
            }
        })
    }



    return (
        <>
            <Header></Header>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    >
                        <MyComponent lat={lat} lng={lng}/>
                    </Grid>

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            >
                            <Typography component="h1" variant="h5">
                                飲食店ランダム検索
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>

                                {searched ? 
                                <>
                                    <h3>{address}</h3>
                                    <a href={url}><h3>{name}</h3></a>
                                    <h3>{lat}</h3>
                                    <h3>{lng}</h3>
                                    <h3>{catchPhrase}</h3>
                                    <h3>{genre}</h3>
                                    {/* size固定したい */}
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={(e)=>clicked(e)}
                                    >
                                    再検索
                                    </Button>
                                    {/* size固定したい */}
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={()=>setSearched(false)}
                                    >
                                    検索条件変更
                                    </Button>
                                </>:
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
                                    onChange={(e)=> setReferenceSite(e.target.value)}
                                    />
                                    <GenreCodeSelector setGenreCode={setGenreCode} />
                                    <BudgetCodeSelector setBugetCode={setBugetCode} />
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={(e)=>clicked(e)}
                                    disabled={!referenceSite}
                                    >
                                    検索
                                    </Button>
                                </>
                                }


                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>

    )
} 