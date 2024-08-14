import React from 'react';

interface ResultDisplayProps {
    result: string | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
    return (
        <div>
            {result !== null ? (
                <p>{result}</p>
            ) : (
                <p>Lanza los dados para ver el resultado.</p>
            )}
        </div>
    );
};
