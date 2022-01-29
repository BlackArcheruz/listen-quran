import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Logo from '../../Images/logo.png'

const AboutContainer = styled.div`
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

const About = ()=>{
    return(
        <>
            <Navbar/>
                <AboutContainer>
                    <img src={Logo} alt="Loyiha logosi" width="128"/>
                    <h1>Biz Kimmiz?</h1>
                    <p>Listen-Quran loyihasi O'zbekistonlik yosh dasturchilar tomonidan ishlab chiqilgan bo'lib, loyiha hozirda faqat Arab-O'zbek tillarida ishlamoqda. Loyiha hozirda <span>Alpha</span> <code>0.1</code> versiyasida ishga tushirilgan. Loyihaning keyingi versiyalari ham dasturchilar tomonidan ishlab chiqilmoqda va tez orada Qur'on muxlislari uchun loyihaning <span>Beta</span> versiyasi ham ishga tushiriladi. Agarda loyihaga o'z hissangizni qo'shmoqchi bo'lsangiz bizning loyihaning <a href="https://github.com/">Github</a>dagi sahifasiga qo'shiling va Qur'on ilmini ulashish maqsadida bizga qo'shiling!</p>
                </AboutContainer>
        </>
    )
}

export default About