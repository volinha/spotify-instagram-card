import logo from "./logo.svg";
import "./App.css";
import LyricsCard from "./components/LyricsCard/LyricsCard";

import data from "./data";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LyricsCard data={data} />
    </div>
  );
}

export default App;
