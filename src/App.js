import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";




function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting = "Hola desde ItemListContainer" />
    </>
  );
}

export default App;
