import styles from './Task.module.css';
import { ClipboardText, PlusCircle, XCircle } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import { TaskListInfo } from './TaskListInfo';
import { TaskItemList } from './TaskItemList';

export function Task() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [numberOfDoneTasks, setNumberOfDoneTasks] = useState(0);

  function handleCreateNewTask(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (newTaskText === '') return;
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleDoneStatus(doneTaskStatus: boolean) {
    if (doneTaskStatus == true) {
      setNumberOfDoneTasks((done: number) => {
        return done - 1;
      });
    }
    if (doneTaskStatus == false) {
      setNumberOfDoneTasks((done: number) => {
        return done + 1;
      });
    }
  }

  function deleteTask(taskToDelete: string, taskToDeleteIsDone: boolean) {
    if (taskToDeleteIsDone == true) {
      handleDoneStatus(true);
    }
    setTasks(tasks.filter(task => {
      return task !== taskToDelete
    }));
  }

  // function clearTaskList() {
        
      // To do

  // }

  const isTaskListEmpty = tasks.length === 0;

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
        doneTaskCount={numberOfDoneTasks}
      />

      {isTaskListEmpty && (
        <div
          className={styles.emptyInfo}>
          <hr />
          <ClipboardText size={56} className={styles.emptyIcon} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e oranize seus intens a fazer</p>
        </div>
      )}

      <div>
        {tasks.map(task => {
          return <TaskItemList
            key={task}
            taskText={task}
            onDoneTask={handleDoneStatus}
            onDeleteTask={deleteTask}
          />
        })}
      </div>

      {/* {!isTaskListEmpty && (
        <button
          className={styles.clearButton}
          onClick={clearTaskList}
        >
          <XCircle size={24} />
        </button>
      )} */}

    </div>
  );
}