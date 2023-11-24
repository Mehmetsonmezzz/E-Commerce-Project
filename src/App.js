import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/shopping">
          <ProductList />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
