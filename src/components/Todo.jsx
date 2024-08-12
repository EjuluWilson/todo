import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";

export default function Todo(props) {
  return (
    <div className="flex items-center gap-1 mx-3 lg:w-[45%]">
      <Checkbox className="ml-1" />
      <p className="overflow-auto py-2 "> {props.todo}</p>
      <div className="flex flex-grow justify-end ">
      <Button className="h-6 w-12 bg-orange-700  hover:bg-red-600 focus:bg-red-600">delete</Button>
      </div>
    </div>
  );
}
