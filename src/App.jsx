import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import Description from "./component/Description";
import { Row, Col } from "react-bootstrap";

import NewCard from "./component/NewCard";
import "./App.css";
import Meteo from "./component/Meteo";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1">
          <Description />
          <Row className="d-flex flex-wrap">
            <NewCard />
          </Row>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
