import React from "react";
import { useTranslations } from "next-intl";

import Title from "@/components/common/title";
import Counter from "@/components/projects/Counter";
import Slider from "@/components/common/slider";
import Card from "@/components/common/card";

function Page() {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="navbar"
        titleText="Projects"
      />
      <Counter />

      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Last Projects"
      />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider content={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}>
          <Card
            btnText="Read More"
            description="neque perferendis! Est excepturi mollitia
            sit, dolore ea odit obcaecati voluptates aliquam accusamus vel
            reprehenderit quis iusto pariatur fuga officiis laudantium magni
            maiores fugiat illum facilis qui perferendis blanditiis adipisci
            temporibus. Illo natus animi atque excepturi, maiores dolor omnis
            commodi deleniti ea. Vel, alias eos?"
            imageUrl="https://unsplash.it/g/640/425"
            name="Project 4"
            route={`/projects/5`}
            status={t("Good Practice")}
          />
        </Slider>
      </div>
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Most participation"
      />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider content={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}>
          <Card
            btnText="Read More"
            description="neque perferendis! Est excepturi mollitia
            sit, dolore ea odit obcaecati voluptates aliquam accusamus vel
            reprehenderit quis iusto pariatur fuga officiis laudantium magni
            maiores fugiat illum facilis qui perferendis blanditiis adipisci
            temporibus. Illo natus animi atque excepturi, maiores dolor omnis
            commodi deleniti ea. Vel, alias eos?"
            imageUrl="https://unsplash.it/g/640/425"
            name="Project 4"
            route={`/projects/5`}
            status={t("Good Practice")}
          />
        </Slider>
      </div>
    </section>
  );
}

export default Page;
