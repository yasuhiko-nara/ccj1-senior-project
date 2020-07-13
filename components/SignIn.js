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
        localStorage.setItem("loginFlag", "true");
        localStorage.setItem("userId", `${userId}`);
        dispatch(user_login({ userName, userId, loginFlag: true }));

        router.push("/");
      },
      onFailure: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <div className="SignIn">
      <h1>SingInしてください</h1>
      <TextField
        onChange={changeEmail}
        id="filled-basic"
        label="Email"
        variant="filled"
      />
      <TextField
        onChange={changePassword}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button variant="contained" onClick={signIn} color="primary">
        Login
      </Button>
    </div>
  );
};

export default SignIn;
