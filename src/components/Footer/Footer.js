import styled from 'styled-components'

const Footer = ()=>{
    const date = new Date()
    const year = date.getFullYear();
    const FooterContainer = styled.div`
        postion: relative;
        div{
            positon: fixed;
            bottom: 0;
            text-align: center;
            padding: 2rem;
            border-top: 2px solid rgb(209 213 219);
            p{
                color: rgb(209 213 219);
                font-size: larger;
            }
        }
        
    `
    return(
        <FooterContainer>
            <div>
            <p>Listen Quran &copy; {year}</p>
            </div>
        </FooterContainer>
    )
}

export default Footer