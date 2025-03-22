"use client";

import { Button } from "@heroui/button";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";

import CInput from "../common/cinput";

import { loginSchema } from "@/utils/validations";
import { loginRequest } from "@/server/login";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "@/i18n/navigation";
import { addToast } from "@heroui/toast";

function LoginForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("ddddddd", data.data);
      if (data.success) {
        setCookie({ name: "miras-token", value: data.data.token });
        router.push("/dashboard");
      } else {
        addToast({
          title: "Error",
          description: "Invalid credentials",
        });
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      mutation.mutate(values);
    },
  });

  return (
    <form className="w-full px-4" onSubmit={formik.handleSubmit}>
      <CInput
        isRequired
        className="my-4"
        formik={formik}
        label="Username"
        name="username"
      />
      <CInput
        isRequired
        className="my-4"
        formik={formik}
        label="Password"
        name="password"
      />
      <Button
        className="text-white w-full my-4"
        color="primary"
        isLoading={mutation.isPending}
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
