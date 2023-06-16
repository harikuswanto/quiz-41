import { useFormContext } from "react-hook-form";
import styles from "./contact.module.css";
import { ErrorMessage } from "@hookform/error-message";
import ContactList from "./contactList";
const inputForm = [
  { id: "name", label: "Name", pattern: /./ },
  { id: "email", label: "Email", pattern: /[A-Za-z0-9\.]{6,30}\@gmail\.com$/ },
  { id: "phone", label: "Phone", pattern: /08[0-9]{6,10}$/ },
  { id: "company", label: "Company", pattern: /./ },
];

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
        {inputForm.map((item) => (
          <ContactList
            key={item.id}
            id={item.id}
            label={item.label}
            pattern={item.pattern}
          />
        ))}
      </div>
    </div>
  );
}
