import { IconSvgProps } from "@/types";

const MapMarker = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="80"
    role="presentation"
    viewBox="0 0 80 80"
    width="80"
    {...props}
  >
    <path
      stroke="#2185D5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16.43 54.596c-6.032 1.81-9.764 4.31-9.764 7.07 0 5.523 14.924 10 33.334 10 18.41 0 33.333-4.477 33.333-10 0-2.76-3.73-5.26-9.763-7.07"
    />
    <path
      fill="#2F88FF"
      stroke="#303841"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M40 58.333s21.666-14.16 21.666-30.53c0-11.673-9.7-21.137-21.666-21.137-11.966 0-21.667 9.464-21.667 21.137 0 16.37 21.667 30.53 21.667 30.53Z"
    />
    <path
      fill="#43CCF8"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M40 36.667A8.333 8.333 0 1 0 40 20a8.333 8.333 0 0 0 0 16.667Z"
    />
  </svg>
);

export default MapMarker;
