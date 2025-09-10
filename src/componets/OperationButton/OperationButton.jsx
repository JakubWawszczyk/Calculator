import styles from './OperationButton.module.css';
export function OperationButton({ children, setArr }) {
  return (
    <li className={styles.operationButtonLi}>
      <button
        onClick={() => {
          setArr(children);
        }}
        className={styles.operationButton}
      >
        {' '}
        {children}
      </button>
    </li>
  );
}
