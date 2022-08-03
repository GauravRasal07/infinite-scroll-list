import React, { useState } from "react";
import "./App.css";
import InfiniteList from "./components/InfiniteList";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./components/Login";
import { PrivateComponent } from "./PrivateRoutes/PrivateComponent";

export const MainContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const contextData = {
    users: [
      {
        uname: "foo",
        password: "bar",
      },
      {
        uname: "gaurav",
        password: "gaurav",
      },
    ],
    isLoggedIn: isLoggedIn,
    setisLoggedIn: setisLoggedIn,
  };
  return (
    <MainContext.Provider value={contextData} className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={<PrivateComponent component={InfiniteList} />}
          />
        </Routes>
      </Router>
    </MainContext.Provider>
  );
};

export default App;
