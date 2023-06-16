import styles from './stepper.module.css'
export default function Step({i,maxStep,
    currentStep,}: {
        i:number
        maxStep: number;
        currentStep: number;
      }) {
  return (
    <>
          <div
            className={`${styles.step} ${i <= currentStep && styles.complete}`}
          >
            {i}
          </div>
          {i < maxStep && (
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
  )
}
