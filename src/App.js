import logo from "./logo.svg";
import "./App.css";
import LyricsCard from "./components/LyricsCard/LyricsCard";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <LyricsCard 
        songname="Café Amargo"
        artist="Supercombo"
        firstline="Lento outra vez mal"
        secondline="Vi o trem passar" 
        thirdline="Já foram dois lá vai o três"
        fourthline="Decido caminhar com sorte eu chego às seis"
        color="#A9800A"
      />
    </div>
  );
}

export default App;
