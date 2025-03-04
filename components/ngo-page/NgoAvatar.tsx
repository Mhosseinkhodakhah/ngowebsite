import { Avatar } from "@heroui/avatar";

function NgoAvatar() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-evenly">
      <div>
        <Avatar
          alt="logo"
          className="md:w-60 w-40 md:h-60 h-40"
          src="https://fakeimg.pl/600x400"
        />
      </div>
      <div>
        <h1 className="text-center md:text-start w-full mt-10 md:mt-0 font-bold">
          NGO Name
        </h1>
        <p className="text-sm font-light mt-10 text-wrap max-w-md px-4 md:px-0 text-center md:text-start">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}

export default NgoAvatar;
