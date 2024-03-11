import { useState } from "react";

import { TbTrash } from "react-icons/tb";

import styles from './Task.module.css';

export interface TaskType {
  id: string;
  text: string;
  isDone: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: string) => void;
  onChangeDoneTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onChangeDoneTask }: TaskProps) {
  const [taskDone, setTaskDone] = useState(task.isDone);

  function handleDeleteTask () {
    onDeleteTask(task.id)
  }

  function handleChangeTaskDone() {
    setTaskDone((state) => !state);
    onChangeDoneTask(task.id)
  }

  const taskStyles = (taskDone ? styles.taskItem + ' ' + styles.done : styles.taskItem);

  return (
    <div className={taskStyles}>
      <div className={styles.checkbox}>
        <input 
          type="checkbox"
          defaultChecked={taskDone}
          onChange={handleChangeTaskDone}
        />
      </div>
      <p>{task.text}</p>
      <button type="button" onClick={handleDeleteTask}>
        <TbTrash />
      </button>
    </div>
  )
}