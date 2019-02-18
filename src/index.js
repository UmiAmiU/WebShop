import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import RouterControl from "./components/RouterControl";
import { themes } from "./themes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <MuiThemeProvider theme={themes.main}>
        <RouterControl />
      </MuiThemeProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
