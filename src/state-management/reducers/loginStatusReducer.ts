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
type Action = loginAction | logoutAction;
const loginStatusReducer = (state: string, action: Action): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default loginStatusReducer;
