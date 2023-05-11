'use client'

import Image from 'next/image'
import React from 'react'
import { Post } from '../models/post'
import styles from '../styles/post-card.module.css'
import { AiFillHeart } from 'react-icons/ai';
import { useAppContext } from '../context/appContext'





export default function PostCard ({ post }: {post: Post}) {

    const appContext = useAppContext();

    // toggle Heart icon make it RED if is in Favorite list and GRAY if it is not
    const toggleFavHandler = (postId: string, isFav: boolean) => {

        if(isFav){
            appContext.removeFromFavorites(postId);
            return;
        }
        appContext.addToFavorites(postId);
    }

    // get image funtion to pass it to Image component as a loader
    const getImage = (image: string) => { return () => image }

    


    return (
        <div className={styles.layout}>
            <main className={styles.card}>

                {/* Fisrt Section */}
                <header className={styles.header}>
                    <Image loader={getImage(post.profileImage)} src='/public/noon.png' alt={post.title} width={50} height={50} />

                    <h4>{post.ownerName}</h4>
                </header>

                {/* Second Section (Image with its title and desc) */}
                <section className={styles.body}>
                    <Image loader={getImage(post.image)} src='/public/noon.png' alt={post.title} layout="intrinsic" width={500} height={500} />
                    <div className={styles.imgFooter}>
                        <div>
                            <p>{post.description?.length > 30 ? post.description.substr(0, 30) + "..." : post.description}</p>
                            <h4>{post.title}</h4>
                        </div>
                        {/* TODO: make heart RED if is in Favs */}
                        <AiFillHeart className={`${styles.icon}  ${post.isFav && styles.fav}`} onClick={()=> toggleFavHandler(post.id, post.isFav)}/>
                    </div>
                </section>

                {/* Third Section (likes, caption, tags, comments) */}
                <footer className={styles.footer}>
                    <div className={styles.likes}>
                        <AiFillHeart className={styles.icon} />
                        <span>{post.likes} likes</span>
                    </div>
                    <div className={styles.caption}>
                        <p>{post.caption}</p>
                    </div>
                    <div className={styles.tags}>
                        {
                            post.tags?.map((tag, index) => <span key={index}>#{tag} </span>)
                        }
                    </div>
                    <div className={styles.comments}>
                        <span>View {post.commentsNumber} comments</span>
                    </div>
                </footer>

            </main>
        </div>
    )
}

