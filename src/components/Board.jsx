import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Todo from "./Todo";
import { useState } from "react";

export default function Board() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  //Handle todo input
  function handleChange(event) {
    const todoUpdate = event.target.value;
    setTodo(todoUpdate);
  }
  //Handle todo addition
  function handleSubmit(event) {
    event.preventDefault();

    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
    setTodo("");
  }

  //Handle todo deletion
  function deleteTodo(index) {
    setTodos((prevTodos) => {
      return [...prevTodos].filter((item, position) => position !== index);
    });
  }

  return (
    <div className="flex flex-col h-5/6 w-1/2 rounded-xl border p-4 bg-yellow-300  ">
      <form onSubmit={handleSubmit} className="flex mt-3 gap-3">
        <Input
          name="todoInput"
          placeholder="Enter todo "
          className=" ml-2 "
          onChange={handleChange}
          value={todo}
        ></Input>

        <Button className="mr-2">Add</Button>
      </form>
      <div className="overflow-auto content-start mt-3 flex-grow justify-between lg:flex lg:flex-wrap">
        {todos.map((item, index) => (
          <Todo key={index} index={index} todo={item} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
}
