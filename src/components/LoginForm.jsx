import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

/*[ ] AddFriend.jsx'den tasarima bakabilirsin.
[ ] username inputunda placeholder Username olsun.
[ ] password inputunda placeholder Password olsun.
[ ] submit butonunda metin olarak SUBMIT yazsın.
[ ] Form submit edildiğinde https://nextgen-project.onrender.com/api/s11d2/logine form datasını POST etsin.
[ ] Test için username: workintech ve password:wecandoiti kullan.*/

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { initAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    initAuth(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
            />
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
