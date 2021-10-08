import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product/Product";
import Rating from "./components/Rating/Rating";
import Star from "./components/Product/Star";
import Demo from "./components/Product/Demo";
import Home from "./components/Home";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import data from "./data/data";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/footer">
        <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
