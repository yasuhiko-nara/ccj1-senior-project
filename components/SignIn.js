import { useState } from "react";
import { useDispatch } from "react-redux";
import { user_login } from "../redux/users/action";
import Button from "@material-ui/core/Button";
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
      <h1>SingIn</h1>

      <input type="text" placeholder="email" onChange={changeEmail} />
      <input type="password" placeholder="password" onChange={changePassword} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
