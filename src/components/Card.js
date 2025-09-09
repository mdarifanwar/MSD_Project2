import React from "react";
import { Link } from "react-router-dom";

const Card = ({ icon, title, loginPath, signupPath }) => {
  return (
    <div className="card">
      <i className={icon}></i>
      <h2>{title}</h2>
      <Link to={loginPath}><button>Login</button></Link>
      {signupPath && <Link to={signupPath}><button>Sign Up</button></Link>}
    </div>
  );
};

export default Card;
