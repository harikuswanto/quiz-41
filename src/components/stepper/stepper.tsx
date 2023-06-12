import { type } from "os";
import styles from "./stepper.module.css";
function range(N: number) {
  return [...Array(N)].map((x, i) => i + 1);
}

export default function Stepper({
  totalStep,
  currentStep,
}: {
  totalStep: number;
  currentStep: number;
}) {
  const step = range(totalStep);
  
  return (
    <div className={styles.container}>
      {step.map((i: number) => (
        <>
          <div
            className={`${styles.step} ${i <= currentStep && styles.complete}`}
          >
            {i}
          </div>
          {i < step.length && (
            <div className={styles.separator}>
              {i < currentStep && (
                <div className="w-full h-full rounded bg-primary"></div>
              )}
              {i === currentStep && (
                <div className="w-1/2 h-full rounded bg-primary"></div>
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
