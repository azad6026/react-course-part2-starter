import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";

interface addToddoContext {
  previousTodos: Todo[];
}
const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, addToddoContext>({
    mutationFn: (todo: Todo) =>
      fetch("https://xjsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json()),
    onMutate(newTodo: Todo) {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";
      return { previousTodos };
    },
    onSuccess(savedToodo, newTodo) {
      // console.log(savedToodo);
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // });
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedToodo : todo))
      );
    },
    onError(error, newTodo, context) {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error?.message}</div>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value || "",
              completed: false,
              userId: 1,
            });
        }}
        className="row mb-3"
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addTodo.isPending} className="btn btn-primary">
            {addTodo.isPending ? "Saving..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
