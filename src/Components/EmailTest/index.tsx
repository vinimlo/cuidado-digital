import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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

const options = {
  method: 'GET',
  url: 'https://breachdirectory.p.rapidapi.com/',
  params: {
    func: 'auto',
    term: '' // email vindo do input
  },
  headers: {
    'X-RapidAPI-Key': '0271c76c26msh5c1032fc8153e5cp143682jsn949eac4db73d', // chave da api criada com meu perfil
    'X-RapidAPI-Host': 'breachdirectory.p.rapidapi.com'
  }
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
  const [email, setEmail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (email) {
      getBreach(email).then(data => setData(data));
    }
  }, [email]);

  const handleButtonClick = () => {
    if (inputRef.current) {
      setEmail(inputRef.current.value);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Digite seu email..." ref={inputRef} />
      <button onClick={handleButtonClick}>Testar</button>
      {data && (
        <div className="result">
          <h1>Dados encontrados:</h1>
          <p>Sucesso: {data.success ? 'Sim' : 'Não'}</p>
          <p>Itens encontrados: {data.found}</p>
          <h2>Resultado:</h2>
          <ul>
            {data.result.map((item, index) => (
              <li key={index}>
                <p>Fonte: {item.sources.join(', ')}</p>
                <p>Apenas Email: {item.email_only ? 'Sim' : 'Não'}</p>
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
