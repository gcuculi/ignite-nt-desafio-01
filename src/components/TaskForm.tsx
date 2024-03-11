import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { FiPlusCircle } from "react-icons/fi";

import styles from './TaskForm.module.css';

interface TaskFormProps {
  onCreateNewTask: (newTaskText: string) => void;
}

export function TaskForm({ onCreateNewTask }:TaskFormProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTrask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(newTaskText);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskTextEmpty = newTaskText.length === 0;

  return (
    <form onSubmit={handleCreateNewTrask} className={styles.taskFormContainer}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit" disabled={isNewTaskTextEmpty}>
        Criar
        <FiPlusCircle />
      </button>
    </form>
  )
}