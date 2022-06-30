import styles from "./Counter.module.scss";
import trash from "../../assets/svg/trash.svg";
import { useDispatch } from "react-redux";
import {
  decrement,
  deleteCounter,
  increment,
} from "../../store/counters/countersSlice";

const Counter = ({ id, value }) => {
  const dispatch = useDispatch();

  const handlerIncrement = () => {
    dispatch(increment(id));
  };

  const handlerDecrement = () => {
    dispatch(decrement(id));
  };

  const handlerDeleteCounter = () => {
    dispatch(deleteCounter(id));
  };

  return (
    <div className={styles.container}>
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={handlerDecrement}>
        -
      </button>
      <button className={styles.button} onClick={handlerIncrement}>
        +
      </button>
      <button className={styles.button} onClick={handlerDeleteCounter}>
        <img src={trash} width="20" height="20" alt="Delete counter" />
      </button>
    </div>
  );
};

export default Counter;
