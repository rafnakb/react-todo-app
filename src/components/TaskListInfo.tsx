import { XCircle } from 'phosphor-react';
import styles from './TaskListInfo.module.css';

interface TaskInfo {
  numberOfTasks: number;
  doneTaskCount: number;
}

export function TaskListInfo({ ...props }: TaskInfo) {

  return (
    <div className={styles.taskList}>
      <div className={styles.taskInfo}>
        <strong className={styles.createdTasks}>
          Tarefas Criadas
          <span>
            {props.numberOfTasks}
          </span>
        </strong>
        
        <strong className={styles.doneTasks}>
          Concluídas
          <span>
            {props.doneTaskCount}{' de '}{props.numberOfTasks}
          </span>
        </strong>
      </div>
    </div>
  );
}