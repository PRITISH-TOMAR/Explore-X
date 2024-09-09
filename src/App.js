import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Rout from "./comp/Routes";
import { useState } from "react";
import './App.css'


function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div id="App" className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen w-screen">
        <Header
        
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme} />
        <Rout />
        <Footer />

      </div>
    </div>
  );
}

export default App;
