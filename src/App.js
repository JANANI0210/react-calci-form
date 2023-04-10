import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartoonComponent from "./Components/Routes/CartoonComponent/CartoonComponent";
import PortfolioComponent from "./Components/Routes/PortfolioComponent/PortfolioComponent";
import CalculatorComponent from "./Components/Routes/CalculatorComponent/CalculatorComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/cartoon">Cartoon</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<PortfolioComponent />}></Route>
          <Route
            exact
            path="/calculator"
            element={<CalculatorComponent />}
          ></Route>
          <Route exact path="/cartoon" element={<CartoonComponent />}></Route>
          <Route></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
