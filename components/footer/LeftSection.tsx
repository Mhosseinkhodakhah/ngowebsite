import EmailIcon from "../common/icons/email";
import Location from "../common/icons/location";
import PhoneIcon from "../common/icons/phone";

function LeftSection() {
  return (
    <section className="text-gray">
      <h1 className="text-3xl p-4">Logo</h1>
      <p className="p-4 font-light">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        accusantium adipisci ab alias blanditiis ullam optio ex dolor tempora,
        officiis sit animi rem, ipsum dicta aliquid expedita omnis, vitae
        ducimus?
      </p>
      <div className="flex px-4 py-1 gap-2 items-center">
        <Location className="text-gray" />
        <span className="font-light text-sm">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="flex px-4 py-1 gap-2 items-center">
        <PhoneIcon className="text-gray" />
        <span className="font-light text-sm">09123456789</span>
      </div>
      <div className="flex px-4 py-1 gap-2 items-center">
        <EmailIcon className="text-gray" />
        <span className="font-light text-sm">@example.com</span>
      </div>
    </section>
  );
}

export default LeftSection;
