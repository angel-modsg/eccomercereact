import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemsListContainer";

function App() {
  return (
  <>
  <Navbar />
  <ItemListContainer greeting={"Lista de productos"} />
  </>
  );
}

export default App;