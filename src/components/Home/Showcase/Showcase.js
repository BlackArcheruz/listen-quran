import styled from 'styled-components'
import CardList from '../CardList/CardList'

const ShowcaseContainer = styled.div`
    padding:2rem;
    text-align:center;
    display:flex;
    justify-content:center;
    flex-direction: column;
    p{
        margin: 0.5rem 0;
        font-size: 20px;
        font-weight:500;
    }
    h1{
        color: rgb(59 130 246);
        font-size:50px;
        font-weight: 900;
    }

`

function Showcase (props){
    return(
        
        <ShowcaseContainer>
            <h1>Qurʼon </h1>
            <p>Eshitish uchun suralardan birini tanlang:</p>
            <CardList data={props.data}/>
            <p>Qori: {props.data?.data?.edition.name}</p>
            
        </ShowcaseContainer>
    )
}

export default Showcase