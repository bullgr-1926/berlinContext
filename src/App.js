import "./App.css";
import { DataController } from "./context/DataContext";
import NavBar from "./components/NavBar";
import DataList from "./components/DataList";

function App() {
  return (
    <div className="App">
      <DataController>
        <NavBar />
        <DataList />
      </DataController>
    </div>
  );
}

export default App;
