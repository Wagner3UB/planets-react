import { BrowserRouter } from "react-router-dom";
import "./assets/App.css";
import ScreenRoutes from "./ScreenRoutes";

function App() {
  return (
    <BrowserRouter>
      <article>
        <ScreenRoutes />
      </article>
    </BrowserRouter>
  );
}

export default App;
