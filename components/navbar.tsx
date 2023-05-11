'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import styles from '../styles/navbar.module.css';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import Image from 'next/image';


export default function NavBar() {
    const path = usePathname();

    const [width, setWidth] = useState<number>(0);
    const widthListener = useCallback(() => setWidth(window.innerWidth), [],)

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', widthListener)
        return (() => {
            window.removeEventListener('resize', widthListener);
        })
    }, [])

    return (
        <nav className={styles.navbar}>

            <Link
                className={path === '/' ? styles.active : ''} href="/"
            >
                {
                    width <= 700
                        ? <AiFillHome className={styles.icons} />
                        : 'Home'
                }
            </Link>

            <Link
                className={path.includes('favorites') ? styles.active : ''}
                href="/favorites"
            >
                {
                    width <= 700
                        ? <AiFillHeart className={styles.icons} />
                        : 'Favorites'
                }
            </Link>

        </nav>
    )
}
