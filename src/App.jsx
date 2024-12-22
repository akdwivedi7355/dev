import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className="App" style={{
      backgroundImage: "linear-gradient(to bottom,rgb(133, 129, 129),rgb(0, 0, 0))", 
      color: "white"
    }}>
      <Header />
      <Home />
      <Footer />
    </div>
    
  );
};
export default App;
