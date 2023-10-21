import {Routes, Route ,BrowserRouter} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Practice from "./pages/Practice";
import Attorneys from "./pages/Attorneys";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {
  return (
 <>
 <BrowserRouter>
 <Header/>
 <Routes>
 {/* <Route  element={<Header/>} /> */}
 <Route path="/" element={<Home/>} />
 <Route path="about" element={<About/>} />
 <Route path="practice" element={<Practice/>} />
 <Route path="attorneys" element={<Attorneys/>} />
 <Route path="contact" element={<Contacts/>} />

 

 

  </Routes>
  <Footer/>
</BrowserRouter>
 
 </>
  );
}

export default App;
