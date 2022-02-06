import Showcase from "./Showcase/Showcase";
import styled from 'styled-components'
import { useState,useEffect} from 'react'
import axios from 'axios'

function Home(){
    const [data, setData] = useState('');
    const fetchData = async ()=>{
        let Quran = localStorage.getItem('Quran')
        if(Quran){
            Quran = JSON.parse(Quran)
            setData(Quran)
        }else{      
        let res = await axios.get('https://api.alquran.cloud/v1/meta');
        setData(res.data)
        localStorage.setItem("Quran",JSON.stringify(res.data))
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    const LoadingMessage = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size:32px;
        text-align:center;
        font-weight:700;
        margin:2rem;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

        @keyframes pulse {
             0%, 100% {
              opacity: 1;
            }
            50% {
             opacity: .5;
            }
        } 
        .heading{
            height: 50px;
            width: 200px;
            border-radius: 10px;
            background: rgb(96 165 250);
        }
        .text{
            height: 30px;
            width: 400px;
            border-radius: 10px;
            margin: 0.5rem 0;
        }
        .card{
            height: 200px;
            border-radius: 5px;
            width: 300px;
            padding: 1rem;
            margin: 2rem 0;
        }
        .card-text{
            height: 30px;
            width: 75%;
            margin: 1.5rem auto;
            border-radius: 10px;
        }
        .grid{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-column-gap: 1rem;
            grid-row-gap: 1rem; 
        }
        @media (max-width:430px){
            .grid{
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);  
            }
            .card{
            width: 75vw;
            }
            .text{
                width: 75vw;
            }
        }
        @media (min-width:431px) and (max-width:640px){
            .grid{
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            }
            .card{
            width: 30vw;
            }
            .text{
                width: 50vw;
            }
        }
        @media (min-width:641px) and (max-width:1024px){
            .grid{
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            }
            .card{
            width: 30vw;
            }
        }
        @media (min-width:1024px) and (max-width:1536px){
            .grid{
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            }
        }
        @media (min-width:1537px){
            .grid{
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(6, 1fr);
            }
        }
    `

    return(
        <>
        {data.data !== undefined ? <Showcase data={data}/> : <LoadingMessage>
            <div className="heading"></div>
            <div className="text"></div>
            <div className="grid">
                <div className="card">
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
                <div className="card">
                <div className="card-text"></div>
                    <div className="card-text"></div>
                    <div className="card-text"></div>
                </div>
            </div>
            </LoadingMessage>}
        </>
    )
}

export default Home
