import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import Team from "./pages/Team";
import Footer from "./layouts/Footer";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/shopping">
          <ProductList />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
