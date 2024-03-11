import { TaskForm } from "./TaskForm";
import { TaskSummary, TaskSummaryType } from "./TaskSummary";
import { Task, TaskType } from "./Task";

import { v4 as uuidv4 } from 'uuid';

import todoListImg from '../assets/doto-list-icon.svg';

import styles from './TaskList.module.css';
import { useState } from "react";

const tasksList: TaskType[] = [
  {
    id: "1",
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false
  },
  {
    id: "2",
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false
  },
  {
    id: "3",
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: true
  }
];

export function TaskList() {
  const [tasks, setTasks] = useState(tasksList);

  function createNewTask(text: string) {
    setTasks([...tasks, {
      id: uuidv4(),
      text,
      isDone: false
    }]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => {
      return task.id !== taskId;
    })
    setTasks(newTasks);
  }

  function changeTaskDone(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isDone: !task.isDone}
      }
      return task;
    })
    setTasks(newTasks);
  }

  const tasksSummary: TaskSummaryType = tasks.reduce((acc, task) => {
    if (task.isDone) {
      acc.done += 1;
    }
    acc.total += 1;

    return acc;
  }, {
    done: 0,
    total: 0,
  });

  return (
    <>
      <TaskForm onCreateNewTask={createNewTask}/>
      <TaskSummary summary={tasksSummary}/>
      {tasks.length > 0 ? (
        tasks.map(task => {
          return (
            <Task 
              key={task.id}
              task={task}
              onDeleteTask={deleteTask}
              onChangeDoneTask={changeTaskDone}
            />
          )
        })
      ) : (
        <div className={styles.noTasks}>
          <img src={todoListImg} alt="Imagem da lista de tarefas a fazer" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}      
    </>
  )
}