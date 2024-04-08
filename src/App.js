import "./App.css";
import Cabecalho from "./components/cabecalho/page.tsx";
import { AuthProvider } from "./context/auth.js"; 
import RoutesApp from "./routes/index.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <RoutesApp />
        </div>
      </BrowserRouter>
    </AuthProvider> 
  );
}

export default App;
