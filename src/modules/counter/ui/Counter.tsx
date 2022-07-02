import { useCounter } from "./useCounter";

export const Counter = (): JSX.Element => {
  const {
    counterState,
    divide,
    handleChangeDivide,
    handleChangeMultiply,
    handleDecrement,
    handleDivide,
    handleIncrement,
    handleMultiply,
    handlePow,
    handlePowByValue,
    multiply,
  } = useCounter();
  return (
    <div>
      <h1> Counter: {counterState}</h1>
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
};
