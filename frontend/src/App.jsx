import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UserLoginRegister from "./components/UserLoginRegister.jsx";

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLoginRegister />} />
        <Route path="/login" element={<UserLoginRegister />} />
        </Routes>
    </BrowserRouter>
    </>
  );
 
}

export default App
