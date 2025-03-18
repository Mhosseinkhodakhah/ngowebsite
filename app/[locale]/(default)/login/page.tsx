import Image from "next/image";
import { Button } from "@heroui/button";

import CInput from "@/components/common/cinput";
import Logo from "@/public/images/logo.jpg";

function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-slate-300 dark:bg-secondary rounded-md backdrop:blur-sm flex justify-center items-center flex-col shadow-md">
        <div className="p-8">
          <Image alt="logo" height={200} src={Logo} width={200} />
        </div>
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form className="w-full px-4">
          <CInput
            isRequired
            className="my-4"
            label="Username"
            name="username"
          />
          <CInput
            isRequired
            className="my-4"
            label="Password"
            name="password"
          />
          <Button className="text-white w-full my-4" color="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
