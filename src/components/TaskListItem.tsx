import styles from './TaskItemList.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
import { useState } from 'react';

interface TaskContent {
  taskText: string;
}

export function TaskItemList({ taskText }: TaskContent) {

  return (
    <>
      <div className={styles.taskItem}>
        <button className={styles.unchecked}>
          <Circle size={24} />
        </button>
        <p>
          {taskText}
        </p>
        <button className={styles.trash}>
          <Trash size={14} weight="bold" />
        </button>
      </div>
    </>
  );
}