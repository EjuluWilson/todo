import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function Board() {
  return (
    <ScrollArea className="h-5/6 w-1/2 rounded-xl border p-4 bg-yellow-600  ">
      <div className="flex mt-3 gap-3">
        <Input placeholder="Enter todo " className=" ml-3 "></Input>
        <Button>Add</Button>
      </div>
    </ScrollArea>
  );
}
