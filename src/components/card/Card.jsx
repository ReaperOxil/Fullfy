import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getAlbums, getArtists, getTracks } from "../../services/api/lastfm"
import { goToArtistDetail } from "../../services/redux/artist"
import  Image  from "../elements/images/Image"
import { Container, MainGrid } from "./CardStyle"


export function CardArtist(){ 
    const[artists, setArtists] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        getArtists(setArtists);
    },[])
    return(
    <MainGrid>
        
    {
        artists.map((artist)=>{
            const artistName = artist.name.replace('','-').toLowerCase()
            return(
                <Container>
                    <Link to={`/artist/${artistName}`} onClick={()=> dispatch(goToArtistDetail({
                        name:artist.name,
                        listeners: artist.listeners,
                        url:artist.url
                    }))}>
                    <Image artist={artist.name}/>
                    <Container className="cardInfo">
                    <h2>{artist.name || "Erro no nome"}</h2>
                    <h3>{artist.listeners || "Erro nos ouvintes"}</h3>
                    <h4><a href={artist.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                    </Container>
                    </Link>
                </Container>
            )
        })
    
    }</MainGrid>
    )
    
}

export function CardAlbums(){ 
    const[albums, setAlbums] = useState([])

    useEffect(()=>{
        getAlbums(setAlbums);
    },[])

    return(    
    <MainGrid>
        {
        albums.map((album)=>{
            return(
            <Container>
            <img src={album.image[3]["#text"] || "./assets/Images/Load.png"} />
            <h2> {album.artist || "Erro no nome do artista"}</h2>
            <h3>{album.name || "Erro no nome do album"}</h3>
            <h4><a href={album.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
            </Container>
            )

        })}
    </MainGrid>
    
    )

    
}

export function CardTracks(){ 
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        getTracks(setTracks);
    }, []);

    return (
        <MainGrid>
            {
                tracks.map((track) => {
                    return (
                        <Container>
                            <img src={track.image[3]["#text"] || "./assets/Images/Load.png"}/>
                            <h2>{track.artist || "Erro no nome do artista"}</h2>
                            <h3>{track.name || "Erro no nome da track"}</h3>
                            <h3>{track.listeners || "Erro na quantidade de ouvintes"}</h3>
                            <h4><a href={track.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </Container>
                    );
                })
            }
        </MainGrid>
    )
}