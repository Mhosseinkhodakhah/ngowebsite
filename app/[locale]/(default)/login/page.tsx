import Image from "next/image";

import Logo from "@/public/images/logo.png";
import LoginForm from "@/components/login/LoginForm";
import Background from "@/public/images/background.jpg";

function Login() {
  return (
    <div className="flex justify-center items-center">
      <Image
        alt="background"
        className="fixed left-0 top-0 w-full h-full object-cover rounded-l-md"
        height={600}
        quality={100}
        src={Background}
        width={600}
      />
      <div className="w-full md:max-w-md bg-slate-300 bg-opacity-50 dark:bg-secondary dark:bg-opacity-45 rounded-md flex justify-center items-center flex-col shadow-md relative z-10 backdrop-blur-sm mt-20">
        <div className="p-8">
          <Image alt="logo" height={200} src={Logo} width={200} />
        </div>
        {/* <h1 className="text-xl font-bold my-4">Login</h1> */}
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
