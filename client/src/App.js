import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/footer";
import photo from "./background.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
                <h2>Perlum Clark McCaa Toombs</h2>
                <h3>Coding Portfolio</h3>
      </div>
          
            <Router>
             <Header></Header>
              {/* <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />  */}
              <Route path="/about" component={About} />
              <photo></photo>
<Footer></Footer>
      </Router>
    </div>
  );
}


export default App;
