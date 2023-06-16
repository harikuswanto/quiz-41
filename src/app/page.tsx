"use client";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Navigation from "@/components/navigation/navigation";
import Budget from "@/step/budget/budget";
import Contact from "@/step/contact/contact";
import Services from "@/step/services/services";
import Submit from "@/step/submit/submit";
import { FormFieldType } from "@/type";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const maxStep = 4;

  const methods = useForm<FormFieldType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      services: "Web Design",
      budget: "$50.000 +",
    },
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  return (
    <FormProvider {...methods}>
      <Header />
      <Main step={step} maxStep={maxStep}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 && <Contact />}
          {step === 2 && <Services />}
          {step === 3 && <Budget />}
          {step === 4 && <Submit />}
        </form>
      </Main>
      <Navigation step={step} setStep={setStep} maxStep={maxStep} />
    </FormProvider>
  );
}
