import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../AuthProvider'
import styles from './PlaybackControls.module.css'
import { Heart } from 'lucide-react'
import { db } from '../../../firebase'
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'

export const ControlLike = ({ track }) => {

    const [ isLiked, setIsLiked ] = useState(false);
    const { currentUser } = useAuth();

    useEffect( () => {

        const checkIfLiked = async () => {
            const likeRef = doc(db, `users/${currentUser.uid}/likedSongs`, track.id);
            const likeSnap = await getDoc(likeRef);
            setIsLiked(likeSnap.exists());
        }

        checkIfLiked();

    },[track])

    const handleClick = async ( ) => {

        const likeRef = doc(db, `users/${currentUser.uid}/likedSongs`, track.id);
            
        if (isLiked) {
            await deleteDoc(likeRef); 
        } else {
            await setDoc(likeRef, {...track, timestamp: new Date()});
        }
        setIsLiked(!isLiked); 

    };

    return (
        <button className={styles.controlButton}>
            <Heart onClick={handleClick} className={`${styles.controlIcon} ${isLiked? styles.like: ""}`} />
        </button>
    )

    
}
