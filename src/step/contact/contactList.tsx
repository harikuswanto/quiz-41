import { useFormContext } from "react-hook-form";
import styles from "./contact.module.css";
import { ErrorMessage } from "@hookform/error-message";

export default function ContactList({
  id,
  label,
  pattern,
}: {
  id: string;
  label: string;
  pattern: any;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={errors?.[id] ? styles.error : ""}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={id}
        {...register(id, {
          required: label + " is required",
          pattern: {
            value: pattern,
            message: label + " is invalid",
          },
        })}
      />
      <ErrorMessage errors={errors} name={id} as="p" />
    </div>
  );
}
