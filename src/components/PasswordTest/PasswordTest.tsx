import React, { useEffect, useState } from "react";
import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from "@zxcvbn-ts/core";
import { translations } from "@zxcvbn-ts/language-pt-br";
import styles from "./PasswordTest.module.css";

const options = {
  translations,
};

zxcvbnOptions.setOptions(options);

export default function PasswordTest() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<ZxcvbnResult | null>(null);

  useEffect(() => {
    if (!password) {
      const resultZeroPassword = zxcvbn("");
      setResult(resultZeroPassword);
    }
  }, [password]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    const zxcvbnResult = zxcvbn(inputValue);
    setResult(zxcvbnResult);
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacer}></div>
      <div className={styles.password_input_container}>
        <input
          type="text"
          placeholder="Digite uma senha..."
          onChange={handleInputChange}
          className={styles.password_input}
        />
      </div>
      <div className={styles.spacer}></div>
      {result && (
        <div className={styles.password_results}>
          <div>
            <p>
              Pontuação: <strong>{result.score} / 4</strong>
            </p>
          </div>
          <div>
            <h3>Em quantas tentativas descobririam a minha senha?</h3>
            <table className={styles.time_table}>
              <tr>
                <td className={styles.frequency}>100 / hora:</td>
                <td className={styles.time_to_crack}>
                  {result.crackTimesDisplay.onlineThrottling100PerHour}
                </td>
                <td className={styles.reference}>(ataque online acelerado)</td>
              </tr>
              <tr>
                <td className={styles.frequency}>10 / segundo:</td>
                <td className={styles.time_to_crack}>
                  {result.crackTimesDisplay.onlineNoThrottling10PerSecond}
                </td>
                <td className={styles.reference}>
                  (ataque online desenfreado)
                </td>
              </tr>
              <tr>
                <td className={styles.frequency}>10 Mil / segundo:</td>
                <td className={styles.time_to_crack}>
                  {result.crackTimesDisplay.offlineSlowHashing1e4PerSecond}
                </td>
                <td className={styles.reference}>
                  (ataque offline, hash lento, muitos núcleos)
                </td>
              </tr>
            </table>
          </div>
          {result.feedback.warning && (
            <div>
              <h3>Alerta</h3>
              <p>{result.feedback.warning}</p>
            </div>
          )}

          {!!result.feedback.suggestions.length && (
            <div>
              <h3>Sugestões</h3>
              <p>{result.feedback.suggestions.join(" ")}</p>
            </div>
          )}
        </div>
      )}
      <div className={styles.credits}>
        <span>Validação de força da senha desenvolvida por </span>
        <a href="https://zxcvbn-ts.github.io/zxcvbn/guide/" target="_blank">
          zxcvbn
        </a>
      </div>
    </div>
  );
}
