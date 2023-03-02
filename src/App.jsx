import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"




function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Aca iria los productos?"} />
      
    </div>
  );
}

export default App
