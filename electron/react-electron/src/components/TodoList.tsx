import React, { useState } from "react";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../redux/api";
import TodoItem from "./TodoItem";

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  const { data: todoItems } = useGetTodosQuery(undefined, {
    selectFromResult: ({ data }) => ({ data }),
  });

  const [addTodo] = useAddTodoMutation();

  const [removeTodo] = useDeleteTodoMutation();

  const [updateTodo] = useUpdateTodoMutation();

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask === "") return;
    const newTodo = {
      userId: 1,
      id:
        (todoItems?.slice()?.sort((a: TodoItem, b: TodoItem) => b.id - a.id)[0]
          .id || 0) + 1,
      title: newTask,
      completed: false,
    };
    setNewTask("");

    addTodo(newTodo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTask(value);
  };

  const removeItem = (index: number) => {
    removeTodo(index);
  };

  const handleCheck = (index: number) => {
    const findItem = todoItems.find((item: TodoItem) => item.id === index);
    const newTodo = {
      ...findItem,
      completed: !findItem?.completed,
    };
    updateTodo(newTodo);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add Todo</h1>
      <div className="mb-5 w-full">
        <form onSubmit={addItem} className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Add a new task "
            className="p-2 border border-gray-300 w-[80%]"
            value={newTask}
            onChange={handleChange}
          />
          <button className="ml-2 px-4 py-2 bg-indigo-500 text-white w-[20%]">
            Add Task
          </button>
        </form>
      </div>
      {/* <h1 className="text-2xl font-bold mb-4">Todo List</h1> */}
      <div>
        {todoItems
          ?.slice()
          ?.sort((a: TodoItem, b: TodoItem) => b?.id - a?.id)
          ?.map((item: TodoItem) => (
            <TodoItem
              key={item?.id}
              text={item.title}
              completed={item.completed}
              onRemove={() => removeItem(item?.id)}
              handleCheck={() => handleCheck(item?.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
