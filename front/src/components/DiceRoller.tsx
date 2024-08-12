import { useState } from 'react';

export const DiceRoller = () => {
    const [result, setResult] = useState<string | null>(null); // Cambié el tipo a string | null

    const rollDice = async (): Promise<void> => {
        try {
            const response = await fetch('/rollDice');
            const data: string = await response.text(); // Usar response.text() porque el backend devuelve un string
            setResult(data);
        } catch (error) {
            console.error('Error rolling dice:', error);
        }
    };

    return (
        <div>
            <button onClick={rollDice}>Roll Dice</button>
            {result !== null && <p>{result}</p>}
        </div>
    );
};
