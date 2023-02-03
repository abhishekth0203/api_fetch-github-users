import React, { Component  } from "react";
import ErrorBoundary from "./Component/ErrorBoundary";
import Hero from "./Component/Hero";
import Main from "./Component/Main";

export default class App extends Component {
  render() {
    return (
      <div>
      <ErrorBoundary>
      <Hero name="joker" />
      </ErrorBoundary>


      <ErrorBoundary>
      <Main/>
      </ErrorBoundary>
        
      </div>
    );
  }
}

