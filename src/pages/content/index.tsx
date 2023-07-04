import styles from "./content.module.css";
import Layout from "@/features/Layout/Layout";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import PostDate from "@/components/PostDate/PostDate";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Content({ allPostsData }: any) {
  const images = [
    {
      original: "/images/booklets/1.png",
      thumbnail: "/images/booklets/1.png",
    },
    {
      original: "/images/booklets/2.png",
      thumbnail: "/images/booklets/2.png",
    },
    {
      original: "/images/booklets/3.png",
      thumbnail: "/images/booklets/3.png",
    },
    {
      original: "/images/booklets/4.png",
      thumbnail: "/images/booklets/4.png",
    },
    {
      original: "/images/booklets/5.png",
      thumbnail: "/images/booklets/5.png",
    },
    {
      original: "/images/booklets/6.png",
      thumbnail: "/images/booklets/6.png",
    },
  ];
  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.blog_section}>
          <h2>Posts</h2>
          <ul>
            {allPostsData.map(({ id, date, title }: any) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>
                  <PostDate dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.image_gallery}>
          <h2>Cartilhas</h2>
          <ImageGallery items={images} />
        </section>
      </div>
    </Layout>
  );
}
