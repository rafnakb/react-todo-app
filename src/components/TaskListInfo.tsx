import styles from './TaskListInfo.module.css';

interface TaskInfo {
  numberOfTasks: number;
  doneTaskCount: number;
}

export function TaskListInfo({ ...props }: TaskInfo) {

  const isTaskListEmpty = props.numberOfTasks === 0;

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
            {isTaskListEmpty ? (
              props.numberOfTasks
            ) : (
              props.doneTaskCount + ' de ' + props.numberOfTasks
            )}
          </span>
        </strong>
      </div>
    </div>
  );
}