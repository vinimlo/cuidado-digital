import React, { useEffect, useState } from 'react';
import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core';
import { translations } from '@zxcvbn-ts/language-pt-br';

const options = {
  translations
};

zxcvbnOptions.setOptions(options);

export default function PasswordTest() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<ZxcvbnResult | null>(null);

  useEffect(() => {
    if (!password) {
      const resultZeroPassword = zxcvbn('');
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
    <div>
      <div>
        Check your password strength with{' '}
        <a href="https://zxcvbn-ts.github.io/zxcvbn/guide/">zxcvbn </a>
      </div>
      <input type="text" placeholder="Type password..." onChange={handleInputChange} />
      {result && (
        <table className="result">
          <tbody>
            <tr>
              <td>password:</td>
              <td colSpan={2}>
                <strong>{result.password}</strong>
              </td>
            </tr>
            <tr>
              <td>guessesLog10:</td>
              <td colSpan={2}>{result.guessesLog10}</td>
            </tr>
            <tr>
              <td>score:</td>
              <td>{result.score} / 4</td>
            </tr>

            <tr>
              <td>function runtime (ms):</td>
              <td colSpan={2}>{result.calcTime}</td>
            </tr>
            <tr>
              <td colSpan={3}>guess times:</td>
            </tr>
            <tr>
              <td>100 / hour:</td>
              <td>{result.crackTimesDisplay.onlineThrottling100PerHour}</td>
              <td>(ataque online acelerado)</td>
            </tr>
            <tr>
              <td>10&nbsp; / second:</td>
              <td>{result.crackTimesDisplay.onlineNoThrottling10PerSecond}</td>
              <td>(ataque online desenfreado)</td>
            </tr>
            <tr>
              <td>10k / second:</td>
              <td>{result.crackTimesDisplay.offlineSlowHashing1e4PerSecond}</td>
              <td>(ataque offline, hash lento, muitos núcleos)</td>
            </tr>

            <tr>
              <td>10B / second:</td>
              <td>{result.crackTimesDisplay.offlineFastHashing1e10PerSecond}</td>
              <td>(ataque offline, hash rápido, muitos núcleos)</td>
            </tr>

            {result.feedback.warning && (
              <tr>
                <td>warning:</td>
                <td colSpan={2}>{result.feedback.warning}</td>
              </tr>
            )}

            {!!result.feedback.suggestions.length && (
              <tr>
                <td>suggestions:</td>
                <td colSpan={2}>{result.feedback.suggestions}</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
