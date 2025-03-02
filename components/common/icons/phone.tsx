import { IconSvgProps } from "@/types";

const PhoneIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="20"
    role="presentation"
    viewBox="0 0 24 24"
    width="20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8h2ZM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10Z"
    />
    <path
      fill="currentColor"
      d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704Z"
    />
  </svg>
);

export default PhoneIcon;
