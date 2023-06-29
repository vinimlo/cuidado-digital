import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ApiResponse {
  success: boolean;
  found: number;
  result: {
    sources: string[];
    email_only: boolean;
    line: string;
    last_breach: string;
  }[];
  query_time: number;
  parse_time: number;
}

let options = {
  method: "GET",
  url: `https://${process.env.NEXT_PUBLIC_BREACH_API_BASE_URL}/`,
  params: {
    func: "auto",
    term: "",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_BREACH_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_BREACH_API_BASE_URL,
  },
};

async function getBreach(email: string) {
  try {
    options.params.term = email;
    const response = await axios.request(options);
    return response.data;
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
      <input type="email" placeholder="Digite seu email" ref={inputRef} />
      <button onClick={handleButtonClick}>Testar</button>
      {data && (
        <div className="result">
          <h1>Dados encontrados:</h1>
          <p>Sucesso: {data.success ? "Sim" : "Não"}</p>
          <p>Itens encontrados: {data.found}</p>
          <h2>Resultado:</h2>
          <ul>
            {data.result.map((item, index) => (
              <li key={index}>
                <p>Fonte: {item.sources.join(", ")}</p>
                <p>Apenas Email: {item.email_only ? "Sim" : "Não"}</p>
                <p>Conteúdo: {item.line}</p>
                <p>Data da violação: {item.last_breach}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
