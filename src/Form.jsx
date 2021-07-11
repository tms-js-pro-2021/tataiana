import React from "react";

export default function LoginForm() {
  const [login, setLogin] = useState(" ");
  const [password, setPassword] = useState(" ");

  const onSubmit = () => {
    alert(`{login}, добро пожаловать!`);
  };

  const onChangePassword = () => {
    setPassword({ password });
  };

  onChangeLogin = () => {
    setLogin({ login });
  };

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label>
          {" "}Логин:{" "}
          <input
            type="text"
            name="login"
            value={login}
            onChange={onChangeLogin}
          />
        </label>
      </p>
      <p>
        <label>
          {" "}Пароль:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
}

// ReactDOM.render(<LoginForm />,  document.getElementById('root'));
