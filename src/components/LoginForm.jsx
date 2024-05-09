import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "93de9527-91c8-4908-a4a7-fb62c814c468",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username | password => chatengine -> give messages

      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // works out -> logged in
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      // error -> try again
      setError("Oops, not correct.")
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />

          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
