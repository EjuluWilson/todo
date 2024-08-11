import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Todo from "./Todo";

export default function Board() {
  return (
    <div className="flex flex-col h-5/6 w-1/2 rounded-xl border p-4 bg-yellow-600  ">
      <div className="flex mt-3 gap-3">
        <Input placeholder="Enter todo " className=" ml-2 "></Input>
        <Button className="mr-2">Add</Button>
      </div>
      <div className=" bg-white mt-3 flex-grow  lg:flex lg:items-start lg:flex-wrap lg:justify-center">
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </div>
  );
}
