import { Link } from "react-router-dom";
import { MainHeader } from "./HeaderStyle";
import { goToAlbum, goToArtist, goToTrack } from "../../services/redux/counter";
import { useDispatch } from "react-redux";

export default function Header(){
    const dispatch = useDispatch();
    
    return(
        <MainHeader>
            <Link to='/' onClick={()=>dispatch(goToArtist())}>
            <button>Artistas</button>
            </Link>
            <Link to='/album' onClick={()=>dispatch(goToAlbum())}>
            <button>Albums</button>
            </Link>
            <Link to='/track' onClick={()=>dispatch(goToTrack())}>
            <button>Tracks</button>
            </Link>
        </MainHeader>
    )
}