import "./App.css";
import { BasketInReact } from "./modules/basket-api-in-react/ui/baskset-api-in-react";
import { BasketAsyncAxiosInThunkThunk } from "./modules/basket-async-axios-in-thunk/ui/basket-async-axios-in-thunk";
import { BasketAsyncThunk } from "./modules/basket-async-thunk/ui/basket-async-thunk";
import { Counter } from "./modules/counter";
import { ToDo } from "./modules/todo";

function App(): JSX.Element {
  return (
    <div className="App">
      <BasketAsyncThunk />
      <BasketAsyncAxiosInThunkThunk />
      <BasketInReact />
      <Counter />
      <ToDo />
    </div>
  );
}

export default App;
