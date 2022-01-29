import {useEffect,useState} from 'react';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/About/About';
import Destination from './components/Destination/Destination';
import QuranPage from './components/QuranPage/QuranPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [data,setData] = useState('')
  useEffect(()=>{

    fetch('https://api.alquran.cloud/v1/quran/ar.alafasy')
      .then(res=>res.json())
      .then(resp=>setData(resp))
},[])
  return (
    <>
    <Router>
      <Switch>
       <Route exact path="/">
         <Home data={data}/>
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
  );
}

export default App;
