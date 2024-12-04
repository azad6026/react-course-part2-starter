import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthContext from "./state-management/contexts/authContex";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import AuthProvider from "./state-management/AuthProvider";
function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  return (
    <>
      {/* <Counter /> */}
      {/* <TodoForm />
      <TodoList /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <HomePage />
          <NavBar />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
