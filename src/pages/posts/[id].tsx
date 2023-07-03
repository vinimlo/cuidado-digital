import Layout from "@/features/Layout/Layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "@/components/PostDate/PostDate";
import styles from "./posts.module.css";

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: any) {
  return (
    <Layout>
      <div className={styles.container}>
        <article>
          <h1 className={styles.headingXl}>{postData.title}</h1>
          <div className={styles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </Layout>
  );
}
