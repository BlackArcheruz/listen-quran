import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

function Card (props){
    // eslint-disable-next-line
    const [t, i18n] = useTranslation()
    const StyledCard = styled.div`
    .primary-card{
        height: 200px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        border-radius:10px;
        box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        padding:2rem 1rem;
        margin:0.5rem 0;
        border: 2px solid rgb(209 213 219);
        &:hover{
            transform: scale(1.1);
            transform: translateY(-0.25rem);
            box-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
            border-color: ${props.primaryColor};
        }
        *{
            padding:0.1rem 0;
        }
        h5{
            margin-top: auto;
        }
        .sura-nom{
            color: ${props.primaryColor};
        }
    }
    `
    return(
        <Link to={`/surah/${props.data.number}`}>
        <StyledCard>
        <div className="primary-card">
            <h3>{props.data.number}{t('-sura')}</h3>
            <h4>{props.data.numberOfAyahs}{t('verse')}</h4>
            <h2 className="sura-nom">{props.data.englishName}</h2>
            <p className="sura-nom">{props.data.name}</p>
            <h5>{t('relevation')} {props.data.revelationType === 'Meccan' ? t('Meccan') : t('Medinan')}</h5>
            </div>
        </StyledCard>
        </Link>
    )
}

export default Card
