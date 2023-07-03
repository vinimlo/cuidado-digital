import EmailTest from "@/components/EmailTest/EmailTest";
import styles from "./index.module.css";
import Layout from "@/features/Layout/Layout";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import PostDate from "@/components/PostDate/PostDate";
import HomeBanner from "@/components/HomeBanner/HomeBanner";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <HomeBanner />
      <EmailTest />
    </Layout>
  );
}
