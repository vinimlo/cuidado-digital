import Head from 'next/head';
import PasswordTest from '@/Components/PasswordTest';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuidado Digital</title>
      </Head>
      <main>
        <h1>Cuidado Digital</h1>
        <PasswordTest />
      </main>
    </>
  );
}
