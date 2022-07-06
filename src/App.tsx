import { bindActionCreators } from "redux";
import "./App.css";
import { productMocks } from "./mocks/products";
import { Counter } from "./modules/counter";
import { ToDo } from "./modules/todo";
import { addProductThunk } from "./store/basket-async/thunks/add-product.thunk";
import { changeQuantityProductThunk } from "./store/basket-async/thunks/change-quantity.thunk";
import { removeProductThunk } from "./store/basket-async/thunks/remove-product.thunk";
import { addProduct } from "./store/basket/basket.slice";
import { incrementAction } from "./store/counter-toolkit/actions/counter-increment.action";
import { useAppDispatch } from "./store/hooks/useAppDispatch";
import { useAppSelector } from "./store/hooks/useAppSelector";

function App(): JSX.Element {
  const s = useAppSelector((state) => state.basketAsync);
  const dispatch = useAppDispatch();

  const counterActions = bindActionCreators(
    { incrementAction, addProduct },
    dispatch
  );

  const createAndEditProduct = async () => {
    await dispatch(
      addProductThunk({ productId: productMocks[0].id, quantity: 2 })
    );
    await dispatch(
      addProductThunk({ productId: productMocks[1].id, quantity: 2 })
    );
    await dispatch(
      addProductThunk({ productId: productMocks[2].id, quantity: 2 })
    );
    await dispatch(
      changeQuantityProductThunk({ productId: productMocks[0].id, quantity: 5 })
    );

    await dispatch(removeProductThunk({ productId: productMocks[0].id }));

    await dispatch(
      addProductThunk({ productId: productMocks[1].id, quantity: 2 })
    );
  };

  return (
    <div className="App">
      {s.basket.map((p) => (
        <h1 key={p.id}>
          {p.title} {p.quantity} X {p.price} | {p.totalPrice}$
        </h1>
      ))}
      <button onClick={createAndEditProduct}>Add and update product</button>
      <button onClick={() => counterActions.incrementAction()}></button>
      <Counter />
      <ToDo />
    </div>
  );
}

export default App;
