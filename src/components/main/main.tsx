"use client";
import styles from "./main.module.css";
import Stepper from "../stepper/stepper";
import { useState } from "react";

export default function Main() {
  const [step, setStep] = useState(1);
  return (
    <main className={styles.container}>
      <Stepper currentStep={step} totalStep={4} />
      <hr className="my-7" />
      <div>
      



      </div>
    </main>
  );
}
