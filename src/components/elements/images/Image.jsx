import { useEffect, useState } from "react";
import { getImageByArtist } from "../../../services/api/image";

export default function Image({artist}){ 
    const[image, setImage] = useState([])

    useEffect(()=>{
        getImageByArtist(setImage, artist);
    },[])

    return(
        <img src={image || "./assets/Images/Load.png"}
        alt={image ? artist.name : "Artista sem imagem"}
        />
    )
}