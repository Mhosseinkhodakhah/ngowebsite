import Card from "../common/card";
import Slider from "../common/slider";
import Title from "../common/title";

function Ngos() {
  const discription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          unde quisquam esse tenetur eveniet magni, amet asperiores maxime
          labore temporibus!`;

  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <Title
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, assumenda."
        titleText="NGO"
      />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider
          content={[
            {
              id: Math.floor(Math.random() * 100),
            },
            {
              id: Math.floor(Math.random() * 100),
            },
            {
              id: Math.floor(Math.random() * 100),
            },
            {
              id: Math.floor(Math.random() * 100),
            },
          ]}
        >
          <Card
            description={discription}
            imageUrl="https://unsplash.it/g/640/425"
            name="NOG 1"
            route="/ngo"
          />
        </Slider>
      </div>
    </section>
  );
}

export default Ngos;
