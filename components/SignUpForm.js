import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { change_email } from "../redux/users/action";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
// import awsConfiguration from "./awsConfiguration.js";

const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_USERPOOLID,
  ClientId: process.env.NEXT_PUBLIC_CLIENTID,
});

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Passwordなどは別ページからアクセスできないようにするため、あえてReactでのState管理
  // Emailは次の認証で入力しなくていいようReduxで管理
  const email = useSelector((store) => store.users.email);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeEmail = (event) => {
    dispatch(change_email(event.target.value));
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const signUp = () => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: "name",
        Value: name,
      }),
    ];
    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log("成功");
        setPassword("");
        setName("");
        alert("メールアドレスに認証コードを送信しました");
        router.push("/signup/authentication");
        // ここで認証のページに移動
      }
    });
  };

  return (
    <div className="main-container">
      <div className="SignUp">
        <h1 style={{ marginBottom: "50px" }}>SignUp</h1>
        <TextField
          style={{ marginBottom: "50px" }}
          onChange={changeEmail}
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          style={{ marginBottom: "50px" }}
          onChange={changeName}
          id="filled-basic"
          label="Name"
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
        {/* <input type="text" placeholder="name" onChange={changeName} />
        <input type="text" placeholder="email" onChange={changeEmail} />
        <input
          type="password"
          placeholder="password"
          onChange={changePassword}
        /> */}
        <Button
          style={{
            display: "block",
            width: "40%",
            marginTop: "0px",
            marginBottom: "0px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variant="contained"
          onClick={signUp}
          color="primary"
        >
          SignUp
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
            .SignUp {
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

export default SignUp;
