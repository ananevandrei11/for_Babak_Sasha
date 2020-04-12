// import _ from 'lodash';
import './main.less';
import React from "react";
import ReactDOM from "react-dom";
import Promo from "./component/promo/promo";
import Contact from "./component/contact/contact";
import Select from "./component/select/select";
import Result from "./component/result/result";

class App extends React.Component {
  render() {
    return (
      <article id="main-article" className="main-article">
          <section id="main-aside" className="main-aside">
            <Promo />
          </section>
          <br />
          <section id="main-container" className="main-container">
            <Contact />
            <br />
            <Select />
            <br />
            <Result />
          </section>
      </article>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));