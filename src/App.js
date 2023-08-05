import { Route, Routes } from "react-router-dom";
import "./App.css";
//import { Face } from "./components/Home/Face";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Home/Login/Login";
import ContactForm from "./components/Contact/Contact";
import {Feedback} from "./components/Feedback/Feedback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Feedback />} />
    </Routes>
  );
}

export default App;