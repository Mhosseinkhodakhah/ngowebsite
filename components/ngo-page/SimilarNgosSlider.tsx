import Slider from "../common/slider";
import Title from "../common/title";
import Card from "../common/card";

function SimilarNgosSlider() {
  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        page="NGOPage"
        titleText="Similar NGOs"
      />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider content={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}>
          <Card
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            imageUrl="https://fakeimg.pl/600x400"
            name="NGO Name"
            route="/ngo/2"
          />
        </Slider>
      </div>
    </section>
  );
}

export default SimilarNgosSlider;
