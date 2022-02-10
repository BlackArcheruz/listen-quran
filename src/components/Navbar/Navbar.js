import styled from "styled-components";
import {Link} from 'react-router-dom';
import Logo from '../../Images/logo.png';
import { stack as Menu } from 'react-burger-menu'
import {Sun1, LanguageSquare, Moon} from "iconsax-react"
import { useTranslation } from 'react-i18next';

function Navbar (props){
  const [t,i18n] = useTranslation()
  const setLanguage = ()=>{
    let language = localStorage.getItem('Language')
    if(language === 'en'){
      localStorage.setItem('Language','uz');
      i18n.changeLanguage('uz')
    }else{
      localStorage.setItem('Language','en');
      i18n.changeLanguage('en')
    }
  }

    var styles = {
        bmBurgerButton: {
          position: 'absolute',
          width: '36px',
          height: '30px',
          right: '20px',
          top: '25px'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100vh'
        },
        bmMenu: {
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column',
          fontWeight: '600'
        },
        bmItem: {
          display: 'inline-block',
          margin: '.6rem 0'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    const StyledNav = styled.nav`
        display: flex;
        align-items: center;
        font-weight: 700;
        justify-content:space-between;
        padding: 1rem 2rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        .logo{
            display:flex;

            img{
                margin-right:.5rem;
            }
        }
        a{
            text-decoration:none;
            color:inherit;
            cursor:pointer;
        }
        h1{
            font-size:32px;
            justify-self:center;
            align-self:center;
            text-align:center;
            align-content:center;
            font-weight: 900;
        }

        ul{
            display:flex;
            padding: 1rem;
            justify-self:flex-end;
            align-items:center;
            justify-content:center;
        }
        li{
          button svg{
            font-size: 20px;
        }
        button svg:hover, button path:hover{
            color: rgb(59 130 246);
            transition: all ease-in-out 300ms;
        }
            margin: 0 1rem;
            list-style: none;
            
            a{
                text-decoration:none;
                color:inherit;

                &:hover{
                    text-decoration:underline;
                    color:rgb(59 130 246);
                    cursor:pointer;
                    transition: ease all 400ms;
                }
            }
        }
        @media (max-width:1000px){
            ul{
                display:none;
            }
            
        }
        @media (max-width: 420px){
            padding: 1rem .4rem;
        }
    `
    return(
        <>
        <Menu right bubble styles={styles} > 
                <a id="about" className="menu-item" href="/about">{t('About')}</a>
                <a id="destination" className="menu-item" href="/destination">{t('Destination')}</a>
                <button id="settings" className="menu-item" onClick={setLanguage} style={{display: "flex",alignItems: "center", margin: "1rem 0", fontWeight: "600", fontSize: "1.15em", color: (props.theme === 'dark' ? "#f1f1f1" : "#121620")}}><LanguageSquare color={props.theme === "dark"? "#f1f1f1": "#121620"} style={{marginRight: '5px'}}/> {t('language')}</button> 
            </Menu>
        <StyledNav>
            <Link to="/" className="logo"><img src={Logo} alt="Logo" width="48"/><h1>Listen-Quran</h1></Link>

            <ul>
                <li><Link to="/about">{t('About')}</Link></li>
                 <li><Link to="/destination">{t('Destination')}</Link></li>
                 <li><button onClick={props.toggleTheme}>{props.theme === "dark" ? <Moon variant="Linear" color="#f1f1f1"/> : <Sun1 variant="Bold" color="#121620"/>}</button></li>
                <li><button onClick={setLanguage} style={{display: "flex",alignItems: "center", fontWeight: "600", fontSize: "1.15em"}}><LanguageSquare variant={props.theme === "dark" ? "Outline" : "Bold"} color={props.theme === "dark"? "#f1f1f1": "#121620"} style={{marginRight: '5px'}}/> {t('language')}</button></li>
            </ul>
        </StyledNav>
        
        </>
    )
}

export default Navbar
