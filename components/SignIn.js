import { useState } from "react";
import { useDispatch } from "react-redux";
import { user_login } from "../redux/users/action";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useRouter } from "next/router";

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_USERPOOLID,
  ClientId: process.env.NEXT_PUBLIC_CLIENTID,
});

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const signIn = () => {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const userName = result.idToken.payload.name;
        const userId = result.idToken.payload["cognito:username"];
        const idToken = result.idToken.jwtToken;

        localStorage.setItem("loginFlag", "true");
        localStorage.setItem("userId", `${userId}`);
        localStorage.setItem("idToken", `${idToken}`);
        localStorage.setItem("userName", `${userName}`);

        dispatch(user_login({ userName, userId, loginFlag: true, idToken }));

        router.push("/");
      },
      onFailure: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <div className="main-container">
      <div className="SignIn">
        <h1 style={{ marginBottom: "50px" }}>SingInしてください</h1>
        <TextField
          style={{ marginBottom: "50px" }}
          onChange={changeEmail}
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          style={{ marginBottom: "50px" }}
          onChange={changePassword}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" onClick={signIn} color="primary">
          Login
        </Button>
        <style jsx>
          {`
            .main-container {
              position: relative;
              width: 100vw;
              height: 100vh;

              display: flex;
              justify-content: center;
              align-items: center;
            }
            .SignIn {
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateY(-50%) translateX(-50%);
              width: 20%;
              height: 50%;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SignIn;
