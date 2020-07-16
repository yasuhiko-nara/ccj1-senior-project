import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { change_email } from "../redux/users/action";
import { useState } from "react";
import Navbar from "./Navbar";
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
    <>
      <Navbar />
      <div className="SignUp">
        <h1>必要な情報を入力し、新規登録してください</h1>
        <TextField
          style={{ width: "100%", marginTop: "20px" }}
          onChange={changeEmail}
          id="filled-basic"
          label="メールアドレス"
        />
        <TextField
          style={{ width: "100%", marginTop: "20px" }}
          onChange={changeName}
          id="filled-basic"
          label="名前"
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
          onClick={signUp}
        >
          登録
        </Button>

        <style jsx>{`
          .SignUp {
            width: 60%;
            margin: 0 auto;
            margin-top: 100px;
          }
        `}</style>
      </div>
    </>
  );
};

export default SignUp;
