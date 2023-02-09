import styles from './Task.module.css';
import { PlusCircle } from 'phosphor-react';
import { MouseEvent, MouseEventHandler, useState } from 'react';
import { TaskItemList } from './TaskListItem';
import { TaskList } from './TaskList';

export function Task() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (newTaskText === '') return;
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  return (
    <div className={styles.task}>
      <form className={styles.taskForm}>
        <input
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={(event) => setNewTaskText(event.target.value)}
        />
        <button onClick={handleCreateNewTask}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <TaskList
        createdTaskCount={tasks.length}
        doneTaskCount={0}
      />

      <div>
        {tasks.map(task => {
          return <TaskItemList
            taskText={task}
          />
        })}
      </div>
    </div>
  );
}