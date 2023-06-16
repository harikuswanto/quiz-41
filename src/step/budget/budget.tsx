import styles from "./budget.module.css";
import BudgetList from "./budgetList";

const radio = [
  "$5.000 - $10.000",
  "$10.000 - $20.000",
  "$20.000 - $50.000",
  "$50.000 +",
];

export default function Budget() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>What&lsquo;s your project budget?</h2>
        <p>Please select which service you are interested in.</p>
      </div>
      <div className={styles.forminput}>
        {radio.map((budget: string) => (
          <BudgetList key={budget} budget={budget} />
        ))}
      </div>
    </div>
  );
}
