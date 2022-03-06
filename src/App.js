import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/About/About';
import Destination from './components/Destination/Destination';
import QuranPage from './components/QuranPage/QuranPage';
import NotFound from './components/NotFound/NotFound';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import axios from 'axios'
import Settings from './components/Settings/Settings.js'

function App() {
  const [primaryColor, setPrimaryColor] = useState("rgb(59 130 256)")
  const [data, setData] = useState();
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  const fetchData = async ()=>{    
    let res = await axios.get('https://www.mp3quran.net/api/_arabic.json');
    setData(res.data)
}
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
  const setNewPrimaryColor = (e)=>{
    e.preventDefault()
    setPrimaryColor(e.target.value !== undefined ? e.target.value : primaryColor) 
    if(e.target.value !== undefined){
      localStorage.setItem('color', e.target.value) 
    }
  }
  useMemo(()=>{
    fetchData()
  },[])
  let arr = data !== undefined ? data?.reciters.map(reciter=>reciter.count === '114' ? reciter : undefined) : []
  let arrFiltered = arr?.filter(el=>el!==undefined)
  let editions = arrFiltered.map(edition=>edition);
  let Language = localStorage.getItem('Language')
    if(!Language){
      localStorage.setItem('Language','uz')
    }
    
  let Qori = localStorage.getItem('Edition')
    if(!Qori){
      localStorage.setItem('Edition','https://server8.mp3quran.net/afs')
    }
  let color = localStorage.getItem('color')
    if(!color){
      localStorage.setItem('color', "rgb(59 130 256)")
    }  
  const setNewEdition = (e)=>{
    localStorage.setItem('Edition',e.target.value)
  }
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <>
    <GlobalStyles/>
    <Router>
      <Switch>
       <Route exact path="/">
         <Navbar toggleTheme={toggleTheme} theme={theme} primaryColor={primaryColor !== color ? color : primaryColor}/>
         <Home editions={editions} primaryColor={primaryColor !== color ? color : primaryColor}/>
         <Footer/>
        </Route>
        <Route exact path="/about">
        <Navbar toggleTheme={toggleTheme} theme={theme} primaryColor={primaryColor !== color ? color : primaryColor}/>
         <About primaryColor={primaryColor !== color ? color : primaryColor}/>
        </Route>
        <Route exact path="/destination">
        <Navbar toggleTheme={toggleTheme} theme={theme} primaryColor={primaryColor !== color ? color : primaryColor}/>
         <Destination primaryColor={primaryColor !== color ? color : primaryColor}/>
        </Route>
        <Route exact path="/surah/:id">
        <Navbar toggleTheme={toggleTheme} theme={theme} primaryColor={primaryColor !== color ? color : primaryColor}/>
          <QuranPage primaryColor={primaryColor !== color ? color : primaryColor}/>
        </Route>
        <Route exact path="/settings">
        <Navbar toggleTheme={toggleTheme} theme={theme} primaryColor={color}/>
          <Settings editions={editions} setNewEdition={setNewEdition} setPrimaryColor={setNewPrimaryColor}/>
        </Route>
        <Route exact path="*">
          <NotFound primaryColor={primaryColor !== color ? color : primaryColor}/>
        </Route>
      </Switch>
    </Router>
    </>
    </ThemeProvider>
  );
}

export default App;
