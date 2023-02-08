import styles from './Task.module.css';
import { PlusCircle } from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.task}>
      <form className={styles.taskForm}>
        <input
          placeholder='Adicione uma nova tarefa'
        />
        <button>
          <a>
            Criar
            <PlusCircle size={16} weight="bold" />
          </a>
        </button>
      </form>
    </div>
  );
}