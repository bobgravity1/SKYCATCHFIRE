import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ImageGrid } from "./components/Image-Grid";
import { Title } from "./components/Title";
import { Border } from "./components/Border";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title>MEET THE TEAM</Title>
      <ImageGrid />
      <Border />
    </div>
  );
}

export default App;
