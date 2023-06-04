# CREATE A MULTI PAGE REACT APPLICATION


### AIM :
       To create a multipage react application with landing page, calculator and API displaying characters.

### ALGORITHM :
        Step 1 : Start the program.
        Step 2 : Install the required packages and create a react application
        Step 3 : Create a folder routes and include the necessary components for all three pages.
        Step 4 : Import the components required in the app.js page.
        Step 5 : To run the application type npm start in the terminal.
        Step 6 : Open the browser and enter the url as localhost:3500 
        Step 7 : Stop the program.
        
### PROGRAM :

app.js
       
      import "./App.css";
      import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
      import CartoonComponent from "./Components/Routes/CartoonComponent/CartoonComponent";
      import PortfolioComponent from "./Components/Routes/PortfolioComponent/PortfolioComponent";
      import CalculatorComponent from "./Components/Routes/CalculatorComponent/CalculatorComponent";
      import ServicesComponent from "./Components/ServicesComponent/ServicesComponent";

     function App() {
     return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li className="nav-text">
            <Link to="/">Portfolio</Link>
          </li>
          <li className="nav-text">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="nav-text">
            <Link to="/cartoon">Ricky and Monty</Link>
          </li>
          <li className="nav-text">
            <Link to="/services">Services</Link>
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
          <Route exact path="/services" element={<ServicesComponent />}></Route>
        </Routes>
      </div>
    </Router>
     );
     }
    export default App;
PortfolioComponent.js

       import React from "react";

      function PortfolioComponent() {
     return (
    <div>
      <div className="Name">Janani D</div>
      <section id="about">
        I'm a student currently in 3rd year, pursuing Computer Science
        Engineering. I wish to secure a responsible career opportunity to fully
        utilize my training and skills, while making a significant contribution
        to the success of the organisation. I'm a dedicated individual looking
        ahead for a challenging role at a progressive organisation that offers
        immense growth opportunities and to implement my advanced knowledge and
        skills
      </section>
      2
      <div class="edu">
        <h3 class="title">Education</h3>
        <div class="edu_item">
          <p class="item_preTitle">2020-2024</p>
          <h4 class="item_title">B.E in CSE - 8.89 CGPA until 5th semester</h4>
          <p class="item_subtitle">Saveetha Engineering Coolege</p>
        </div>
        <div class="edu_item">
          <p class="item_preTitle">2018-2020</p>
          <h4 class="item_title">Grade XII - 75%</h4>
          <p class="item_subtitle">Sri R.M.Jain Vidhyashram</p>
        </div>
        <div class="edu_item">
          <p class="item_preTitle">2017-2018</p>
          <h4 class="item_title">Grade X - 85%</h4>
          <p class="item_subtitle">Sri R.M.Jain Vidhyashram</p>
        </div>
      </div>
      <div class="interest">
        <h3 class="title">Interest</h3>
        <div class="interest_items">
          <div class="interest_item">
            <span>Drawings</span>
          </div>
          <div class="interest_item">
            <span>Books</span>
          </div>
          <div class="interest_item">
            <span>Travel</span>
          </div>
        </div>
      </div>
    </div>
     );
     }

    export default PortfolioComponent;



CartoonComponent.js

     import React, { Component } from "react";
     import axios from "axios";
     import "./CartoonComponent.css";

     export class CartoonComponent extends Component {
    constructor() {
    super();
    this.state = {
      cartoon: [],
      errorMessage: "",
    };
    }
     componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        this.setState({ cartoon: response.data.results });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Error Retrieving Data" });
      });
     }
     render() {
    const { cartoon, errorMessage } = this.state;
    return (
      <div>
        <h1>Cartoon</h1>
        {cartoon.length
          ? cartoon.map((cast) => (
              <div className="pictures">
                <h1 className="text">{cast.name}</h1>
                <p className="text">{cast.status}</p>
                <p className="text">{cast.id}</p>
                <img src={cast.image}></img>
              </div>
            ))
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
     }
     }

     export default CartoonComponent;

CalculatorComponent.js

      import React, { Component } from "react";
      import "./CalculatorComponent.css";
      import ResultComponent from "./ResultComponent";
      import KeyComponent from "./KeyComponent";

     export class CalculatorComponent extends Component {
     state = {
    result: "",
     };

     onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
     };

     calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
     };

     reset = () => {
    this.setState({
      result: "",
    });
    };

     backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
     };

     render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyComponent onClick={this.onClick} />
        </div>
      </div>
    );
    }
    }

    export default CalculatorComponent;

### OUTPUT :
![Screenshot (408)](https://github.com/JANANI0210/react-calci-form/assets/86832944/a2ef52a6-60e6-47ae-8731-e315ec73ba9a)
![Screenshot (409)](https://github.com/JANANI0210/react-calci-form/assets/86832944/692a0122-1141-4dfb-91b2-7d6acc1448b9)
![Screenshot (410)](https://github.com/JANANI0210/react-calci-form/assets/86832944/ef0848e5-411d-49cb-b719-150a8edb4c5e)


### RESULT :
       Thus, to create a react application with three pages portfolio, calculator and API displaying characters is created and executed successfully.
