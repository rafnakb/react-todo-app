import styles from './Task.module.css';
import { ClipboardText, PlusCircle, XCircle } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import { TaskListInfo } from './TaskListInfo';
import { TaskItem } from './TaskItem';
import { v4 as uuidv4 } from 'uuid';

export interface TaskModel {
  id: string;
  content: string;
  isDone: boolean
}

export function Task() {

  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (newTaskText === '') return;

    const newTask: TaskModel = {
      id: uuidv4(),
      content: newTaskText,
      isDone: false
    }

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }

  function handleDoneStatus(idTask: string) {
    const updateTaskList = tasks.map(task => {
      if (task.id === idTask) {
        return { ...task, isDone: !task.isDone }
      }
      return task;
    });
    setTasks(updateTaskList);
  }

  function handleDeleteTask(idTask: string) {
    const updateTaskList = tasks.filter(task => {
      return task.id !== idTask
    });
    setTasks(updateTaskList);
  }

  const isTaskListEmpty = tasks.length === 0;

  function getDoneTaskCount(): number {
    if (isTaskListEmpty) {
      return 0;
    }

    return tasks.filter(task => task.isDone === true).length;
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

      <TaskListInfo
        numberOfTasks={tasks.length}
        doneTaskCount={getDoneTaskCount()}
      />

      {isTaskListEmpty && (
        <div
          className={styles.emptyInfo}>
          <hr />
          <ClipboardText size={56} className={styles.emptyIcon} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}

      <div>
        {tasks.map((task: TaskModel) => {
          return <TaskItem
            key={task.id}
            id={task.id}
            content={task.content}
            isDone={task.isDone}
            onDoneTask={handleDoneStatus}
            onDeleteTask={handleDeleteTask}
          />
        })}
      </div>
    </div>
  );
}