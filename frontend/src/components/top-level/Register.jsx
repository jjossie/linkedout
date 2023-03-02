import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  TextField,
  Box,
  Button,
  Container,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import {registerUser} from "../../services/user";
import {setUserToken} from "../../utils/storage";
import LinkButton from "../LinkButton";

export default function RegisterPage() {
  // Add 4 state variables:
  //    email
  //    password
  //    isLoading
  //    isError
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // The button should trigger this function
  const handleRegisterUser = async () => {
    // This function should call the user service login function
    setIsError(false);
    setIsLoading(true);
    const token = await registerUser(firstName, lastName, email, password);
    setIsLoading(false);
    if (token) {
      setUserToken(token);
      navigate("/");
    } else
      setIsError(true);
  };

  const ProgressStyling = {
    margin: "0 auto 0 auto"
  };


  return (
    <Container>
      <Box component="form" style={BoxStyle}>
        <h2>Register</h2>
        <TextField
          id="firstName"
          label="First Name"
          variant="filled"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          disabled={isLoading}
          error={(firstName != null && firstName === "")}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="filled"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          disabled={isLoading}
          error={(lastName != null && lastName === "")}
        />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={isLoading}
          error={(email != null && email === "")}
        />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          required
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          disabled={isLoading}
          error={isError}
        />
        <Button variant="contained" onClick={handleRegisterUser} disabled={isLoading}>Create Account</Button>
        <Snackbar
          open={isError}
          autoHideDuration={2000}
          anchorOrigin={{vertical: "top", horizontal: "center"}}
          onClose={() => {
            setIsError(false);
          }}
        >
          <Alert severity="error">You don't belong here 🤨</Alert>
        </Snackbar>
        {isLoading && <CircularProgress style={ProgressStyling}/>}
        <LinkButton key="login" to="/login" disabled={isLoading}>Have an account? Login</LinkButton>
      </Box>
    </Container>
  );
}

const BoxStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "400px",
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  gap: "1em"
};
