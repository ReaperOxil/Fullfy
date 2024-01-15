import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Album from '../pages/album/Album'
import Artist from '../pages/artist/Artist'
import ArtistDetail from '../pages/artist/ArtistDetail';
import Track from '../pages/track/Track'
import TrackDetail from '../pages/track/TrackDetail';


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Artist/>}/>
                <Route path="/artist/:artistName" element={<ArtistDetail/>}/>
                <Route path="/album" element={<Album/>}/>
                <Route path="/album/:artistName" element={<Album/>}/>
                <Route path="/track" element={<Track/>}/>
                <Route path="/track/:artistName" element={<Track/>}/>
                <Route path="/track/:artistName/:albumName" element={<TrackDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}