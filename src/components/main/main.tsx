import styles from "./main.module.css";
import Stepper from "../stepper/stepper";

export default function Main({
  step,
  maxStep,
  children,
}: {
  step: number;
  maxStep: number;
  children: React.ReactNode;
}) {
  return (
    <main className={styles.container}>
      <Stepper currentStep={step} maxStep={maxStep} />
      <hr className="my-7" />
      {children}
    </main>
  );
}
