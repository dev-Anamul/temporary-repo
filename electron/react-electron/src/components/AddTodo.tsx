import { useState } from "react";

const AddTodo = () => {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask === "") return;
    const newTodo = {
      userId: 1,
      id: Math.random(),
      title: newTask,
      completed: false,
    };
    setNewTask("");

    console.log(newTodo);
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border border-gray-300"
      />
      <button
        onClick={addTask}
        className="ml-2 px-4 py-2 bg-indigo-500 text-white"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
