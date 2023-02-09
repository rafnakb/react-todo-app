import styles from './TaskList.module.css';

interface TaskInfo {
  createdTaskCount: number;
  doneTaskCount: number;
}

export function TaskList({ ...props }: TaskInfo) {

  return (
    <div className={styles.taskList}>
      <div className={styles.taskInfo}>
        <strong className={styles.createdTasks}>
          Tarefas Criadas
          <span>
            {props.createdTaskCount}
          </span>
        </strong>
        <strong className={styles.doneTasks}>
          Concluídas
          <span>
            {props.doneTaskCount}{' de '}{props.createdTaskCount}
          </span>
        </strong>
      </div>
    </div>
  );
}