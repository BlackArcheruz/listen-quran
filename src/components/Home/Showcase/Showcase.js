import styled from 'styled-components'
import CardList from '../CardList/CardList'
import { useTranslation } from 'react-i18next';



function Showcase (props){
    const ShowcaseContainer = styled.div`
    padding:2rem 3rem;
    text-align:center;
    display:flex;
    justify-content:center;
    flex-direction: column;
    p{
        margin: 1rem 0;
        font-size: 20px;
        font-weight:500;
    }
    h1{
        color: ${props.primaryColor};
        font-size:50px;
        font-weight: 900;
        margin-top: 0.5rem;
    }

`
    const EditionServer = localStorage.getItem('Edition')
    const Editions = props.editions.map(edition=>edition.Server !== EditionServer ? undefined : edition.name)
    const edition = Editions.filter(el=>el!==undefined)
    // eslint-disable-next-line
    const [t, i18n] = useTranslation()
    return(
        
        <ShowcaseContainer>
            <h1>{t('Qur\'on')}</h1>
            <p>{t('Listen')}</p>
           <CardList data={props.data} primaryColor={props.primaryColor}/>
            <p>{t('Qori')} {edition}</p>
            
        </ShowcaseContainer>
    )
}

export default Showcase
