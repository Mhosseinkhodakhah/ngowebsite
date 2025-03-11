import Card from "@/components/common/card";
import Slider from "@/components/common/slider";
import Title from "@/components/common/title";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        titleText="Project Name"
      />
      <Title
        className="text-start max-w-screen-lg"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus ratione molestiae eligendi illo tempora a laboriosam reprehenderit deserunt aut doloribus quidem, excepturi, repellendus natus earum, sapiente at sit provident quo ad vero! Voluptate labore voluptates minus modi ipsam hic facere, quam quasi sapiente amet iure architecto aut provident officiis maxime pariatur possimus nisi nihil, a quisquam quae eaque deserunt dolorum illum! Molestiae corrupti distinctio vero unde illo ad voluptates similique! Sunt voluptatibus sint nesciunt saepe soluta, aspernatur dicta ipsa asperiores perspiciatis consequatur, vel velit deleniti aliquam qui necessitatibus accusantium, nihil assumenda quasi placeat? Quia atque hic laborum commodi ut porro amet illum deleniti vero, quae deserunt nisi nostrum inventore dolorem ipsa mollitia culpa unde id molestias error tempore enim, reprehenderit repellat dicta! Suscipit repellat modi officiis excepturi laudantium autem vel velit veniam quidem reprehenderit aperiam, incidunt provident vitae obcaecati dicta omnis asperiores facere laborum molestiae sit! Quam ipsa at fugiat, esse cum alias, non itaque dignissimos magni aperiam veritatis. Assumenda facilis nisi atque quaerat iste fugiat! Voluptatem cumque fuga praesentium magni perferendis sequi culpa perspiciatis cum corporis nihil, eos hic rerum. Voluptatibus debitis fuga iure quaerat? Officia omnis dolorum ipsa suscipit eveniet unde? Nisi amet modi iusto harum veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus ratione molestiae eligendi illo tempora a laboriosam reprehenderit deserunt aut doloribus quidem, excepturi, repellendus natus earum, sapiente at sit provident quo ad vero! Voluptate labore voluptates minus modi ipsam hic facere, quam quasi sapiente amet iure architecto aut provident officiis maxime pariatur possimus nisi nihil, a quisquam quae eaque deserunt dolorum illum! Molestiae corrupti distinctio vero unde illo ad voluptates similique! Sunt voluptatibus sint nesciunt saepe soluta, aspernatur dicta ipsa asperiores perspiciatis consequatur, vel velit deleniti aliquam qui necessitatibus accusantium, nihil assumenda quasi placeat? Quia atque hic laborum commodi ut porro amet illum deleniti vero, quae deserunt nisi nostrum inventore dolorem ipsa mollitia culpa unde id molestias error tempore enim, reprehenderit repellat dicta! Suscipit repellat modi officiis excepturi laudantium autem vel velit veniam quidem reprehenderit aperiam, incidunt provident vitae obcaecati dicta omnis asperiores facere laborum molestiae sit! Quam ipsa at fugiat, esse cum alias, non itaque dignissimos magni aperiam veritatis. Assumenda facilis nisi atque quaerat iste fugiat! Voluptatem cumque fuga praesentium magni perferendis sequi culpa perspiciatis cum corporis nihil, eos hic rerum. Voluptatibus debitis fuga iure quaerat? Officia omnis dolorum ipsa suscipit eveniet unde? Nisi amet modi iusto harum veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus ratione molestiae eligendi illo tempora a laboriosam reprehenderit deserunt aut doloribus quidem, excepturi, repellendus natus earum, sapiente at sit provident quo ad vero! Voluptate labore voluptates minus modi ipsam hic facere, quam quasi sapiente amet iure architecto aut provident officiis maxime pariatur possimus nisi nihil, a quisquam quae eaque deserunt dolorum illum! Molestiae corrupti distinctio vero unde illo ad voluptates similique! Sunt voluptatibus sint nesciunt saepe soluta, aspernatur dicta ipsa asperiores perspiciatis consequatur, vel velit deleniti aliquam qui necessitatibus accusantium, nihil assumenda quasi placeat? Quia atque hic laborum commodi ut porro amet illum deleniti vero, quae deserunt nisi nostrum inventore dolorem ipsa mollitia culpa unde id molestias error tempore enim, reprehenderit repellat dicta! Suscipit repellat modi officiis excepturi laudantium autem vel velit veniam quidem reprehenderit aperiam, incidunt provident vitae obcaecati dicta omnis asperiores facere laborum molestiae sit! Quam ipsa at fugiat, esse cum alias, non itaque dignissimos magni aperiam veritatis. Assumenda facilis nisi atque quaerat iste fugiat! Voluptatem cumque fuga praesentium magni perferendis sequi culpa perspiciatis cum corporis nihil, eos hic rerum. Voluptatibus debitis fuga iure quaerat? Officia omnis dolorum ipsa suscipit eveniet unde? Nisi amet modi iusto harum veritatis."
        page="projects"
        titleText="Goals And Achievements"
      />

      <Title page="projects" titleText="Participating teams" />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider content={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}>
          <Card
            btnText="See More"
            imageUrl="https://unsplash.it/g/640/425"
            name="NGO 4"
          />
        </Slider>
      </div>
    </section>
  );
}

export default Page;
