import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import RouterControl from "./components/RouterControl";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <RouterControl />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
