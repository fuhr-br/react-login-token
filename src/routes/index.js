import { Route, Routes } from "react-router-dom";
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.js"; 
import MenuPrincipal from "../components/corpo/page.jsx";
import Home from "../components/home/page.jsx";
import Login from "../components/login/page.jsx";
import Logout from "../components/logout/page.jsx"; 


const Private = ({ Item }) => {
  const { isAuthenticated } = useContext(AuthContext); 
  return isAuthenticated() ? <Item /> : <Login />;
};

const RedirectIfAuthenticated = ({ Item }) => {
  const { isAuthenticated } = useContext(AuthContext); 
  return isAuthenticated() ? <Item /> : <Login />;
};

const RedirectIfNotAuthenticated = ({ Item }) => {
  const { isAuthenticated } = useContext(AuthContext); 
  return !isAuthenticated() ? <Item /> : <Logout />;
};

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/menu" element={<Private Item={MenuPrincipal} />} />
      <Route path="/login" element={<RedirectIfAuthenticated Item={Home} />} />
       <Route path="/logout" element={<RedirectIfNotAuthenticated Item={Home} />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RoutesApp;
