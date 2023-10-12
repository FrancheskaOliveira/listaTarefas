import React, { useState } from 'react';
import './App.css';
import ListaDeTarefas from './ListaDeTarefas';
import FormularioDeTarefa from './FormularioDeTarefa';
import FiltroBarra from './FiltroBarra';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState('');

  const adicionarTarefa = (textoTarefa) => {
    setTarefas([...tarefas, { id: Date.now(), texto: textoTarefa, concluida: false }]);
  };

  const editarTarefa = (idTarefa, novoTexto) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === idTarefa ? { ...tarefa, texto: novoTexto } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const alternarTarefaConcluida = (idTarefa) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === idTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const tarefasFiltradas = tarefas.filter((tarefa) =>
    tarefa.texto.toLowerCase().includes(filtroTexto.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <FormularioDeTarefa adicionarTarefa={adicionarTarefa} />
      <FiltroBarra filtroTexto={filtroTexto} setFiltroTexto={setFiltroTexto} />
      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        editarTarefa={editarTarefa}
        alternarTarefaConcluida={alternarTarefaConcluida}
      />
    </div>
  );
}

export default App;