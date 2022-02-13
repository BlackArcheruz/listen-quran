import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Settings = (props)=>{
     // eslint-disable-next-line
  const [t,i18n] = useTranslation()
  var language = localStorage.getItem('Language')
  const setLanguage = ()=>{
    
    if(language === 'en'){
      localStorage.setItem('Language','uz');
      i18n.changeLanguage('uz')
    }else{
      localStorage.setItem('Language','en');
      i18n.changeLanguage('en')
    }
  }
    const Edition = localStorage.getItem('Edition')

    const SettingsContainer = styled.div`
        padding: 2rem;
        display:flex;
        flex-direction:column;
        div{
            display:flex;
            justify-content: space-between;
            padding:1rem 0;
        }
        select{
            outline: none;
            padding: .7rem;
            box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            border:  2px solid rgb(209 213 219);
            option{
                border: 2px solid rgb(209 213 219);
                outline: none;
                background: rgb(209 213 219);
            }
        }
    `
    return(
        <SettingsContainer>
        <div>
        <h1>{t('Select_edition')}</h1>
        <select onChange={props.setNewEdition}>
        {props.editions.map(edition=>(
            <option key={edition.id} selected={edition.Server === Edition} value={edition.Server}>{edition.name}</option>
        ))}
        </select>
        </div>
        <div>
        <h1>
        {t('Select_language')}
        </h1>
        <select onChange={setLanguage} style={{display: "flex",alignItems: "center", fontWeight: "600", fontSize: "1.15em"}}>
            <option value={language} selected={language === 'en'}>English</option>
            <option value={language} selected={language === 'uz'}>Uzbek</option>
        </select>
        </div>
        </SettingsContainer>
    )
}

export default Settings