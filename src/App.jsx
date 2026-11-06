import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  function onInputButtonClick() {
    const promptValue = prompt("Введите значение:");

    if (promptValue === null) {
      return;
    }

    if (promptValue.length < 3) {
      setError("Введённое значение должно содержать минимум 3 символа");
      return;
    }

    setError("");
    setValue(promptValue);
  }

  function onAddButtonClick() {
    const newItem = {
      id: Date.now(),
      value: value,
    };

    setList([...list, newItem]);
    console.log(newItem);
    setValue("");
  }

  return (
    <div className={styles.app}>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>

      <p className={styles["no-margin-text"]}>
        Текущее значение <code>value</code>: "
        <output className={styles["current-value"]}>{value}</output>"
      </p>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles["buttons-container"]}>
        <button className={styles.button} onClick={onInputButtonClick}>
          Ввести новое
        </button>

        <button
          className={styles.button}
          disabled={value.length < 3}
          onClick={onAddButtonClick}
        >
          Добавить в список
        </button>
      </div>

      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>

        {list.length === 0 && (
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        )}

        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.id} className={styles["list-item"]}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
