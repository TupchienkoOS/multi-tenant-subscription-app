import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import Routes from "./routes";
import { users } from "./data/users";
import Cookies from "js-cookie";
import { v4 } from "uuid";
import { NotificationContext } from "./notification-provider";

export const AppContext = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
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
    this.setState({ user: false });
    Cookies.remove("usrId");
  };

  onRegistr = (event) => {
    event.preventDefault();
    this.setState({ register: false });
  };

  onLogin = (loginUser) => {
    const currentUser = users.filter((user) => {
      return user.login === loginUser.name;
    })[0];
    if (typeof currentUser !== "undefined") {
      this.setState({ user: currentUser });
      Cookies.set("usrId", currentUser.id);
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
        />
      </AppContext.Provider>
    );
  }
}

export default App;
