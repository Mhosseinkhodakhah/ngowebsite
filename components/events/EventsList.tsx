import { Pagination } from "@heroui/pagination";

import Card from "../common/card";

import SortList from "./SortList";

function EventsList() {
  return (
    <div className="w-full md:w-4/6 lg:w-3/4">
      <SortList />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {new Array(10).fill(null).map((eucation, index) => (
          <Card
            key={index}
            btnText="See More"
            description="lorem ipsum dolor sit amet, consectetur adip nonum"
            imageUrl="https://unsplash.it/g/640/425"
            name="events 1"
            route="events/1"
          />
        ))}
      </div>
      <div className="mt-10 w-full justify-center items-center flex">
        <Pagination
          color="primary"
          initialPage={1}
          total={10}
          variant="faded"
        />
      </div>
    </div>
  );
}

export default EventsList;
