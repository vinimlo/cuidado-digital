import styles from "./team.module.css";
import Layout from "@/features/Layout/Layout";
import TeamMember from "@/components/TeamMember/TeamMember";

export async function getStaticProps() {
  const teamData = [
    {
      id: 1,
      name: "Jarbas Tavares Santos",
      photo: "/images/members/jarbas_tavares.jpg",
    },
    {
      id: 2,
      name: "Jorge Ferreira Gomes Da Silva",
      photo: "/images/members/jorge_gomes.jpg",
    },
    {
      id: 3,
      name: "Luiz Gonzaga Santana Dos Santos",
      photo: "/images/members/user.png",
    },
    {
      id: 4,
      name: "Vinícius Félix Santos De Jesus",
      photo: "/images/members/vinicius_felix.jpg",
    },
    {
      id: 5,
      name: "Vinícius Melo Almeida",
      photo: "/images/members/vinicius_melo.jpg",
    },
  ];

  return {
    props: {
      teamData,
    },
  };
}

export default function Team({ teamData }: any) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.spacer}></div>
        <div className={styles.cards}>
          {teamData.map(({ id, name, photo }: any) => (
            <TeamMember photo={photo} name={name} key={id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
