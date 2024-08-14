// api.ts
export const rollDice = async (): Promise<string> => {
    try {
        const response = await fetch('/api/rollDice');
        if (!response.ok) {
            throw new Error('Error al lanzar los dados');
        }
        return await response.text();
    } catch (error) {
        console.error(error);
        return 'Error al comunicarse con el servidor';
    }
};
