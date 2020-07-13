import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { change_email } from "../redux/users/action";
import { useState } from "react";

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
    <div className="SignUp">
      <h1>SignUp</h1>
      <input type="text" placeholder="name" onChange={changeName} />
      <input type="text" placeholder="email" onChange={changeEmail} />
      <input type="password" placeholder="password" onChange={changePassword} />
      <button onClick={signUp}>SignUp</button>
    </div>
  );
};

export default SignUp;
