import React, { useState } from 'react';
import { rollDice } from '../services/api';
import { ResultDisplay } from './ResultDisplay';


export const DiceRoller: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);

    const handleRollDice = async () => {
        const diceResult = await rollDice();
        setResult(diceResult);
    };

    return (
        <div>
            <button onClick={handleRollDice}>Roll Dice</button>
            <ResultDisplay result={result} />
        </div>
    );
};
