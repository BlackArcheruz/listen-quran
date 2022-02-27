import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../Images/logo.png'
import { useTranslation } from 'react-i18next';

function NotFound(){
    // eslint-disable-next-line
    const [t, i18n] = useTranslation()
    const StyledHeading = styled.div`
        text-align: center;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        height: 100vh;
        img{
            margin: 1rem 0;
        }
        a{
            padding: .6rem 1rem;
            background: rgb(59 130 246);
            border-radius: 5px;
            color: #fff;
            &:hover{
                transform: scale(1.1);
                transform: translateY(-0.25rem);
                box-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
            }
        }
        h4{
            margin: .6rem 0;
            color: rgb(59 130 246);
        }
        p{
          margin-bottom: 2rem;  
        }
    `
    document.title = `${t('NotFound')} - Listen-Quran`
    return(
        <StyledHeading>
            <img src={Logo} alt="logo" width={128} height={128} />
        <h4>
            404 Error
        </h4>
        <h1>{t('NotFound')}</h1>
        <p>{t('Sorry')}</p>
        <Link to="/">{t('Back_home')}</Link>
        </StyledHeading>
    )
}

export default NotFound
