import logo from "./logo.svg";
//React-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import MainPage from "./Components/MainPage/MainPage";
import PictureContextProvider from "./Context/PictureContextProvider";
import "./assets/styles/app.scss";
function App() {
  return (
    <PictureContextProvider>
      <div className="maincontainer">
        <MainPage />
      </div> 
    </PictureContextProvider>
  );
}

export default App;
