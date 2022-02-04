import styled from "styled-components";
import {Link} from 'react-router-dom';
import Logo from '../../Images/logo.png';
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import ReactTooltip from 'react-tooltip'
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Navbar (props){
    var styles = {
        bmBurgerButton: {
          position: 'absolute',
          width: '36px',
          height: '30px',
          right: '20px',
          top: '25px'
        },
        bmBurgerBars: {
          background: 'rgb(59 130 246)',
          borderRadius: '5px'
        },
        bmBurgerBarsHover: {
          background: '#a90000',
          transition: 'all ease-in 400ms'
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
        button svg:hover{
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
                <a id="about" className="menu-item" href="/about">Biz haqimizda</a>
                <a id="destination" className="menu-item" href="/destination">Maqsadimiz</a>
                <><button className="menu-item" data-tip="Tez orada ushbu yangilik nima ekanligni bilib olasiz!" style={{display: "block", margin: "1rem 0", fontWeight: "600", fontSize: "1.15em", color: (props.theme === 'dark' ? "#f1f1f1" : "#121620")}}><FontAwesomeIcon icon={faCog} color={props.theme === "dark"? "#f1f1f1": "#121620"} size="xs"/> Sozlamalar</button> <ReactTooltip effect="solid" type={props.theme ==="dark" ? "light":"dark"}/> </>
            </Menu>
        <StyledNav>
            <Link to="/" className="logo"><img src={Logo} alt="Logo" width="48"/><h1>Listen-Quran</h1></Link>

            <ul>
                <li><Link to="/about">Biz haqimizda</Link></li>
                 <li><Link to="/destination">Maqsadimiz</Link></li>
                 <li><button onClick={props.toggleTheme}>{props.theme === "dark" ? <FontAwesomeIcon icon={faMoon} color="#f1f1f1"/> : <FontAwesomeIcon icon={faSun} color="#121620"/>}</button></li>
                <li><button data-tip="Tez orada ushbu yangilik nima ekanligni bilib olasiz!"><FontAwesomeIcon icon={faCog} color={props.theme === "dark"? "#f1f1f1": "#121620"}/></button> <ReactTooltip effect="float" type={props.theme ==="dark" ? "light":"dark"}/></li>
            </ul>
        </StyledNav>
        
        </>
    )
}

export default Navbar
