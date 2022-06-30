import { ChangeEvent, useCallback, useState } from "react";

import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreType } from "./store/store";
import { counterIncrementAction } from "./store/counter/actions/counter-increment.action";

import { counterDecrementAction } from "./store/counter/actions/counter-decrement.action";
import { counterPowAction } from "./store/counter/actions/counter-pow.action";
import { counterPowByValueAction } from "./store/counter/actions/counter-pow-by-value.action";
import { counterMultiplyAction } from "./store/counter/actions/counter-multiply.action";
import { counterDivideAction } from "./store/counter/actions/counter-divide.action";

function App(): JSX.Element {
  const [divide, setDivide] = useState<number>(0);
  const [multiply, setMultiply] = useState<number>(0);

  const counterState = useSelector((state: RootStoreType) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(counterIncrementAction());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(counterDecrementAction());
  }, [dispatch]);

  const handlePow = useCallback(() => {
    dispatch(counterPowAction());
  }, [dispatch]);

  const handlePowByValue = useCallback((): void => {
    dispatch(counterPowByValueAction({ value: 10 }));
  }, [dispatch]);

  const handleDivide = useCallback(() => {
    dispatch(counterDivideAction({ value: divide }));
  }, [dispatch, divide]);

  const handleMultiply = useCallback(() => {
    dispatch(counterMultiplyAction({ value: multiply }));
  }, [dispatch, multiply]);

  const handleChangeMultiply = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMultiply(+e.target.value);
    },
    []
  );

  const handleChangeDivide = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDivide(+e.target.value);
  }, []);

  return (
    <div className="App">
      Counter: {counterState}
      <button type="button" onClick={handleIncrement}>
        INCREMENT
      </button>
      <button type="button" onClick={handleDecrement}>
        INCREMENT
      </button>
      <button type="button" onClick={handlePow}>
        POW
      </button>
      <button type="button" onClick={handlePowByValue}>
        POW_BY_VALUE
      </button>
      <div>
        DIVIDE
        <input type="number" value={divide} onChange={handleChangeDivide} />
        <button type="button" onClick={handleDivide}>
          DIVIDE
        </button>
      </div>
      <div>
        MULTIPLY
        <input type="number" value={multiply} onChange={handleChangeMultiply} />
        <button type="button" onClick={handleMultiply}>
          MULTIPLY
        </button>
      </div>
    </div>
  );
}

export default App;
