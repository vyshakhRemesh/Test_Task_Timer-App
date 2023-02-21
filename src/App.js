// import logo from './logo.svg';
// import './App.css';
import TimerComponents from "./Components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightgray",
      }}
    >
      <TimerComponents></TimerComponents>
    </div>
  );
}

export default App;
