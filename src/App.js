import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/About/About';
import Destination from './components/Destination/Destination';
import QuranPage from './components/QuranPage/QuranPage';
import NotFound from './components/NotFound/NotFound';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <>
    <GlobalStyles/>
    <Router>
      <Switch>
       <Route exact path="/">
         <Home toggleTheme={toggleTheme}/>
        </Route>
        <Route exact path="/about">
         <About/>
        </Route>
        <Route exact path="/destination">
         <Destination/>
        </Route>
        <Route exact path="/surah/:id">
          <QuranPage/>
        </Route>
        <Route exact path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
    </ThemeProvider>
  );
}

export default App;
