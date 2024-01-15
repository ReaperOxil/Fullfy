import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Artista"
}

export const counter = createSlice({
    name: "page",
    initialState,
    reducers:{
        goToArtist:(state)=>{
            state.value= "Artista"
        },
        goToAlbum: (state)=>{
            state.value = "Album"
        },
        goToTrack: (state) =>{
            state.value = "Musicas"
        }
    }
})

export const { goToArtist, goToAlbum, goToTrack}= counter.actions

export default counter.reducer;