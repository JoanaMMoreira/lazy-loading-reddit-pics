import React from "react";
import { Switch } from "react-router-dom";
import Header from "./components/Header";
import PicsList from "./components/PicsList";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <div className="App">
          <PicsList />
        </div>
      </Switch>
    </>
  );
};

export default App;
