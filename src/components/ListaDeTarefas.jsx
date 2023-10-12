import React from 'react';
import Tarefa from './Tarefa';

function ListaDeTarefas({ tarefas, editarTarefa, alternarTarefaConcluida }) {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    editarTarefa={editarTarefa}
                    alternarTarefaConcluida={alternarTarefaConcluida}
                />
            ))}
        </ul>
    );
}

export default ListaDeTarefas;