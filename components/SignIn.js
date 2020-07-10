import { useState } from "react";
import { useDispatch } from "react-redux";
import { user_login } from "../redux/users/action";
import Link from 'next/link'

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import awsConfiguration from "./awsConfiguration.js";

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
});

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const email = "nakauchi.tyuy@gmail.com";
  // const password = "Urara1222";

  const changeEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
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
        dispatch(user_login({ userName, userId, userFlag: true }));

        setEmail("");
        setPassword("");
      },
      onFailure: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <div className="SignIn">
      <Link href='/list'>
      aaaaaaaaa
      </Link>
      <h1>SingIn</h1>

      <input type="text" placeholder="email" onChange={changeEmail} />
      <input type="password" placeholder="password" onChange={changePassword} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
