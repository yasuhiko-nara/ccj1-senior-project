import { useState } from "react";
import { useDispatch } from "react-redux";
import { user_login } from "../redux/users/action";
import Navbar from "./Navbar";
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
    <>
      <Navbar />
      <div className="SignIn">
        <h1>メールアドレスでログインする。</h1>
        <TextField
          style={{ width: "100%", marginTop: "20px" }}
          onChange={changeEmail}
          id="filled-basic"
          label="メールアドレス"
        />
        <TextField
          style={{ width: "100%", marginTop: "20px" }}
          onChange={changePassword}
          id="standard-password-input"
          label="パスワード"
          type="password"
          autoComplete="current-password"
        />
        <Button
          style={{
            width: "50%",
            height: "50px",
            marginLeft: "25%",
            marginTop: "50px",
            color: "white",
            backgroundColor: "#2b90d9",
          }}
          variant="contained"
          onClick={signIn}
        >
          ログイン
        </Button>
        <style jsx>{`
          .SignIn {
            width: 60%;
            margin: 0 auto;
            margin-top: 100px;
          }
        `}</style>
      </div>
    </>
  );
};

export default SignIn;
