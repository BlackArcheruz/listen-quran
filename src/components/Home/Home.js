import Navbar from "../Navbar/Navbar";
import Showcase from "./Showcase/Showcase";
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Home(props){
    const [data,setData] = useState('')
    const fetchData = async ()=>{
        let res = await axios.get('https://api.alquran.cloud/v1/quran/ar.alafasy');
        setData(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    const LoadingMessage = styled.p`
        font-size:32px;
        text-align:center;
        font-weight:700;
        margin:1rem;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

        @keyframes pulse {
             0%, 100% {
              opacity: 1;
            }
            50% {
             opacity: .5;
            }
        }
    `
    return(
        <>
        <Navbar toggleTheme={props.toggleTheme}/>
        {data.data !== undefined ? <Showcase data={data}/> : <LoadingMessage>Yuklanmoqda...</LoadingMessage>}
        </>
    )
}

export default Home