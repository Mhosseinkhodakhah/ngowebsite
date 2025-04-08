import { IconSvgProps } from "@/types";

const HambergerMenu = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    role="presentation"
    viewBox="0 0 512 512"
    width="1em"
    {...props}
  >
    <path
      d="M88 152h336M88 256h336M88 360h336"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="48"
    />
  </svg>
);

export default HambergerMenu;
