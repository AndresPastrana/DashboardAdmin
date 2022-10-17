import React from "react";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  //  Hooks and State
  const [values, handleOnChange] = useForm({ username: "", password: "" });
  const { username, password } = values;

  // Handlers
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            name="username"
            type="text"
            value={username}
            placeholder="username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="passsword"
            value={password}
            placeholder="passsword"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
