import React, { useReducer } from "react";
import AuthContext from "./authContext";
interface loginAction {
  type: "LOGIN";
  username: string;
}
interface logoutAction {
  type: "LOGOUT";
}
export type AuthAction = loginAction | logoutAction;
const loginStatusReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
