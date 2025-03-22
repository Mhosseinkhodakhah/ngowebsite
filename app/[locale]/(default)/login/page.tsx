import Image from "next/image";

import Logo from "@/public/images/logo.jpg";
import LoginForm from "@/components/login/LoginForm";
import Background from "@/public/images/background.jpg";

function Login() {
  return (
    <div className=" flex justify-center items-center">
      <Image
        alt="background"
        className="fixed left-0 top-0 w-full h-full object-fill rounded-l-md  "
        height={200}
        src={Background}
        width={200}
      />
      <div className="w-full h-full max-w-md bg-dark dark:bg-secondary rounded-md flex justify-center items-center flex-col shadow-md">
        <div className="p-8">
          <Image alt="logo" height={200} src={Logo} width={200} />
        </div>
        <h1 className="text-xl font-bold my-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
