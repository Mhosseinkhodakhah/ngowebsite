"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { useFormik } from "formik";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import CInput from "../common/cinput";

import { loginSchema } from "@/utils/validations";
import { loginRequest } from "@/actions/login";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "@/i18n/navigation";
import { ILogin } from "@/types/login-types";
import useStore from "@/store";

function LoginForm() {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const t = useTranslations("ngo-registration");
  const router = useRouter();
  const store = useStore((state: any) => state.loginNgo);

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginRequest,
    onSuccess: (data) => {
      if (data.success) {
        setCookie({ name: "miras-token", value: data.data.token });
        store(data.data);
        router.push("/dashboard");
      } else {
        addToast({
          title: t("Error"),
          description: t("The username or password is incorrect"),
          timeout: 3000,
          color: "danger",
        });
      }
    },
  });

  const formik = useFormik<ILogin>({
    initialValues: {
      username: "",
      password: "",
    },
    // validationSchema: loginSchema,
    onSubmit: (values) => {
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
        endContent={
          isVisiblePassword ? (
            <Icon height="24" icon="fa6-regular:eye" width="24" />
          ) : (
            <Icon height="24" icon="iconamoon:eye-off" width="24" />
          )
        }
        formik={formik}
        label="Password"
        name="password"
        type={isVisiblePassword ? "text" : "password"}
        onVisible={setIsVisiblePassword}
      />
      <Button
        className="text-white w-full my-4"
        color="primary"
        isLoading={mutation.isPending}
        type="submit"
      >
        {mutation.isPending ? t("Please Wait") : t("Login")}
      </Button>
    </form>
  );
}

export default LoginForm;
