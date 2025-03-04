import WorldIcon from "../common/icons/worldIcon";
import CalenderIcon from "../common/icons/calenderIcon";
import MapMarker from "../common/icons/map-marker";

function NgoStatusCards() {
  return (
    <section className="flex flex-col md:flex-row justify-around w-full px-4 md:px-0 md:w-2/3 gap-4 my-20">
      <div className="w-full md:w-1/3 flex flex-col items-center gap-8 md:gap-14 bg-secondary rounded-md py-4 md:py-8">
        <WorldIcon className="w-14 md:w-20 h-14 md:h-20" />
        <h3 className="text-gray text-xl font-bold">Iran</h3>
        <p className="text-gray text-center">
          Main country where the NGO works
        </p>
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center gap-8 md:gap-14 bg-primary rounded-md py-4 md:py-8">
        <CalenderIcon className="w-14 md:w-20 h-14 md:h-20" />
        <h3 className="text-gray text-xl font-bold">2020</h3>
        <p className="text-gray text-center">Year of establishment</p>
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center gap-8 md:gap-14 bg-secondary rounded-md py-4 md:py-8">
        <MapMarker className="w-14 md:w-20 h-14 md:h-20" />
        <h3 className="text-gray text-xl font-bold">Western Asia</h3>
        <p className="text-gray text-center">Area and scope of activity</p>
      </div>
    </section>
  );
}

export default NgoStatusCards;
