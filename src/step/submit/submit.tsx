import { useFormContext } from "react-hook-form";
import styles from "./submit.module.css";
import Image from "next/image";
import CompleteIcon from "@/../public/img/CompleteIcon.png";

export default function Submit() {
  const onSubmit = (data: any) => JSON.stringify(data);
  return (
    <div className={styles.container}>
      <Image src={CompleteIcon} alt="Submit Project Quote" />
      <h2>Submit your quote request</h2>
      <p>
        Please review all the information you previously typed in the past
        steps, and if all is okay, submit your message to receive a project
        quote in 24 - 48 hours.
      </p>
      <button type="submit" >Submit</button>
    </div>
  );
}
