import "./App.css";
import Counter from "./state-management/couter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
function App() {
  return (
    <>
      <Counter />
      {/* <TodoForm />
      <TodoList /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}
      <TasksProvider>
        <HomePage />
        <NavBar />
      </TasksProvider>
    </>
  );
}

export default App;
