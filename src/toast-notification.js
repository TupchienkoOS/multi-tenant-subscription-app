import React from "react";

export const ToastNotification = (props) => {
  const [close, setClose] = React.useState(false);
  const [timerId, setTimerId] = React.useState(null);

  const { id, type, messageHeader, messageText } = props;

  React.useEffect(() => {
    hadleStartTimer();
  }, []);

  const hadleStartTimer = () => {
    const id = setTimeout(() => {
      hadleCloseNotification();
    }, 2000);
    setTimerId(id);
  };

  const hadleCloseNotification = () => {
    setClose(true);
    setTimeout(() => {
      props.dispatch({ id: id, type: "REMOVE_NOTIFICATION" });
    }, 400);
  };

  const handlePauseTimer = () => {
    clearTimeout(timerId);
  };

  return (
    <div
      className={`toast toast-bootstrap ${close ? "fade " : "fade show"}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onMouseEnter={handlePauseTimer}
      onMouseLeave={hadleStartTimer}
    >
      <div className="toast-header">
        <i className="fa fa-newspaper-o"> </i>
        <strong className="mr-auto m-l-sm">{messageHeader}</strong>
        <small>2 seconds ago</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={hadleCloseNotification}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{messageText}</div>
    </div>
  );
};
