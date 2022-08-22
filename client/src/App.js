// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

let dummyData = [
  {
    name: "Jill McCasky",
    lastTransaction: "February 1, 2022",
    netPromoterScore: 9,
    contact: "(610)-345-3456",
  },
  {
    name: "Margaret Jones",
    lastTransaction: "April 8, 2022",
    netPromoterScore: 4,
    contact: "(610)-225-9986",
  },
  {
    name: "John Smith",
    lastTransaction: "February 1, 2022",
    netPromoterScore: 2,
    contact: "(610)-312-3779",
  },
];

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
      </div>
    </div>
  );
}

export default App;
