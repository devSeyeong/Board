import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ListBoardComponent from "./components/ListBoardComponent";
import HeaderComponent from "./components/HeaderComponents";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
   <div>
     <BrowserRouter>
         <HeaderComponent />
       <Routes>
         <Route path="/" element={ListBoardComponent} />
       </Routes>
         <FooterComponent />
     </BrowserRouter>
   </div>
  );
}

export default App;
