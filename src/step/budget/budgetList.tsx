import { useFormContext } from "react-hook-form";
import styles from "./budget.module.css";

export default function BudgetList({ budget }: { budget: string }) {
  const { register } = useFormContext();
  return (
    <div className={styles.budget}>
        <input id={budget} {...register("budget")} type="radio" value={budget} />
        <label htmlFor={budget}>
        <div className={styles.radio}></div>
        {budget}
        </label>
    </div>
  );
}
