import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <TodoForm />
      <TodoList /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}
      <AuthProvider>
        <TasksProvider>
          <HomePage />
          <NavBar />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
