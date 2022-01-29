import { Fragment } from "react";
import styled from "styled-components";
import Card from "./Card/Card";


const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem; 
    @media (max-width:430px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);  
    }
    @media (min-width:431px) and (max-width:640px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media (min-width:641px) and (max-width:1024px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media (min-width:1024px) and (max-width:1536px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    @media (min-width:1537px){
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
`

function CardList (props){
    return(
        <CardGrid>
            {props.data.data.surahs.map(surah=>(
                <Fragment key={surah.number}>
                    <Card data={surah}/>
                </Fragment>
            ))}
        </CardGrid>
    )
}

export default CardList
