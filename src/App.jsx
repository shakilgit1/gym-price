import "./App.css";
import LineChart from "./components/Linechart/Linechart";
import NavBar from "./components/Navbar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNavber/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-4xl bg-purple-400">React Awesome Component</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
 
    </>
  );
}

export default App;
