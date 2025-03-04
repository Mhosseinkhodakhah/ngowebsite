import Image from "next/image";

import Slider from "../common/slider";
import Title from "../common/title";

function NgoActivitiesSlider() {
  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <Title page="NGOPage" titleText="Image of NGO activities" />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider content={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}>
          <div>
            <Image
              alt="slide 1"
              className="w-full h-full"
              height={100}
              src="https://fakeimg.pl/600x400"
              width={100}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default NgoActivitiesSlider;
