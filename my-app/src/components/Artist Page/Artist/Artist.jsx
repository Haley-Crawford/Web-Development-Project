import React, { useState, useEffect, useRef } from 'react'
import styles from './Artist.module.css'

import { Profile } from '../Profile/Profile'
import { Info } from '../Info/Info'
import { Songs } from '../Songs/Songs'
import { Albums } from '../Albums/Albums'



export function Artist() {
    const [color, setColor] = useState('#ffff')

    useEffect(() => {
        setColor('#' + Math. floor(Math. random()*16777215))
      }, []);

      const gradient = {
        background: `linear-gradient(${color}, black 80%)`
      }

    return (   
        <div className={styles.container} >
            <section className={styles.profile}>
                <Profile />
            </section>
            <section className={styles.content} style={gradient}>
                <Info />
                <Songs />
                <Albums />
            </section>
        </div>
    )
}