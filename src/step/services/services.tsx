import styles from "./services.module.css";
import Development from "@/../public/img/Development.png";
import Marketing from "@/../public/img/Marketing.png";
import WebDesign from "@/../public/img/WebDesign.png";
import Other from "@/../public/img/Other.png";
import ServicesItem from "./serviceList";

export default function Services() {
  const services = [
    { name: "Development", image: Development },
    { name: "Web Design", image: WebDesign },
    { name: "Marketing", image: Marketing },
    { name: "Other", image: Other },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Our services</h2>
        <p>Please select which service you are interested in.</p>
      </div>
      <div className={styles.forminput}>
        {services.map((service) => (
          <ServicesItem
            key={service.name}
            name={service.name}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
