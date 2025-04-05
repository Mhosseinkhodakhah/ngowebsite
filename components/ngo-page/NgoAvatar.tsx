import { Avatar } from "@heroui/avatar";

function NgoAvatar({ data }: { data: any }) {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-evenly">
      <div>
        <Avatar
          alt="logo"
          className="md:w-60 w-40 md:h-60 h-40"
          src={data?.logo}
        />
      </div>
      <div>
        <h1 className="text-center md:text-start w-full mt-10 md:mt-0 font-bold">
          {data?.name}
        </h1>
        <p className="text-sm font-light mt-10 text-wrap max-w-md px-4 md:px-0 text-center md:text-start">
          {data?.additionalInformation}
        </p>
      </div>
    </div>
  );
}

export default NgoAvatar;
