import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return isSignedIn ? (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signout")}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign In
      </p>
      <p
        onClick={() => onRouteChange("register")}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
    </div>
  );
};

export default Navigation;
