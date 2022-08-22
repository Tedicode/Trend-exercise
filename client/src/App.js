// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ClientPage from "./components/pages/ClientPage";



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(`the message is: ${data}`);

  return (
    <div className="App">
      <Sidebar />

      <div className="main">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          message :<code>{data ? data : "loading..."}</code>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClientPage />
      </div>
    </div>
  );
}

export default App;
