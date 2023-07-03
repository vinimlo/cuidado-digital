import Head from "next/head";
import styles from "./Layout.module.css";
import { Props } from "@/types";
import Link from "next/link";

export default function Layout({ children }: Props) {

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Cuidado Digital" />
        <title>Cuidado Digital</title>
        <Link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></Link>
      </Head>
      <header className={styles.header}>
        <h1>CuidadoDigital</h1>
        <nav>
          <ul id="menu_ul">
            <li>
              <Link href="/" className={styles.nav_link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/password" className={styles.nav_link}>
                Minha senha é boa?
              </Link>
            </li>
            <li>
              <Link href="/content" className={styles.nav_link}>
                Conteúdos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        Copyleft <span className={styles.copyleft_symbol}>©</span> 2023 Cuidado
        Digital
      </footer>
    </div>
  );
}
