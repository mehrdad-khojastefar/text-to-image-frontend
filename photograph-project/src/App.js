import logo from "./logo.svg";
//React-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import MainPage from "./Components/MainPage/MainPage";
import "./assets/styles/app.scss"
function App() {
  return (
  <div className="maincontainer">
  <MainPage/>
  </div>
  );
}

export default App;
