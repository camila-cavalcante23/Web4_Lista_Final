import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import { getTasks, createTask, updateTask, deleteTask } from './api';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tarefas = await getTasks();
        setTarefas(tarefas);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const adicionarTarefa = async (novaTarefa) => {
    try {
      const tarefaCriada = await createTask(novaTarefa);
      setTarefas([...tarefas, tarefaCriada]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const removerTarefa = async (id) => {
    try {
      await deleteTask(id);
      const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
      setTarefas(novasTarefas);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const atualizarTarefa = async (tarefaAtualizada) => {
    try {
      await updateTask(tarefaAtualizada.id, tarefaAtualizada);
      const novasTarefas = tarefas.map(tarefa =>
        tarefa.id === tarefaAtualizada.id ? tarefaAtualizada : tarefa
      );
      setTarefas(novasTarefas);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm adicionarTarefa={adicionarTarefa} />
      <TaskList
        tarefas={tarefas}
        removerTarefa={removerTarefa}
        atualizarTarefa={atualizarTarefa}
      />
    </div>
  );
};

export default App;
