import styled from 'styled-components'

function NotFound(){
    const StyledHeading = styled.div`
        text-align: center;
        display: flex;
        justify-content:center;
        align-items:center;
    `
    return(
        <StyledHeading>
        <h1>
            404 : Sahifa topilmadi
        </h1>
        </StyledHeading>
    )
}

export default NotFound