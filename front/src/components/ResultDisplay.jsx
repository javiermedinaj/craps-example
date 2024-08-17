import React from 'react';
import './ResultDisplay.css';

export const ResultDisplay = ({ result }) => {
  return (
    <div>
      {result !== null ? (
        <p className="result-text">Resultado: {result}</p>
      ) : (
        <p className="placeholder-text">Lanza los dados para ver el resultado</p>
      )}
    </div>
  );
};