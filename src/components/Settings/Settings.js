import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import {TickCircle} from 'iconsax-react'

const Settings = (props)=>{
     // eslint-disable-next-line
  const [t,i18n] = useTranslation()
  const color = localStorage.getItem('color')
  document.title = `${t('Settings')} -  Listen-Quran`
  var language = localStorage.getItem('Language')
  const setLanguage = (e)=>{
    switch (e.target.value) {
        case 'uz':
            localStorage.setItem('Language', 'uz')
            i18n.changeLanguage('uz')
            break;
        case 'en':
            localStorage.setItem('Language', 'en')
            i18n.changeLanguage('en')
            break;
         case 'uz_cyril':
            localStorage.setItem('Language', 'uz_cyril')
            i18n.changeLanguage('uz_cyril')
            break;   
        default:
            break;
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
        @media(max-width: 640px){
            div{
                flex-direction: column;

                select{
                    margin: .5rem 0;
                }
            }
            .colors{
                flex-direction: row;
            }
        }
    `
    return(
        <SettingsContainer>
        <div>
        <h1>{t('Select_edition')}</h1>
        <select onChange={props.setNewEdition}>
        {props.editions.map(edition=>(
            <option key={edition.id} selected={edition.Server === Edition} value={edition.Server}> {edition.name}</option>
        ))}
        </select>
        </div>
        <div>
        <h1>
        {t('Select_language')}
        </h1>
        <select onChange={setLanguage} style={{display: "flex",alignItems: "center", fontWeight: "600", fontSize: "1.15em"}}>
            <option value={'en'} selected={language === 'en'}> English</option>
            <option value={'uz'} selected={language === 'uz'}> O'zbek</option>
            <option value={'uz_cyril'} selected={language === 'uz_cyril'}> Ўзбек</option>
        </select>

        </div>
        <div>
        <h1>{t('select_color')} </h1>
        <div className="colors">
        <button style={{background: "rgb(59 130 246)", width: "35px", height: "35px", borderRadius: "50%", margin: '0 5px'}} onClick={props.setPrimaryColor} value="rgb(59 130 246)">{color === "rgb(59 130 246)" ? <TickCircle/> : ''}</button>
        <button style={{background: "rgb(168 85 247)", width: "35px", height: "35px", borderRadius: "50%", margin: '0 5px'}} onClick={props.setPrimaryColor} value="rgb(168 85 247)">{color === "rgb(168 85 247)" ? <TickCircle/> : ''}</button>
        <button style={{background: "rgb(236 72 153)", width: "35px", height: "35px", borderRadius: "50%", margin: '0 5px'}} onClick={props.setPrimaryColor} value="rgb(236 72 153)">{color === "rgb(236 72 153)" ? <TickCircle/> : ''}</button>
        <button style={{background: "rgb(159 18 57)", width: "35px", height: "35px", borderRadius: "50%", margin: '0 5px'}} onClick={props.setPrimaryColor} value="rgb(159 18 57)">{color === "rgb(159 18 57)" ? <TickCircle/> : ''}</button>
        <button style={{background: "rgb(34 197 94)", width: "35px", height: "35px", borderRadius: "50%", margin: '0 5px'}} onClick={props.setPrimaryColor} value="rgb(34 197 94)">{color === "rgb(34 197 94)" ? <TickCircle/> : ''}</button>
        <button style={{background: "rgb(234 179 8)", width: "35px", height: "35px", borderRadius: "50%", margin: '0 5px'}} onClick={props.setPrimaryColor} value="rgb(234 179 8)">{color === "rgb(234 179 8)" ? <TickCircle/> : ''}</button>
        </div>
        </div>
        </SettingsContainer>
    )
}

export default Settings