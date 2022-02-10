import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import { Link } from 'react-router-dom';
import {Next, Previous} from 'iconsax-react'
import axios from 'axios'
import NotFound from '../NotFound/NotFound'
import { useTranslation } from 'react-i18next';

function QuranPage(){
    const [t, i18n] = useTranslation()

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
            height: 30px;
            margin: 1rem 0;
            width: 200px;
            border-radius: 10px;
            background: rgb(96 165 250);
        }
        .text{
            height: 20px;
            width: 100px;
            border-radius: 10px;
            margin: 0.5rem 0;
        }

`
    const ContainerSurah = styled.div`
    padding-bottom: 5rem;
    padding-top: 1rem;
    padding-right: 4rem;
    padding-left:2.5rem;
    `
    const Surah = styled.div`
        .surah{
            text-align: right;
            font-size: 32px;
            color:rgb(59 130 256);
            font-weight:400;
        }
        .translation{
            margin:1rem 0;
            font-weight:500;
        }
    `
    const QuranContent = styled.div`
        display: flex;
        justify-content: center;
        padding: 2rem 0 1rem;
        flex-direction:column;
        align-items:center;
        h1{
            padding: .4rem 0;
        }

        .sura-raqam, .sura-oyatlar,.sura-nozil{
            font-size: larger;
            font-weight: 500;   
        }
        .sura-nom{
            color:rgb(59 130 256);
        }
        .audio{
            width:100%;
            position:fixed;
            bottom:0;
        }
        .sura-arab{
            font-weight:400;
            color:rgb(59 130 256);
        }

    `

    const BtnPrevious = styled.div`
    position:fixed;
    bottom: 15px;
    left: 46%;
    
    a{
        z-index:2;
    }
    @media (min-width:750px) and (max-width: 1000px){
        left: 45%;
    }
    @media (min-width:500px) and (max-width: 649px){
        left: 42%;
    }
    @media (min-width:300px) and (max-width: 499px){
        left: 38%;
    }
    @media (min-width:200px) and (max-width: 299px){
        right: 36%;
    }
    `
    const BtnNext = styled.div`
    position:fixed;
    bottom: 15px;
    right: 46%;
    
    a{
        z-index:2;
    }
    @media (min-width:750px) and (max-width: 1000px){
        right: 45%;
    }
    @media (min-width:650px) and (max-width: 749px){
        right: 44%;
    }
    @media (min-width:650px) and (max-width: 749px){
        right: 44%;
    }
    @media (min-width:500px) and (max-width: 649px){
        right: 42%;
    }
    @media (min-width:300px) and (max-width: 499px){
        right: 38%;
    }
    @media (min-width:200px) and (max-width: 299px){
        right: 36%;
    }
    `

    const {id} = useParams();
    const [data,setData] = useState('');
    let pageLink = Number(id)
    const [error,setError] = useState()

    const fetchData = async ()=>{
        let surah = localStorage.getItem(`${id}-surah`);
        if(surah){
            surah = JSON.parse(surah)
            setData(surah)
        }
        else{
        let res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/editions/ar.alafasy,${t('Translation')}`)
            .catch(err=>{
                setError(err)
            })
        setData(res.data)
        localStorage.setItem(`${id}-surah`,JSON.stringify(res.data))
            }
    }
    useEffect(()=>{
       fetchData()
        // eslint-disable-next-line
    },[id])
    const arr = data?.data?.map(oyat=>oyat.ayahs.map(oyat=>oyat));
    const surah = arr !== undefined ? arr[0]?.map(surah=>surah): null;
    const translation = arr !== undefined ? arr[1]?.map(surah=>surah): null;
    const mergedArr = surah?.map((text,index)=>{
        return{
            'text':text,
            'translate': translation[index]
        }
    })

    let PreviousBtn;
    // eslint-disable-next-line
    if(id == 1 ){
        PreviousBtn = null;
    }else{
        PreviousBtn = <BtnPrevious><Link to={`/surah/${--pageLink}`}> <Previous color='#868686'/></Link></BtnPrevious>
    }
    let NextBtn;
    // eslint-disable-next-line
    if(id == 114){
        NextBtn = null;
    }else{
        NextBtn = <BtnNext><Link to={`/surah/${pageLink === (data !== '' ? data?.data[0].number : id) ? pageLink + 1 : pageLink + 2}`}> <Next color='#868686'/></Link></BtnNext>
    }
    return(
        <>
         {!error ?
             <Fragment>
        <QuranContent>
        {data !== '' ? <Fragment>
            <h1 className="sura-raqam">{`${data?.data[0].number}${t('-sura')}`}</h1>
            <h1 className="sura-nom">{data?.data[0].englishName}</h1>
            <h1 className="sura-arab">{data?.data[0].name}</h1>
            <h1 className='sura-oyatlar'>{`${data?.data[0].numberOfAyahs} ${t('verse_long')}`}</h1>
            <h1 className='sura-nozil'>{data?.data[0].revelationType === 'Meccan' ? t('relevation_long_Meccan') : t('relevation_long_Medinan')}</h1>
            </Fragment>
            : <LoadingMessage>
        <div className="text"></div>
        <div className="heading"></div>
        <div className="heading"></div>
        <div className="text"></div>
        <div className="text"></div>
        </LoadingMessage>}
            {data !== '' ? <AudioPlayer
                    autoPlay
                    className='audio'
                    src={(data?.data[0].number.toString().length === 1 ? `https://server8.mp3quran.net/afs/00${data?.data[0].number}.mp3` : '')||(data?.data[0].number.toString().length === 2 ? `http://server8.mp3quran.net/afs/0${data?.data[0].number}.mp3` : '')||(data?.data[0].number.toString().length === 3 ? `http://server8.mp3quran.net/afs/${data?.data[0].number}.mp3` : '')}
                    showJumpControls={false}
                    
            /> : null}
        </QuranContent>
        {mergedArr?.map(ayah=>(
            <ContainerSurah key={ayah.text.number}>
        {arr !== undefined ? 
        <Surah>
        <h3 className="surah">{ayah.text.text}</h3>
        <h3 className="translation">{ayah.text.numberInSurah}.{ayah.translate.text}</h3>
        </Surah> : <LoadingMessage>Yuklanmoqda...</LoadingMessage>}
        </ContainerSurah>
        ))}
        {data !== '' ? PreviousBtn : null}
        {data !== '' ? NextBtn : null}
        </Fragment>:<NotFound/>}
        </>
    )
}

export default QuranPage
