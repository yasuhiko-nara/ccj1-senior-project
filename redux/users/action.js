export const USER_LOGIN = "USER_LOGIN";
export const user_login = (payload) => {
  return {
    type: "USER_LOGIN",
    payload,
  };
};

export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const change_email = (email) => {
  return {
    type: "CHANGE_EMAIL",
    email,
  };
};

export const USER_LOGOUT = "USER_LOGOUT";
export const user_logout = ()=>{
  return {
    type:'USER_LOGOUT'
  }
}
