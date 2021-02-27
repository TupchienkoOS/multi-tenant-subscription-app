import React from "react";

export const NoSuchPage = () => {
  return (
    <div>
      <h3 className="font-bold">Page Not Found</h3>

      <div className="error-desc">
        Sorry, but the page you are looking for has note been found. Try
        checking the URL for error, then hit the refresh button on your browser
        or try found something else in our app.
        <form
          className="form-inline m-t justify-content-center"
          role="form"
        ></form>
      </div>
    </div>
  );
};
