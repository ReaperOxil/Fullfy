import { CardTracks } from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { DivMargin, Maincontainer, ShowTracks } from "./TrackStyle";
export default function Track() {
    return (
<Maincontainer>
<Header/>
    <DivMargin/>
    <ShowTracks>
        Tracks
    </ShowTracks>
    <div className="card">
    <CardTracks/>
    </div>
    <Footer/>
</Maincontainer>
    )
}