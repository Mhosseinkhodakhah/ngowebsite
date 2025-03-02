import { Button } from "@heroui/button";
import Image from "next/image";
import CardBtn from "./CardBtn";

function ProjectCard() {
  const discription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          unde quisquam esse tenetur eveniet magni, amet asperiores maxime
          labore temporibus!`;

  return (
    <div className="border border-slate-400 dark:border-secondary rounded-md flex flex-col md:flex-row gap-2 relative shadow-md">
      <Image
        alt="Project 1"
        className="object-fill w-full md:w-1/3 h-full"
        height={100}
        src="https://unsplash.it/g/640/425"
        width={100}
      />
      <div className="py-6 px-2">
        <h4 className="text-bold p-2 text-wrap">Project 1</h4>
        <p className="text-sm font-light p-2  overflow-hidden text-wrap">
          {discription.slice(0, 100)}...
        </p>
        <CardBtn />
      </div>

      <div className="p-2 absolute right-1 top-1 bg-primary text-gray rounded-md">
        <p className="text-xs">Completed</p>
      </div>
    </div>
  );
}

export default ProjectCard;
