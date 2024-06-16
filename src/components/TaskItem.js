import React from 'react';

const TaskItem = ({ tarefa, removerTarefa, atualizarTarefa }) => {
  const alternarConclusao = () => {
    const tarefaAtualizada = { ...tarefa, concluida: !tarefa.concluida };
    atualizarTarefa(tarefaAtualizada);
  };

  return (
    <li>
      <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
        {tarefa.texto} - {tarefa.prazo} - {tarefa.prioridade}
      </span>
      <button className="complete" onClick={alternarConclusao}>
        {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
      </button>
      <button className="remove" onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </li>
  );
};

export default TaskItem;
