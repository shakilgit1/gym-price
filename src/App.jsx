import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNavber/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-4xl bg-purple-400">Vite + React</h1>
      <PriceOptions></PriceOptions>
 
    </>
  );
}

export default App;
