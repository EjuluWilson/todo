import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Todo from "./Todo";
import { useState } from "react";

export default function Board() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    const todoUpdate = event.target.value;
    setTodo(todoUpdate);
    console.log(todoUpdate);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
    setTodo("");
  }

  return (
    <div className="flex flex-col h-5/6 w-1/2 rounded-xl border p-4 bg-yellow-600  ">
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
      <div className=" bg-white overflow-auto content-start mt-3 flex-grow justify-between lg:flex lg:flex-wrap">
        {todos.map((item, index) => (
          <Todo key={index} todo={item} />
        ))}
      </div>
    </div>
  );
}
