import { useFormContext } from "react-hook-form";
import styles from "./contact.module.css";
import { ErrorMessage } from "@hookform/error-message";
export default function Contact() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Contact details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisc.</p>
      </div>
      <div className={styles.forminput}>
        <div className={errors.name ? styles.error : ""}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <ErrorMessage errors={errors} name="name" as={<p />} />
        </div>
        <div className={errors.email ? styles.error : ""}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /[A-Za-z0-9\.]{6,30}\@gmail\.com$/,
                message: "Email is invalid",
              },
            })}
          />
          <ErrorMessage errors={errors} name="email" as={<p />} />
        </div>
        <div className={errors.phone ? styles.error : ""}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            placeholder="Phone Number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /08[0-9]{6,10}$/,
                message: "Phone Number is invalid",
              },
            })}
          />
          <ErrorMessage errors={errors} name="phone" as={<p />} />
        </div>
        <div className={errors.company ? styles.error : ""}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            placeholder="Company"
            {...register("company", {
              required: "Company is required",
            })}
          />
          <ErrorMessage errors={errors} name="company" as={<p />} />
        </div>
      </div>
    </div>
  );
}
