import styled from "styled-components";
import {Link} from 'react-router-dom';
import Logo from '../../Images/logo.png';
import { stack as Menu } from 'react-burger-menu'
import {Sun1, Setting2, Moon, ArchiveBook, Award} from "iconsax-react"
import { useTranslation } from 'react-i18next';

function Navbar (props){
  // eslint-disable-next-line
  const [t,i18n] = useTranslation()

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
        padding: 1rem 1rem 1rem 2rem;
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
            align-items:center;
            justify-content:flex-end;
        }
        li{
          button svg{
            font-size: 20px;
        }
        button svg:hover, button path:hover{
            color: ${props.primaryColor};
            transition: all ease-in-out 300ms;
        }
            margin: 0 1rem;
            list-style: none;
            
            a{
                text-decoration:none;
                color:inherit;

                &:hover{
                    text-decoration:underline;
                    color:${props.primaryColor};
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
        @media(min-width: 331px) and (max-width: 340px){
          h1{
            font-size: 30px;
          }
        }
        @media (max-width: 330px){
          h1{
            font-size: 24px;
          }
          .logo{
            img{
              margin-right: .2rem; 
            }
          }
          
        }
    `
    return(
        <>
        <Menu right bubble styles={styles} > 
                <a id="about" className="menu-item" style={{display: "flex",alignItems: "center",justifyContent:'flex-start', margin: "1rem 0", fontWeight: "600", fontSize: "1.15em", color: (props.theme === 'dark' ? "#f1f1f1" : "#121620")}} href="/about"><ArchiveBook variant={props.theme === "dark"? 'Linear' : 'Bold'} color={props.theme === "dark"? "#f1f1f1": "#121620"} style={{marginRight: '5px'}}/>{t('About')}</a>
                <a id="destination" className="menu-item" style={{display: "flex",alignItems: "center", justifyContent:'flex-start',margin: "1rem 0", fontWeight: "600", fontSize: "1.15em", color: (props.theme === 'dark' ? "#f1f1f1" : "#121620")}} href="/destination"><Award variant={props.theme === "dark"? 'Linear' : 'Bold'} color={props.theme === "dark"? "#f1f1f1": "#121620"} style={{marginRight: '5px'}}/> {t('Destination')}</a>
                <a href="/settings" id="settings" className="menu-item" style={{display: "flex",alignItems: "center", justifyContent:'flex-start', margin: "1rem 0", fontWeight: "600", fontSize: "1.15em", color: (props.theme === 'dark' ? "#f1f1f1" : "#121620")}}><Setting2 variant={props.theme === "dark"? 'Linear' : 'Bold'} color={props.theme === "dark"? "#f1f1f1": "#121620"} style={{marginRight: '5px'}}/> {t('Settings')}</a> 
            </Menu>
        <StyledNav>
            <Link to="/" className="logo"><img src={Logo} alt="Logo" width="48"/><h1>Listen-Quran</h1></Link>

            <ul>
                <li><Link to="/about">{t('About')}</Link></li>
                 <li><Link to="/destination">{t('Destination')}</Link></li>
                 <li><button onClick={props.toggleTheme}>{props.theme === "dark" ? <Moon variant="Linear" color="#f1f1f1"/> : <Sun1 variant="Bold" color="#121620"/>}</button></li>
                <li><Link to="/settings"><Setting2 variant={props.theme === "dark"? 'Linear' : 'Bold'} color={props.theme === "dark"? "#f1f1f1": "#121620"} style={{marginRight: '5px'}}/></Link></li>
            </ul>
        </StyledNav>
        
        </>
    )
}

export default Navbar
