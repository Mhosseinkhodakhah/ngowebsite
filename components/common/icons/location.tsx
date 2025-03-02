import { IconSvgProps } from "@/types";

const Location = (props: IconSvgProps) => (
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
      d="M8.75 10a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
    />
    <path
      clipRule="evenodd"
      fill="currentColor"
      fillRule="evenodd"
      d="M3.774 8.877a8.04 8.04 0 0 1 8.01-7.377h.432a8.04 8.04 0 0 1 8.01 7.377 8.7 8.7 0 0 1-1.933 6.217L13.5 20.956a1.939 1.939 0 0 1-3 0l-4.792-5.862a8.7 8.7 0 0 1-1.934-6.217ZM12 5.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"
    />
  </svg>
);

export default Location;
