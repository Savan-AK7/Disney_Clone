import "./App.css";
import GenreMovieList from "./Components/GenreMovieList";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default App;
