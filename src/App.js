import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/main.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Contacts from "./pages/Concacts";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
        

        <Router>
          {/* При переходе на страницу прокручивается к верзу страницы автоматически */}
          <ScrollToTop/>
          {/* Подключение компонента Navbar */}
          <Navbar/>
          {/* Подключение динамического компонента, который содердит основной контент страницы. В дальшейшем она будет меняиться */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/ProjectPage/:id" element={<ProjectPage/>}/>
            <Route path="/сontacts" element={<Contacts/>}/>
          </Routes>        
          {/* Подключение компонента Footer */}
          <Footer/>
        </Router>
        
        
    </div>
  );
}

export default App;
