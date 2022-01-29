import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import Logo from '../../Images/logo.png'

const DestinationContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding: 0 2rem;

    h1{
        font-weight: 900;
        padding:1rem 0;
        color:rgb(59 130 246);
    }
    p{
        font-weight:500;
        font-size:larger;
    }

    code{
        font-family:monospace;
        font-weight:900;
    }
    span{
        font-weight:700;
    }

    a{
        color:rgb(59 130 246);
    }

`
const Destination = ()=>{
    return(
        <>
        <Navbar/>
        <DestinationContainer>
        <img src={Logo} alt="Loyiha logosi" width="128"/>
                    <h1>Maqsadimiz</h1>
                    <p>Listen-Quran loyihasi O'zbekistonlik yosh dasturchilar tomonidan Qur'on eshitishni osonlashtirish, Qur'onga muhabbatni yana qaytarish maqsadida yozilgan. Maqsadimiz ummatga yana Qur'on muhabbatini qaytarish, Qur'onni tafsirlarini o'rganishni osonlashtirish. Loyiha hech kim tomonidan moliyalashtirilmagan va loyihadan maqsad pul topish emas. Loyihaning asosiy maqsadi Qur'on eshitishni yanada ommalashtirish.</p>
        </DestinationContainer>
        </>
    )
}

export default Destination