import APIClient from "./apiClient";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export default new APIClient<Todo>("/todos");
