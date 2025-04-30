import React, { useState, useEffect } from 'react'
import { Songs } from './Artist Page/Songs/Songs'
import { doc, getDocs, collection } from 'firebase/firestore'
import { useAuth } from '../AuthProvider'
import { db } from '../firebase'

export const Favorites = ({audioRef, audioPlaying, setAudioPlaying, setTrack, trackQueue, setTrackQueue}) => {
    
    const { currentUser } = useAuth();
    const [ favSongs, setFavSongs ] = useState([]);

    useEffect(() => {

        const getSongs = async () => {

            if(currentUser){

                const ref = collection(db, "users", currentUser.uid, "likedSongs");
                const snap = await getDocs(ref);

                const songs = [];
                snap.forEach((doc) => {
                    songs.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });

                console.log(songs);
                setFavSongs(songs)

            }

        };

        getSongs();

    }, [currentUser])

    return favSongs.length > 0? <Songs songs={favSongs} audioRef={audioRef} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying} setTrack={setTrack} trackQueue={trackQueue} setTrackQueue={setTrackQueue} fav={true} /> : <h2>No favorites yet...</h2>;
  
}
