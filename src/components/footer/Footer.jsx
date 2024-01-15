import { useSelector } from "react-redux"
import { Maincontainer } from "./FooterStyle"

export default function Footer(){
    const store = useSelector((state) => state.page.value)

    return(
        <Maincontainer>
            <p>Fullfy- Todos os direitos reservados|{store}</p>
        </Maincontainer>
    )
}