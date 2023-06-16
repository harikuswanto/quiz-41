import Step from "./step";
import styles from "./stepper.module.css";
function range(N: number) {
  return [...Array(N)].map((x, i) => i + 1);
}

export default function Stepper({
  maxStep,
  currentStep,
}: {
  maxStep: number;
  currentStep: number;
}) {
  const step = range(maxStep);

  return (
    <div className={styles.container}>
      {step.map((i: number) => (
        <Step key={i} i={i} maxStep={maxStep} currentStep={currentStep} />
      ))}
    </div>
  );
}
