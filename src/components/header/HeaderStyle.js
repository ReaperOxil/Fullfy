import styled from "styled-components"

export const MainHeader = styled.header`
    background-color: #000;
    height: 10vh;
    font-size: 4vh;
    display: flex;
    padding-left: 2vw;
    align-items: center;
    justify-content: center;
        button{
            background-color: #1DB954;
            border-radius: 10px;
            height: 5vh;
            width: 5vw;
            :hover{
                cursor: pointer;
            }
        }
`