import styled from 'styled-components'
import CardList from '../CardList/CardList'
import { useTranslation } from 'react-i18next';

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
    const [t, i18n] = useTranslation()
    return(
        
        <ShowcaseContainer>
            <h1>{t('Qur\'on')}</h1>
            <p>{t('Listen')}</p>
            <CardList data={props.data}/>
            <p>{t('Qori')} مشاري العفاسي</p>
            
        </ShowcaseContainer>
    )
}

export default Showcase
