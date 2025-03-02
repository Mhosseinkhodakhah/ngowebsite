import localFont from "next/font/local";
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const vazir = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-ExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});
