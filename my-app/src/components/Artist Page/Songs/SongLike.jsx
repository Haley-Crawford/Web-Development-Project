import React, { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { useAuth } from '../../../AuthProvider'
import styles from './Songs.module.css'
import { db } from '../../../firebase'
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"; 

export const SongLike = ({ song }) => {

    const { currentUser } = useAuth();
    const [isLiked, setIsLiked] = useState(false);

    // Check initial like status on mount
  useEffect(() => {
    const checkIfLiked = async () => {
      if (currentUser) {
        const likeRef = doc(db, `users/${currentUser.uid}/likedSongs`, song.id);
        const likeSnap = await getDoc(likeRef);
        setIsLiked(likeSnap.exists()); // true if document exists
      }
    };
    checkIfLiked();
  }, []);

    const handleClick = async () => {
        const likeRef = doc(db, `users/${currentUser.uid}/likedSongs`, song.id);
    
        if (isLiked) {
            await deleteDoc(likeRef); 
        } else {
            await setDoc(likeRef, {...song, timestamp: new Date()});
        }
        setIsLiked(!isLiked); 
    }


    return !currentUser? null: (
        <Heart onClick={handleClick} className={isLiked? styles.like: ""} />
    )
}
