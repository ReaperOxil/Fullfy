import { useParams } from 'react-router-dom';
import { DivMargin, Maincontainer } from './ArtistStyle';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
import { useEffect } from 'react';
import { goToArtist } from '../../services/redux/counter';
import { goToArtistDetail } from '../../services/redux/artist';
import { useSelector } from 'react-redux';

export default function ArtistDetail() {
    const store = useSelector((state)=> state.artist)
    console.log(store.value)
    return (
        <Maincontainer>
            <Header />
            <DivMargin />
            <h1>{store.value.name}</h1>
            <h2>{store.value.listeners}</h2>
            <h4>{store.value.url}</h4>
            <Footer />
        </Maincontainer>
    )
}