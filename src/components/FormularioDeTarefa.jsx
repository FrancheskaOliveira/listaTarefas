import React, { useState } from 'react';

function FormularioDeTarefa({ adicionarTarefa }) {
    const [textoTarefa, setTextoTarefa] = useState('');

    const lidarComEnvio = (e) => {
        e.preventDefault();
        if (textoTarefa.trim() !== '') {
            adicionarTarefa(textoTarefa);
            setTextoTarefa('');
        }
    };

    return (
        <form onSubmit={lidarComEnvio}>
            <input
                type="text"
                placeholder="Adicionar nova tarefa"
                value={textoTarefa}
                onChange={(e) => setTextoTarefa(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default FormularioDeTarefa;