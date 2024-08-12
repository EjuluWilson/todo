import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";

export default function Todo(props) {
  return (
    <div className="flex items-center gap-1 mx-3 lg:w-[45%]">
      <Checkbox className="ml-1" />
      <p className="overflow-auto py-2 text-black"> {props.todo}</p>
      <div className="flex flex-grow justify-end ">
        <Button
          onClick={() => {
            props.onDelete(props.index);
          }}
          className="h-6 w-12 border border-black bg-red-600 focus:bg-red-600"
        >
          delete
        </Button>
      </div>
    </div>
  );
}
