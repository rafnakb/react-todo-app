import styles from './TaskItem.module.css';
import { CheckCircle, Trash } from 'phosphor-react';

interface TaskContent {
  id: string;
  content: string;
  isDone: boolean;
  onDoneTask: (idTask: string) => void;
  onDeleteTask: (idTask: string) => void;
}

export function TaskItem({ id, content, isDone, onDoneTask, onDeleteTask }: TaskContent) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleDoneTask() {
    onDoneTask(id);
  }

  const taskIsDone = isDone ? styles.done : styles.notDone;

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
          {content}
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