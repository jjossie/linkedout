import React, {useCallback, useEffect, useState} from "react";
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
import {loginUser} from "../../services/user";
import {getUserToken, setUserToken} from "../../utils/storage";
import LinkButton from "../LinkButton";

export default function LoginPage() {
  // Add 4 state variables:
  //    email
  //    password
  //    isLoading
  //    isError
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserToken() && navigate("/");
  }, []);

  useEffect(() => {
    console.log(email);
  }, [email]);

  // The button should trigger this function
  const handleLoginUser = useCallback(
    async (event) => {
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
    },
    [email, password, navigate]
    );

  const ProgressStyling = {
    margin: "0 auto 0 auto"
  };


  return (
    <Container>
      <Box component="form" style={BoxStyle}>
        <h3>Login</h3>
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
        <Button variant="contained" onClick={handleLoginUser} disabled={isLoading}>Login</Button>
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
        <LinkButton to="/register" key="register" disabled={isLoading}>Don't have an account? Register</LinkButton>
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
