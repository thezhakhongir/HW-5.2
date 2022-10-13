import "./App.css";
import Card from "./components/Card";

const blocks = [
  {
    id: "b4",
    block: `${Math.random()}`,
  },
  {
    id: "b1",
    block: "yellow",
  },
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },

  {
    id: "b1",
    block: "yellow",
  },
];

function App() {
  return (
    <div className="App">
      {blocks.map((el) => {
        return el.block === "yellow" ? (
          <Card className="yellow" />
        ) : el.block === "green" ? (
          <Card className="green" />
        ) : el.block === "color" ? (
          <Card className="lime" />
        ) : (
          <Card className="red" />
        );
      })}
    </div>
  );
}

export default App;
