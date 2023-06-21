import Navbar from "./components/layout/Navbar";
// import CartWidget from "./components/common/CartWidget";
import ItemListContainer from './components/common/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Cerol House" />
    </>
  );
}

export default App;