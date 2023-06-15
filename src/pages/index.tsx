import Head from 'next/head';
import PasswordTest from '@/Components/PasswordTest';
import EmailTest from '@/Components/EmailTest';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuidado Digital</title>
      </Head>
      <main>
        <h1>Cuidado Digital</h1>
        {/* <PasswordTest /> */}
        <EmailTest />
      </main>
    </>
  );
}
