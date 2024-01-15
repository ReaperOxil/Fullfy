import {CardArtist} from "../../components/card/Card"
import Footer from "../../components/footer/Footer"
import {DivMargin, Maincontainer, ShowArtist} from "./ArtistStyle"
import Header from "../../components/header/Header"

export default function Artist(){
return(
<Maincontainer>
    <Header/>
    <DivMargin/>
    <ShowArtist>
        Artistas
    </ShowArtist>
    <div className="card">
    <CardArtist/>
    </div>
    <Footer/>
</Maincontainer>

)


}