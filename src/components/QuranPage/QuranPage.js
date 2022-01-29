import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';



function QuranPage(){
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
        }
    `


    const {id} = useParams();
    const [data,setData] = useState('')

    useEffect(()=>{
       fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/ar.alafasy,uz.sodik`)
            .then(res=>res.json())
            .then(resp=>setData(resp))
            // eslint-disable-next-line
    },[])
    const arr = data?.data?.map(oyat=>oyat.ayahs.map(oyat=>oyat));
    const surah = arr !== undefined ? arr[0]?.map(surah=>surah): null;
    const translation = arr !== undefined ? arr[1]?.map(surah=>surah): null;
    const mergedArr = surah?.map((text,index)=>{
        return{
            'text':text,
            'translate': translation[index]
        }
    })
    return(
        <>
        <Navbar/>
        <QuranContent>
        <h1 className="sura-raqam">{data !== '' ? `${data?.data[0].number}-sura` : <LoadingMessage>Yuklanmoqda...</LoadingMessage>}</h1>
            <h1 className="sura-nom">{data !== '' ? data?.data[0].englishName : ''}</h1>
            <h1 className="sura-arab">{data !== '' ? data?.data[0].name : ''}</h1>
            <h1 className='sura-oyatlar'>{data !== '' ? `${data?.data[0].numberOfAyahs} oyatdan iborat` : ''}</h1>
            <h1 className='sura-nozil'>{data !== '' ? data?.data[0].revelationType === 'Meccan' ? `Makkada nozil qilingan` : 'Madinada nozil qilingan' : ''}</h1>
            {data !== '' ? <AudioPlayer
                    autoPlay
                    className='audio'
                    src={(data?.data[0].number.toString().length === 1 ? `http://server8.mp3quran.net/afs/00${data?.data[0].number}.mp3` : '')||(data?.data[0].number.toString().length === 2 ? `http://server8.mp3quran.net/afs/0${data?.data[0].number}.mp3` : '')||(data?.data[0].number.toString().length === 3 ? `http://server8.mp3quran.net/afs/${data?.data[0].number}.mp3` : '')}
                    showJumpControls={false}
                    // other props here
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
        
        </>
    )
}

export default QuranPage