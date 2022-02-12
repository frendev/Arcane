import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Service.module.scss";

export default function Service({ services }) {
  return (
    <div id="services" className={styles.servicesContainer}>
      <h1 className={styles.services__heading}>Services</h1>
      <h2>Excellence in architecture, engineering and interior design</h2>

      <div>
        We consult, design, engineer, and make products for the arts and
        entertainment industry, architecture, robotics and technology and
        industrial sectors.
      </div>
      <div className={styles.services__section}>
        {services &&
          services.map((service, index) => {
            console.log(index);
            return <ServiceCard key={index} service={service} />;
          })}
      </div>
    </div>
  );
}
