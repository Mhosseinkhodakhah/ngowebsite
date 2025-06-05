"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useTranslations } from "use-intl";

import { getUpdateEmail } from "@/actions/home";
import { emailSchema } from "@/utils/validations";

function RightSection() {
  const t = useTranslations("footer");

  const mutation = useMutation({
    mutationKey: ["getUpdateEmail"],
    mutationFn: getUpdateEmail,
    onSuccess: (response: any) => {
      if (response?.success) {
        addToast({
          title: t("Email registered"),
          description: t("Your email has been successfully registered"),
          color: "success",
        });
      } else {
        addToast({
          title: t("The email was not registered"),
          description: t("Your email was not registered, please try again"),
          color: "danger",
        });
      }
      formik.resetForm();
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      mutation.mutate(values.email);
    },
  });

  return (
    <section className="flex gap-2 flex-col justify-start items-start h-full mt-10">
      <h2 className="text-2xl font-bold text-gray">{t("Get Updates")}</h2>
      <Input
        className="max-w-xs"
        errorMessage={formik?.errors?.email ? formik?.errors?.email : ""}
        isInvalid={!!formik?.errors?.email}
        placeholder={t("Enter your email")}
        type="email"
        {...formik?.getFieldProps("email")}
      />
      <Button
        className="text-gray px-2"
        color="secondary"
        isLoading={mutation.isPending}
        onPress={() => formik.handleSubmit()}
      >
        {t("Submit")}
      </Button>
    </section>
  );
}

export default RightSection;
