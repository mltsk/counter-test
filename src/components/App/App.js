import { useDispatch, useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import { addCounter } from "../../store/counters/countersSlice";
import InteractiveCounter from "../InteractiveCounter/InteractiveCounter";
import styles from "./App.module.scss";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleAddCounter = () => {
    dispatch(addCounter());
  };

  return (
    <div className={styles.App}>
      {!counters.length && <b>There are no counters</b>}
      {counters.map(({ id, value, type }) => {
        if (type === "interactive") {
          return <InteractiveCounter key={id} value={value} id={id} />;
        }
        return <Counter key={id} value={value} id={id} />;
      })}
      <button onClick={handleAddCounter}>Add counter</button>
    </div>
  );
}

export default App;
