import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_USERPOOLID,
  ClientId: process.env.NEXT_PUBLIC_CLIENTID,
});

const SignOut = () => {
  const signOut = () => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
      localStorage.clear();
      console.log("signed out");
    } else {
      localStorage.clear();
      console.log("no user signing in");
    }
  };

  return (
    <div className="SignOut">
      <h1>SignOut</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
