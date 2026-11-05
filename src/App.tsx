import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./common/ThemeContext";
import Router from "./router";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
