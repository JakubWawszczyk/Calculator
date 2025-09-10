import { useState } from 'react';
import styles from './App.module.css';
import { NumberButton } from './componets/NumberButton/NumberButton';
import { OperationButton } from './componets/OperationButton/OperationButton';
function App() {
  const [mathematicOperation, setMathematicOperation] = useState([]);
  const [answer, setAnswer] = useState(false);
  function handleNumberButtonClick(number) {
    setMathematicOperation([...mathematicOperation, number]);
    setAnswer(false);
  }
  function handleOperationButtonClick(operator) {
    setMathematicOperation([...mathematicOperation, operator]);
    setAnswer(false);
  }
  function handleEqualButtonClick() {
    try {
      let newAnserw = eval(mathematicOperation.join(''));
      setAnswer(newAnserw);
      setMathematicOperation([newAnserw]);
    } catch (e) {
      setMathematicOperation([]);

      setAnswer('error');
    }
  }
  function handleClearButtonCLick() {
    setMathematicOperation([]);
    setAnswer(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.displayBox}>
        {!answer && <p>{mathematicOperation.join('')}</p>}
        {answer !== false && <p>{answer}</p>}
      </div>
      <div className={styles.buttons}>
        <ul className={styles.buttonsList}>
          <NumberButton setArr={handleNumberButtonClick}>1</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>2</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>3</NumberButton>
          <OperationButton setArr={handleOperationButtonClick}>
            +
          </OperationButton>
          <NumberButton setArr={handleNumberButtonClick}>4</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>5</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>6</NumberButton>
          <OperationButton setArr={handleOperationButtonClick}>
            -
          </OperationButton>
          <NumberButton setArr={handleNumberButtonClick}>7</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>8</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>9</NumberButton>
          <OperationButton setArr={handleOperationButtonClick}>
            *
          </OperationButton>
          <NumberButton setArr={handleNumberButtonClick}>0</NumberButton>
          <NumberButton setArr={handleNumberButtonClick}>.</NumberButton>
          <li className={styles.clear}>
            <button
              onClick={() => {
                handleClearButtonCLick();
              }}
            >
              C
            </button>
          </li>
          <OperationButton setArr={handleOperationButtonClick}>
            /
          </OperationButton>
          <li className={styles.equal}>
            <button
              onClick={() => {
                handleEqualButtonClick();
              }}
            >
              =
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
