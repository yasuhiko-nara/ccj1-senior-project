import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_login, change_email } from "../redux/users/action";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_USERPOOLID,
  ClientId: process.env.NEXT_PUBLIC_CLIENTID,
});

const Authentication = () => {
  const dispatch = useDispatch();
  const email = useSelector((store) => store.users.email);
  const router = useRouter();

  // 認証にはいらないけどこのページでSignInも行うのでパスワードを入力してもらう
  const [confirmationCode, setConfirmationCode] = useState("");
  const [password, setPassword] = useState("");

  const changeConfirmationCode = (event) => {
    setConfirmationCode(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const authenticate = () => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });
    cognitoUser.confirmRegistration(confirmationCode, true, (err) => {
      if (err) {
        console.log(email);

        console.log(err);
        return;
      }
      console.log("authentication succeeded");
      setConfirmationCode("");
      signIn();
    });
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
        console.log("result : ", result);

        const userName = result.idToken.payload.name;
        const userId = result.idToken.payload["cognito:username"];
        const idToken = result.idToken.jwtToken;

        localStorage.setItem("loginFlag", "true");
        localStorage.setItem("userId", `${userId}`);
        localStorage.setItem("idToken", `${idToken}`);
        dispatch(user_login({ userName, userId, loginFlag: true, idToken }));

        dispatch(change_email(""));

        setPassword("");
        router.push("/");
      },
      onFailure: (err) => {
        console.log("a");
        console.error(err);
      },
    });
  };
  return (
    <div className="main-container">
      <div className="Authenticate">
        <h1>Authenticate</h1>
        <TextField
          onChange={changeConfirmationCode}
          id="filled-basic"
          label="confirmation code"
          variant="filled"
        />
        <TextField
          onChange={changePassword}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <Button variant="contained" onClick={authenticate} color="primary">
          Authenticate
        </Button>
        <style jsx>{``}</style>
      </div>
    </div>
  );
};

export default Authentication;
