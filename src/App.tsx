import "./App.css";
import { Counter } from "./modules/counter";
import { ToDo } from "./modules/todo";

function App(): JSX.Element {
  return (
    <div className="App">
      <Counter />
      <ToDo />
    </div>
  );
}

export default App;
