import React, { useState } from 'react';

const TaskForm = ({ adicionarTarefa }) => {
  const [texto, setTexto] = useState('');
  const [prazo, setPrazo] = useState('');
  const [prioridade, setPrioridade] = useState('média');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto || !prazo) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const novaTarefa = {
      id: Date.now(),
      texto,
      prazo,
      prioridade,
      concluida: false,
    };
    adicionarTarefa(novaTarefa);
    setTexto('');
    setPrazo('');
    setPrioridade('média');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova Tarefa"
      />
      <input
        type="date"
        value={prazo}
        onChange={(e) => setPrazo(e.target.value)}
      />
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
      >
        <option value="alta">Alta</option>
        <option value="média">Média</option>
        <option value="baixa">Baixa</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;