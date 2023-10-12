import React, { useState } from 'react';

function Tarefa({ tarefa, editarTarefa, alternarTarefaConcluida }) {
    const [estaEditando, setEstaEditando] = useState(false);
    const [novoTexto, setNovoTexto] = useState(tarefa.texto);

    const lidarComEdicao = () => {
        if (novoTexto.trim() !== '') {
            editarTarefa(tarefa.id, novoTexto);
            setEstaEditando(false);
        }
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => alternarTarefaConcluida(tarefa.id)}
            />
            {estaEditando ? (
                <input
                    type="text"
                    value={novoTexto}
                    onChange={(e) => setNovoTexto(e.target.value)}
                    onBlur={lidarComEdicao}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') lidarComEdicao();
                    }}
                />
            ) : (
                <span
                    className={tarefa.concluida ? 'concluida' : ''}
                    onClick={() => setEstaEditando(true)}
                >
                    {tarefa.texto}
                </span>
            )}
        </li>
    );
}

export default Tarefa;