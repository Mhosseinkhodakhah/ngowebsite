import Image from "next/image";

import Children1 from "@/public/images/children-1.jpg";
import Children2 from "@/public/images/children-2.jpg";
import Children3 from "@/public/images/children-3.jpg";

function Children() {
  return (
    <section className="flex justify-around w-full  gap-10 md:gap-10 lg:gap-20 my-10 flex-wrap mx-auto">
      <Image
        alt="children"
        className="rounded-3xl lg:rounded-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 object-cover"
        src={Children1}
      />
      <div className="relative">
        <Image
          alt="children"
          className="rounded-3xl lg:rounded-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 grayscale object-cover"
          src={Children2}
        />
        <div className="bg-primary text-gray absolute bottom-0 w-full h-20 text-center text-xs pt-2 px-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          accusamus.
        </div>
      </div>
      <Image
        alt="children"
        className="rounded-3xl lg:rounded-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 object-cover"
        src={Children3}
      />
    </section>
  );
}

export default Children;
