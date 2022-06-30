import styles from "./InteractiveCounter.module.scss";
import trash from "../../assets/svg/trash.svg";
import { useDispatch } from "react-redux";
import { deleteCounter, increment } from "../../store/counters/countersSlice";
import { useEffect } from "react";

const InteractiveCounter = ({ id, value }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      dispatch(increment(id));
    }, 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  const handlerDeleteCounter = () => {
    dispatch(deleteCounter(id));
  };

  return (
    <div className={styles.container}>
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={handlerDeleteCounter}>
        <img src={trash} width="20" height="20" alt="Delete counter" />
      </button>
    </div>
  );
};

export default InteractiveCounter;
