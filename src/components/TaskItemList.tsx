import styles from './TaskItemList.module.css';
import { CheckCircle, Trash } from 'phosphor-react';
import { useState } from 'react';

interface TaskContent {
  taskText: string;
  onDoneTask: (value: boolean) => void;
  onDeleteTask: (taskToDelete: string, taskToDeleteIsDone: boolean) => void;
}

export function TaskItemList({ taskText, onDoneTask, onDeleteTask }: TaskContent) {

  const [taskDone, setTaskDone] = useState(false);
  let numberOfDoneTask = 0;

  function handleDeleteTask() {
    onDeleteTask(taskText, taskDone);
  }

  function handleDoneTask() {
    const doneStatus = ((state: boolean) => {
      return !state;
    });
    setTaskDone(doneStatus);
    onDoneTask(taskDone);
  }

  const taskIsDone = taskDone ? styles.done : styles.notDone;

  return (
    <>
      <div className={styles.taskItem}>
        <button
          className={taskIsDone}
          onClick={handleDoneTask}
        >
          <CheckCircle size={24} weight="duotone" />
        </button>
        <p className={taskIsDone}>
          {taskText}
        </p>
        <button
          className={styles.buttonTrash}
          onClick={handleDeleteTask}>
          <Trash size={14} weight="bold" />
        </button>
      </div>
    </>
  );
}