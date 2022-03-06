import styled from "styled-components";
import Logo from '../../Images/logo.png'
import { useTranslation } from 'react-i18next';


const Destination = (props)=>{
    const DestinationContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding: 0 2rem;

    h1{
        font-weight: 900;
        padding:1rem 0;
        color:${props.primaryColor};
    }
    p{
        font-weight:500;
        font-size:larger;
    }

    code{
        font-family:monospace;
        font-weight:900;
    }
    span{
        font-weight:700;
    }

    a{
        color:${props.primaryColor};
    }

`

    // eslint-disable-next-line
    const [t, i18n] = useTranslation()
    document.title = `${t('Destination')} -  Listen-Quran`
    return(
        <>
        <DestinationContainer>
        <img src={Logo} alt="Loyiha logosi" width="128"/>
                    <h1>{t('Destination')}</h1>
                    <p>{t('Destination_desc')}</p>
        </DestinationContainer>
        </>
    )
}

export default Destination
