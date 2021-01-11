import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { users } from "./data/users";
import Cookies from "js-cookie";
import { v4 } from "uuid";
import { NotificationContext } from "./notification-provider";
import DbApi from "./data/dbApi";

export const AppContext = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      company: false,
      register: true,
      login: true,
      err: {},
    };
  }

  static contextType = NotificationContext;

  componentDidUpdate() {
    console.log("didupdate app");
  }

  componentDidMount() {
    console.log("didmount app");
  }

  onLogOut = (event) => {
    // event.preventDefault();
    const usrId = Cookies.get("usrId");
    const compId = Cookies.get("compId");
    if (this.state.user !== false || typeof usrId !== "undefined") {
      Cookies.remove("usrId");
      this.setState({ user: false });
    } else if (this.state.company !== false || typeof compId !== "undefined") {
      Cookies.remove("compId");
      this.setState({ company: false });
    }
  };

  onRegistr = (event) => {
    event.preventDefault();
    this.setState({ register: false });
  };

  onLogin = (loginUser) => {
    const currentUser = DbApi.getUserByLogin(loginUser);
    if (typeof currentUser !== "undefined") {
      if (currentUser.type === "user") {
        Cookies.set("usrId", currentUser.id);
        this.setState({ user: currentUser });
      } else if (currentUser.type === "company") {
        Cookies.set("compId", currentUser.id);
        this.setState({ company: currentUser });
      }
    } else {
      const dispatch = this.context;
      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: v4(),
          type: "SUCCESS",
          messageHeader: "Loggin error",
          messageText: "To enter first you need to register",
        },
      });
    }
  };

  onSubmit = (event) => {
    const eventName = event.target.name;
    this.setState({ [eventName]: true });
    try {
      // await this.register();
    } catch (err) {
      this.setState.err = err;
    } finally {
      //this.setState({ confirmed: false });
    }
    event.preventDefault();
  };

  render() {
    const { user } = this.state;
    return (
      <AppContext.Provider value={this.onLogOut}>
        <Routes
          user={user}
          onLogin={this.onLogin}
          isLoginnedUser={this.isLoginnedUser}
          onLogOut={this.onLogOut}
          onRegistr={this.onRegistr}
        />
      </AppContext.Provider>
    );
  }
}

export default App;
