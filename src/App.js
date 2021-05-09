import "./App.scss";
import HeaderComponent from "./container/homeTemplate/header/header";
import SlickCarousel from "./container/homeTemplate/slickCarousel/slickCarousel";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SlickCarousel />
    </div>
  );
}

export default App;
