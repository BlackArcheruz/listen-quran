import styled from "styled-components";
import Logo from '../../Images/logo.png'
import { useTranslation } from 'react-i18next';


    
const About = (props)=>{
    const AboutContainer = styled.div`
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
    document.title = `${t('who')} -  Listen-Quran`
    return(
        <>
                <AboutContainer>
                    <img src={Logo} alt="Loyiha logosi" width="128"/>
                    <h1>{t('who')}</h1>
                    <p dangerouslySetInnerHTML={{__html: t('Desc')}}></p>
                </AboutContainer>
        </>
    )
}

export default About
