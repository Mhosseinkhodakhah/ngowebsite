import { IconSvgProps } from "@/types";

const LoginIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M12 3.25a.75.75 0 1 0 0 1.5 7.25 7.25 0 0 1 0 14.5.75.75 0 1 0 0 1.5 8.75 8.75 0 0 0 0-17.5Z"
      fill="#fff"
    />
    <path
      d="M10.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 1 1 0-1.5h8.19l-1.72-1.72Z"
      fill="#fff"
    />
  </svg>
);

export default LoginIcon;
