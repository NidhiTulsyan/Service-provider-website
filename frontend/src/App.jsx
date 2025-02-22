import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UserLoginRegister from "./components/UserLoginRegister.jsx";

import HomePage from "./components/HomePage.jsx";

function App() {
 

  return (
    <>

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginRegister />} />
        </Routes>
    </BrowserRouter>
    </>
  );
 
}

export default App
