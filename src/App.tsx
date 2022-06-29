import { useCallback } from "react";

import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreType } from "./store/store";
import { counterIncrementAction } from "./store/counter/actions/counter-increment.action";

function App() {
  const counterState = useSelector((state: RootStoreType) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(counterIncrementAction());
  }, [dispatch]);

  return (
    <div className="App">
      Counter: {counterState}
      <button type="button" onClick={handleIncrement}>
        INCREMENT
      </button>
    </div>
  );
}

export default App;
