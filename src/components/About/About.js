import styled from "styled-components";
import Logo from '../../Images/logo.png'
import { useTranslation } from 'react-i18next';

const AboutContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding: 0 2rem;

    h1{
        font-weight: 900;
        padding:1rem 0;
        color:rgb(59 130 246);
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
        color:rgb(59 130 246);
    }

`

const About = ()=>{
    // eslint-disable-next-line
    const [t, i18n] = useTranslation()
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
