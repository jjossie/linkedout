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
import {loginUser} from "../services/user";
import {setUserToken} from "../utils/storage";

export default function LoginPage() {
  // Add 4 state variables:
  //    email
  //    password
  //    isLoading
  //    isError
  const [email, setEmail]         = useState(null);
  const [password, setPassword]   = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError]     = useState(false);
  const navigate                  = useNavigate();

  // The button should trigger this function
  const handleLoginUser = async () => {
    // This function should call the user service login function
    setIsError(false);
    setIsLoading(true);
    const token = await loginUser(email, password);
    setIsLoading(false);
    if (token) {
      setUserToken(token);
      navigate("/");
    } else
      setIsError(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    //   setIsError(true);
    // }, 2000);
  };

  const ProgressStyling = {
    margin: "0 auto 0 auto"
  };


  return (
    <Container>
      <Box component="form" style={BoxStyle}>
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
        <Button onClick={handleLoginUser} disabled={isLoading}>Submit</Button>
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
};
