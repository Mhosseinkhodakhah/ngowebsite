import { IconSvgProps } from "@/types";

const Twitter = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="13"
    role="presentation"
    viewBox="0 0 20 20"
    width="13"
    {...props}
  >
    <mask height="20" id="a" maskUnits="userSpaceOnUse" width="20" x="0" y="0">
      <path d="M0 0h20v20H0V0Z" fill="currentColor" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M15.75.937h3.067l-6.7 7.677L20 19.063h-6.171L8.99 12.727l-5.528 6.336H.393l7.166-8.214L0 .939h6.329l4.365 5.79L15.75.937Zm-1.079 16.286h1.7L5.4 2.68H3.577l11.094 14.542Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default Twitter;
