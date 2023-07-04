import styles from "./TeamMember.module.css";
import Image from "next/image";

export default function TeamMember({ name, photo }: any) {
  return (
    <div className={styles.card}>
      <div className={styles.banner}>
        <Image
          src={photo}
          alt={`Foto do integrante ${name}`}
          width={100}
          height={100}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
      </div>
    </div>
  );
}
