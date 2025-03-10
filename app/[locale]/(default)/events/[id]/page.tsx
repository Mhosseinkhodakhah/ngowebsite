import Image from "next/image";

import Title from "@/components/common/title";
import Slider from "@/components/common/slider";
import Card from "@/components/common/card";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        titleText="Event 1"
      />

      <div className="max-w-screen-md w-full justify-center items-center flex flex-col mt-20">
        <Image
          alt="event 1"
          className="w-full px-4"
          height={100}
          src="https://unsplash.it/g/640/425"
          width={100}
        />
        <h1 className="p-4 font-bold text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          dignissimos quisquam sit explicabo, nulla repudiandae tempora maiores
          nesciunt perferendis necessitatibus quis quos impedit nihil iste
          libero laborum vitae reprehenderit alias? Est excepturi suscipit
          numquam corrupti, enim earum magni illum placeat non voluptate dolore
          sed asperiores sint architecto nulla quas doloremque.
        </h1>
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          assumenda, aperiam ab dolorem repudiandae obcaecati. Porro, quam,
          facilis, excepturi illum at maxime ad cum error hic debitis aliquid?
          Dolor quod eaque voluptatem alias deleniti itaque ullam! Voluptas
          dolore laudantium, aperiam necessitatibus amet beatae magni quia ea.
          Iste blanditiis in, maiores omnis hic, optio consequatur quod libero
          voluptatem obcaecati eos temporibus quae, repellendus incidunt
          expedita fugiat sunt earum nesciunt atque repellat totam esse debitis!
          Qui corrupti tenetur alias molestiae molestias vitae dolorem in
          distinctio eveniet fugit repellendus sapiente fugiat saepe debitis non
          nemo natus odit quis, deserunt consectetur, iusto recusandae!
          Cupiditate itaque quibusdam culpa cumque enim, sapiente odio dolor
          dignissimos dolorum quam facilis? Nam consequuntur nobis eum eius
          expedita odio similique! Expedita dolorem accusamus laborum earum
          numquam eaque nisi atque architecto quidem voluptas quibusdam, est
          repellat error, eum reiciendis? Deserunt corporis tempora
          necessitatibus omnis, quod ea explicabo atque totam id enim, amet
          rerum pariatur facilis quam, neque perferendis! Est excepturi mollitia
          sit, dolore ea odit obcaecati voluptates aliquam accusamus vel
          reprehenderit quis iusto pariatur fuga officiis laudantium magni
          maiores fugiat illum facilis qui perferendis blanditiis adipisci
          temporibus. Illo natus animi atque excepturi, maiores dolor omnis
          commodi deleniti ea. Vel, alias eos?
        </p>
      </div>
      <Title
        description="neque perferendis! Est excepturi mollitia
              sit, dolore ea odit obcaecati voluptates aliquam accusamus vel
              reprehenderit quis iusto pariatur fuga officiis laudantium magni
              maiores fugiat illum facilis qui perferendis blanditiis adipisci
              temporibus. Illo natus animi atque excepturi, maiores dolor omnis
              commodi deleniti ea. Vel, alias eos?"
        page="events"
        titleText="Similar Events"
      />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider content={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}>
          <Card
            btnText="See More"
            description="neque perferendis! Est excepturi mollitia
              sit, dolore ea odit obcaecati voluptates aliquam accusamus vel
              reprehenderit quis iusto pariatur fuga officiis laudantium magni
              maiores fugiat illum facilis qui perferendis blanditiis adipisci
              temporibus. Illo natus animi atque excepturi, maiores dolor omnis
              commodi deleniti ea. Vel, alias eos?"
            imageUrl="https://unsplash.it/g/640/425"
            name="Event 4"
            route={`/events/5`}
          />
        </Slider>
      </div>
    </section>
  );
}

export default Page;
