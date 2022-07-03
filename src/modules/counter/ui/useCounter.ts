import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { bindActionCreators } from "redux";
import { counterActions } from "../../../store/counter";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";

export const useCounter = () => {
  const [divide, setDivide] = useState<number>(0);
  const [multiply, setMultiply] = useState<number>(0);

  const counterState = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const {
    counterDecrementAction,
    counterDivideAction,
    counterIncrementAction,
    counterMultiplyAction,
    counterPowAction,
    counterPowByValueAction,
  } = useMemo(() => bindActionCreators(counterActions, dispatch), [dispatch]);

  const handleIncrement = useCallback(() => {
    counterIncrementAction();
  }, [counterIncrementAction]);

  const handleDecrement = useCallback(() => {
    counterDecrementAction();
  }, [counterDecrementAction]);

  const handlePow = useCallback(() => {
    counterPowAction();
  }, [counterPowAction]);

  const handlePowByValue = useCallback((): void => {
    counterPowByValueAction({ value: 10 });
  }, [counterPowByValueAction]);

  const handleDivide = useCallback(() => {
    counterDivideAction({ value: divide });
  }, [counterDivideAction, divide]);

  const handleMultiply = useCallback(() => {
    counterMultiplyAction({ value: multiply });
  }, [counterMultiplyAction, multiply]);

  const handleChangeMultiply = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMultiply(+e.target.value);
    },
    []
  );

  const handleChangeDivide = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDivide(+e.target.value);
  }, []);

  return {
    divide,
    handleChangeDivide,
    handleChangeMultiply,
    handleMultiply,
    handleDivide,
    handlePowByValue,
    counterState,
    handleIncrement,
    handleDecrement,
    handlePow,
    multiply,
  };
};
