import { Route, Routes } from "react-router-dom";
import Calendar from "./Components/Calender/Calendar";
import Completed from "./Components/Completed/Completed";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Header/Menu";
import Home from "./Components/Home";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
     <Menu></Menu>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/completed" element={<Completed/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
     </Routes>
     <Footer></Footer>
    </>
  );
}

export default App;
