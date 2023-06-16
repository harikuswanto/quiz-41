import { useFormContext } from "react-hook-form";
import styles from "./services.module.css";
import Image from "next/image";
import Development from "@/../public/img/Development.png";
import Marketing from "@/../public/img/Marketing.png";
import WebDesign from "@/../public/img/WebDesign.png";
import Other from "@/../public/img/Other.png";

export default function Services() {
  const { register } = useFormContext();
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Our services</h2>
        <p>Please select which service you are interested in.</p>
      </div>
      <div className={styles.forminput}>
        <div>
          <input
            {...register("services")}
            id="Development"
            type="radio"
            value="Development"
          />
          <label htmlFor="Development">
            <div className={styles.icon}>
              <Image src={Development} alt="Development" />
            </div>
            Development
          </label>
        </div>
        <div>
          <input
            {...register("services")}
            id="Web Design"
            type="radio"
            value="Web Design"
          />
          <label htmlFor="Web Design">
            <div className={styles.icon}>
              <Image src={WebDesign} alt="Web Design" />
            </div>
            Web Design
          </label>
        </div>
        <div>
          <input
            {...register("services")}
            id="Marketing"
            type="radio"
            value="Marketing"
          />
          <label htmlFor="Marketing">
            <div className={styles.icon}>
              <Image src={Marketing} alt="Marketing" />
            </div>
            Marketing
          </label>
        </div>
        <div>
          <input
            {...register("services")}
            id="Other"
            type="radio"
            value="Other"
          />
          <label htmlFor="Other">
            <div className={styles.icon}>
              <Image src={Other} alt="Other" />
            </div>
            Other
          </label>
        </div>
      </div>
    </div>
  );
}
