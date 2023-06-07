import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
// importing general components
import { NavBar } from "./components/general/NavBar";
//importing component
import Background from "./components/landing/background";
//user component
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "antd/dist/reset.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />

          {/* <Background /> */}
          <Route exact path="/" component={Background} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
