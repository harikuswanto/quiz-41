import { Dispatch, SetStateAction } from "react";
import styles from "./navigation.module.css";
import { useFormContext } from "react-hook-form";

export default function Navigation({
  step,
  setStep,
  maxStep,
}: {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    trigger,
    formState: { errors },
  } = useFormContext();

  function onPrevButton() {
    if (step > 1) setStep(step - 1);
  }

  async function onNextButton() {
    if (step > 1) {
      setStep(step + 1);
    } else {
      const res = await trigger(["name", "email", "phone", "company"]);
      if (res) setStep(step + 1);
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.prev + " " + (step < 2 ? styles.hidden : "")}
        onClick={onPrevButton}
      >
        Previous step
      </button>
      <button
        className={styles.next + " " + (step >= maxStep ? styles.hidden : "")}
        onClick={onNextButton}
      >
        Next step
      </button>
    </div>
  );
}
