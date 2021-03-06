import * as React from 'react';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import Logogif from '../images/pipelogogif.gif'
import Logo from '../images/pipelogo.png'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  // async function getToken(){
  //   await fetch('https://github.com/login/oauth/authorize?response_type=code&client_id=8a229a05cd1fd0ff5c1e&client_secret=14e53e17644c5a41591440a0b8bddaf2a2d6b500')
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  // }
  // useEffect(()=>{getToken()},[])
//   async function getUserProfileData(){
//     await fetch('https://api.github.com/repos/Kura-Team-6/pipe-in-a-pipe/actions/secrets/CLIENT_ID_OAUTH?scope=admin:org, repo')
//     .then(res => res.json()).then(res => console.log(res))
//     // .then(data=>console.log(data.map(item=>item)))
    

    
//   }
//  useEffect(()=>{getUserProfileData()},[])
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '70vh'
          }}
        >
         <img src={Logo} style={{height:'200px',backgroundColor:'#243543',borderRadius:'30px',padding:'3%'}}/>
         <Typography component="h1" variant="h3">
            Quantum Pipe
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography component="h2" variant="h5">
            Please Enter your Github Account to get started.
          </Typography>
          <GitHub fontSize='large'/>

            <Link href="https://github.com/login/oauth/authorize?client_id=0923bbef1520f84ac3e1&scope=repo">
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Sign In
            </Button>
            </Link>
            <Grid container>

              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
