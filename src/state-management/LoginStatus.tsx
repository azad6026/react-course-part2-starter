import { useContext, useReducer, useState } from "react";
import loginStatusReducer from "./reducers/loginStatusReducer";
import AuthContext from "./contexts/AuthContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({ username: "Azadeh Faramarzi", type: "LOGIN" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
