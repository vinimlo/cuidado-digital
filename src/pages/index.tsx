import Head from "next/head";
import EmailTest from "@/components/EmailTest";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuidado Digital</title>
      </Head>
      <main>
        <h1>Cuidado Digital</h1>
        <EmailTest />
      </main>
    </>
  );
}
