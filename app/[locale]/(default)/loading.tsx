import Image from "next/image";

import LoadingImg from "@/public/images/loading.gif";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image alt="loading" height={200} src={LoadingImg} width={200} />
    </div>
  );
}

export default Loading;
