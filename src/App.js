import Location from "./components/Location"
import Loading from "./components/Loading";
import './App.css';


document.body.style = "background: #0D1E40"
function App() {

  return (
    <>
        <div className="grid">
          <div className="image-color1"></div>
          <div className="image-color2"></div>
          <div className="image-color3"></div>
          <div className="image-color4"></div>
        </div>
        <div className="container">
            <h1>Rick and Morty Wiki</h1>
            <Location />
            <Loading/>
          </div>
    </>
  );
}

export default App;
