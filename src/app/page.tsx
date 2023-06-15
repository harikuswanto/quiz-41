"use client";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Navigation from "@/components/navigation/navigation";
import Contact from "@/step/contact/contact";
import { FormFieldType } from "@/type";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const maxStep = 4;

  const methods = useForm();
  const onSubmit = (data:FormFieldType) => JSON.stringify(data)
  return (
    <FormProvider {...methods}>
      <Header />
      <Main step={step} maxStep={maxStep}>
        <Contact/>
      </Main>
      <Navigation step={step} setStep={setStep} maxStep={maxStep} />
    </FormProvider>
  );
}
