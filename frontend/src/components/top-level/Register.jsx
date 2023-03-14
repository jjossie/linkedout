import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {registerUser} from "../../services/user";
import {setUserToken} from "../../utils/storage";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Alert, CircularProgress, Snackbar} from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        LinkedOut
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setIsError(false);
    setIsLoading(true);
    const registerResult = await registerUser(
      data.get('firstName'),
      data.get('lastName'),
      data.get('email'),
      data.get('password')
    );
    setIsLoading(false);
    if (registerResult.token) {
      setErrorMessage("");
      setUserToken(registerResult.token);
      navigate("/");
    } else {
      setIsError(true);
      switch (registerResult.errorCode) {
        case "EMAIL_ADDRESS_IN_USE":
          setErrorMessage("That email is already in use. 🤡")
          break;
        case "BAD_PASSWORD":
          setErrorMessage("Password is no good. Must be secure or something 🗿")
          break;
        case "REGISTRATION_FAILED":
        default:
          setErrorMessage("Registration failed. 🫠 Make sure you filled out all the fields.")
          break;
      }
    }
  };

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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/*<Grid item xs={12}>*/}
              {/*  <FormControlLabel*/}
              {/*    control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
              {/*    label="I want to receive inspiration, marketing promotions and updates via email."*/}
              {/*  />*/}
              {/*</Grid>*/}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Snackbar
              open={isError}
              autoHideDuration={4000}
              anchorOrigin={{vertical: "top", horizontal: "center"}}
              onClose={() => {
                setIsError(false);
              }}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>
            {isLoading && <CircularProgress style={ProgressStyling}/>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

const ProgressStyling = {
  margin: "0 auto 0 auto"
};