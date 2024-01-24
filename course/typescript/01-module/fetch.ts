const url = "https://jsonplaceholder.typicode.com/todos";

import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


axios
  .get(url)
  .then((res) => {
    const todos: Todo[] = res.data;

    for (let todo of todos) {
      console.log(todo.title);
    }
  })
  .catch(console.error);
