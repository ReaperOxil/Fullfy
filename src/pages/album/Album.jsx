import { CardAlbums } from "../../components/card/Card"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { DivMargin, Maincontainer, ShowAlbum } from "./AlbumStyle"



export default function Album(){
    return(
<Maincontainer>
    <Header/>
    <DivMargin/>
    <ShowAlbum>
        Albums
    </ShowAlbum>
    <div className="card">
    <CardAlbums/>
    </div>
    <Footer/>
</Maincontainer>
    
    )

}