import styles from './TaskSummary.module.css'

export interface TaskSummaryType {
  done: number;
  total: number;
}

interface TaskSummaryProps {
  summary: TaskSummaryType;
}

export function TaskSummary({ summary }: TaskSummaryProps) {
  return (
    <div className={styles.summaryContent}>
      <div className={styles.summaryItem}>
        <strong className={styles.blue}>Tarefas criadas</strong>
        <span>{summary.total}</span>
      </div>
      <div className={styles.summaryItem}>
        <strong className={styles.purple}>Concluídas</strong>
        <span>{summary.done} de {summary.total}</span>
      </div>
    </div>
  )
}