import { Header } from './components/Header'

import styles from './App.module.css';

import './global.css'
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <>
      <Header />
      <main className={styles.contentContainer}>
        <TaskList />
      </main>
    </>
  )
}
