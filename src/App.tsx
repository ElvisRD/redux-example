import React from "react";
import "./app.css";
import { Provider } from "react-redux";
import Buttons from "./components/Buttons";
import Text from "./components/text";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Buttons />
        <Text />
      </Provider>
    </div>
  );
}

export default App;
