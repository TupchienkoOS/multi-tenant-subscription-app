import React from "react";
import { v4 } from "uuid";
import { ToastNotification } from "./toast-notification";

export const NotificationContext = React.createContext();

const NotificationProvider = (props) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <div style={{ position: "fixed", top: "20px", right: "20px" }}>
        {state.map((note) => {
          return (
            <ToastNotification dispatch={dispatch} key={note.id} {...note} />
          );
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
