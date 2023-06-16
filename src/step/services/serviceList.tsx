import { useFormContext } from "react-hook-form";
import styles from "./services.module.css";
import Image, { StaticImageData } from "next/image";

export default function ServicesList({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) {
  const { register } = useFormContext();
  return (
    <div>
      <input {...register("services")} id={name} type="radio" value={name} />
      <label htmlFor={name}>
        <div className={styles.icon}>
          <Image src={image} alt={name} />
        </div>
        {name}
      </label>
    </div>
  );
}
