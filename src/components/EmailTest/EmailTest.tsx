import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./EmailTest.module.css";
import Link from "next/link";
import Image from "next/image";
import { formatDate, formatDescription } from "@/lib/utils";

interface ApiResponse {
  breaches: {
    BreachDate: string;
    DataClasses: string[];
    Description: string;
    Domain: string;
    LogoPath: string;
    Name: string;
  }[];
}

async function getBreach(email: string) {
  try {
    const response = await axios
      .get(`http://localhost:3000/api/email/${email}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export default function EmailTest() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (email) {
      getBreach(email).then((data) => setData(data));
    }
  }, [email]);

  const handleButtonClick = () => {
    if (inputRef.current) {
      setEmail(inputRef.current.value);
    }
  };

  return (
    <div>
      <div className={styles.email_input_container}>
        <input type="email" placeholder="Digite seu email..." ref={inputRef} className={styles.email_input}/>
        <button onClick={handleButtonClick}>Ok</button>
      </div>
      {data && (
        <div className={styles.results}>
          <div className={styles.message}>
            <h2>Oops!</h2>
            <p>Encontramos: {data.breaches.length} vazamentos para o e-mail informado</p>
          </div>
          <table className={styles.table}>
            <tr className={styles.row_header}>
              <td className={styles.company}></td>
              <td className={styles.breach_date}></td>
              <td className={styles.description}></td>
            </tr>
            {data.breaches.map((item, index) => (
              <tr className={styles.row}>
                <td className={styles.td}>
                  <div className={styles.company}>
                    <Image
                      src={item.LogoPath}
                      alt="Logotipo do Website"
                      width={100}
                      height={100}
                      className={styles.image}
                    ></Image>
                    <Link
                      href={`https://${item.Domain}`}
                      target="_blank"
                      className={styles.name}
                    >
                      {item.Name}
                    </Link>
                  </div>
                </td>
                <td className={styles.breach_date}>
                  {formatDate(item.BreachDate)}
                </td>
                <td
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: formatDescription(item.Description, item.DataClasses) }}
                >
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
