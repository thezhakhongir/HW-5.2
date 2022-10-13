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
];

function App() {
  return (
    <div className="App">
      {blocks.map((el) => {
        return el.block === "yellow" ? (
          <Card key={el.id} className="yellow" />
        ) : el.block === "green" ? (
          <Card key={el.id} className="green" />
        ) : el.block === "color" ? (
          <Card key={el.id} className="lime" />
        ) : (
          <Card key={el.id} className="red" />
        );
      })}
    </div>
  );
}

export default App;
