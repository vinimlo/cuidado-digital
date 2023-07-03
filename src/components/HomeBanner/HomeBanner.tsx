import styles from "./HomeBanner.module.css";

export default function HomeBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_info}>
        <h1>CuidadoDigital</h1>
        <p>
          Proteja sua privacidade digital. <br />
          Descubra se seus dados foram comprometidos. <br />
          Aprenda medidas de segurança. <br />
          <mark>Seja o guardião dos seus dados.</mark>
        </p>
      </div>
      <div className={styles.banner_image}></div>
    </section>
  );
}
