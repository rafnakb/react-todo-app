import { Header } from './components/Header';
import { Task } from './components/Task';
import './global.css';
import { TaskItemList } from './components/TaskItemList';

export default function App() {
  return (
    <>
      <Header />
      <Task />
    </>
  );
}
