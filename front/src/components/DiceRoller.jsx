import React, { useState } from 'react';
import { rollDice } from '../services/api';
import { ResultDisplay } from './ResultDisplay';
import './DiceRoller.css';

export const DiceRoller = ({ setRotation }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRollDice = async () => {
    setLoading(true);
    setError(null);

    // Genera una rotación aleatoria para el dado
    const randomRotation = [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ];
    setRotation(randomRotation); // Establece la nueva rotación

    try {
      const diceResult = await rollDice();
      setResult(diceResult);
    } catch (err) {
      setError('Error al lanzar los dados, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dice-roller-container">
      <button className="dice-button" onClick={handleRollDice} disabled={loading}>
        {loading ? 'Rolling...' : 'Roll Dice'}
      </button>
      {error && <p className="error-message">{error}</p>}
      <ResultDisplay result={result} />
    </div>
  );
};
