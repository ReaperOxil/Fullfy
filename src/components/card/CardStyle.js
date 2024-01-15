import styled from "styled-components";

export const MainGrid = styled.div`
    display: grid;
    align-items: baseline;
    justify-content: center;
    gap:3vw;
    min-height: 20vh;
    width: 80vw;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    padding: 5vh 0;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 15px;
    :hover{
            cursor:pointer;
    }
    a{
            color: #1DB954;
        }
    img{
            border-radius: 15px;
        }
    .cardInfo{
        width: 90%;
        justify-content: center;
        align-items: center;
        align-self: center;
        height: 20%;
        margin-top: 40px;
        font-size: 2vh;
        border: 0px;
        }
`
