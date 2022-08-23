import React from "react";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {useState, useContext} from "react";
import { UserContext } from "../../../App";

function LoginForm() {
    // const [logged, setLogged] = useState(false);
    const [message, setMessage] = useState("");

    const setHasToken = useContext(UserContext)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        let email = e.target[0].value;
        let password = e.target[1].value;
        console.log(e);
        
        e.preventDefault();
        fetch("http://localhost:8000/signin", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
    
          //* DIVE PLS
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(email, password, data);
            if (data.auth) {
              // props.setLogged(true);
              let token = data.token;
              localStorage.setItem("token", token) 
              setHasToken(true)
              navigate(`/investors`)
    
            } else {
              // props.setLogged(false)
              setMessage(data.message)
            }
            console.log(data);
          })
          .catch((err) => console.log(err));
      };

  return (
    <Grid container className="loginForm">

      <Grid
        container
        className="form-container"
        xs={12}
        justify-content="space-evenly"
        sx={{ flexDirection: { md: "row" } }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container className="label" xs={12}>
            Email{" "}
          </Grid>
          <Grid item className="label" xs={12}>
            <input type="text" name="email" />
          </Grid>
          <Grid item className="label" md={6} xs={12}>
            Password
          </Grid>
          <Grid container className="password" xs={12}>
            <input type="password" name="password" />
          </Grid>

          <Grid item className="logButton" xs={12}>
            <button id="login-btn">Login</button>
            <p>{message}</p>
          </Grid>
        </form>
      </Grid>
      <Grid className="regContainer" xs={12}>
        <Link to="/register">
          <button id="reg-btn">Register</button>
        </Link>
      </Grid>
            <Link to="/forgot-password">Forgot password?</Link>
      <Grid className="adminContainer" xs={12}></Grid>
    </Grid>
  );
}

export default LoginForm;
