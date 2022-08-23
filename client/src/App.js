// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
// import ClientPage from "./components/pages/ClientPage";
// import SalesPage from "./components/pages/SalesPage";
import {
  AnalyticsPage,
  ClientPage,
  DashboardPage,
  SalesPage,
  SettingsPage,
} from "./components/pages";
import { Routes, Route, Link } from "react-router-dom";
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
        <Routes>
          <Route exact path="/" element={<ClientPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/clients" element={<ClientPage />} />
          <Route exact path="/sales" element={<SalesPage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
          <Route exact path="/analytics" element={<AnalyticsPage />} />
        </Routes>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          message :<code>{data ? data : "loading..."}</code>
        </p> */}
      </div>
    </div>
  );
}

export default App;
