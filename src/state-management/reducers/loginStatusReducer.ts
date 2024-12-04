//  need seperate interface for action
// interface Action {
//   type: "LOGIN" | "LOGOUT";
// }
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

export default loginStatusReducer;
