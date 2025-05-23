import { IconSvgProps } from "@/types";

const CopyrightIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    className="inline mx-1"
    fill="none"
    focusable="false"
    height="16"
    role="presentation"
    viewBox="0 0 24 24"
    width="16"
    {...props}
  >
    <path
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M14 15.667a4.5 4.5 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

export default CopyrightIcon;
