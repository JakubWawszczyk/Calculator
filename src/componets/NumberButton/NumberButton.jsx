import styles from './NumberButton.module.css';
export function NumberButton({ children, setArr }) {
  return (
    <li className={styles.numberButtonLi}>
      <button
        onClick={() => {
          if (children === '.') setArr('.');
          else setArr(parseInt(children));
        }}
        className={styles.numberButton}
      >
        {children}
      </button>
    </li>
  );
}
