import Navbar from "./components/Navbar";
import Page1 from "./components/Home";
import Searchbar from "./components/Searchbar.js";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Liked from "./components/Liked";
import Inner from "./components/Inner";
import Women from "./components/Women";

function App() {

    return (
      <>
      <div className="px-8 py-4 w-full z-10 m-0 flex flex-col bg-white fixed uppershadow">
          <Searchbar />
          <Navbar />
        </div>

      
        <div className="p-10 pd-mob pd-tab ">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Liked" element={<Liked />} />
            <Route path="/Inner" element={<Inner />} />
            <Route path="/Women" element={<Women />} />
          </Routes>
        </div>
      </>

    );
}

export default App;
