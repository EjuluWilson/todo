import { Checkbox } from "@/components/ui/checkbox";

export default function Todo() {
  return (
    <div className="flex items-center gap-1 mx-2 py-3 mt-3 lg:w-[45%]">
      <Checkbox className="ml-1" />
      <p> Wake up</p>
    </div>
  );
}
