import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { Suspense } from "react";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { useTheme } from "./theme/useTheme";

const App = () => {
  
  const { toggleTheme } = useTheme()

  return (
    <div className="app">
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
     
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><MainPageLazy /></Suspense>} />
          <Route path="/about" element={ <Suspense fallback={<div>Loading...</div>}> <AboutPageLazy /></Suspense>} />
        </Routes>
      
    </div>
  );
};

export default App;
