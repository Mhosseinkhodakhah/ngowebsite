import Image from "next/image";
import Link from "next/link";

import NotFoundImage from "@/public/images/not-found.webp";

function NotFound() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        color: "#212121",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <Image alt="Error" height={300} src={NotFoundImage} width={300} />

      <h2>Page Not Found</h2>

      <Link href="/">Back To Home</Link>
    </div>
  );
}

export default NotFound;
