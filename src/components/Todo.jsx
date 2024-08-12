import { Checkbox } from "@/components/ui/checkbox";

export default function Todo(props) {
  return (
    <div className="flex flex-grow items-center  gap-1 mx-2 py-3 my-3 lg:w-[45%]">
      <Checkbox className="ml-1" />
      <p> {props.todo}</p>
    </div>
  );
}
