import { Link } from "react-router-dom";
import styled from "styled-components";

function Card (props){
    const StyledCard = styled.div`
        height: 200px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        border-radius:5px;
        box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        padding:1rem;
        margin:0.5rem 0;
        border: 1px solid rgb(209 213 219);
        &:hover{
            transform: scale(1.1);
            transform: translateY(-0.25rem);
            box-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
        }
        *{
            padding:0.2rem 0;
        }
        h5{
            margin-top: auto;
        }
    `
    return(
        <Link to={`/surah/${props.data.number}`}>
        <StyledCard>
            <h3>{props.data.number}-sura</h3>
            <h4>{props.data.ayahs.length} oyat</h4>
            <h2>{props.data.englishName}</h2>
            <p>{props.data.name}</p>
            <h5>Nozil qilingan joyi: {props.data.revelationType === 'Meccan' ? 'Makka':'Madina'}</h5>
        </StyledCard>
        </Link>
    )
}

export default Card