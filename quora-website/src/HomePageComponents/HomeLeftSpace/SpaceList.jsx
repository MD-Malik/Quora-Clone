import React from 'react'
import styles from './spaceList.module.css'

const SpaceList = () => {

    return (
        <>
            <div className={styles.LinksDiv} >


                <div className={styles.divOutPlus} >
                    < span className={styles.spanCSplus} > + </span>
                    < span className={styles.spanTitle} > Create Space </span>
                </div>

                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Visiting and Travel </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-1026-100-ohvgqriqzmtjrnillbxqoyfstjxhmlcu.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Cooking </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="	https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Psychology </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> History </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Business </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Food </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Books </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Health </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Music </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Movies </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Science </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_base} src="https://icon-library.com/images/quora-icon/quora-icon-6.jpg" alt={1} ></img>
                        <div className={styles.image_not}></div>
                    </div>
                    <span className={styles.spanTitle}> Technology </span>
                </div>
                <div className={styles.divOut} >
                    <div className={styles.image_div}>
                        <img className={styles.image_discover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5woZyUS7OFlef1rDHcJB3xcbIjFM1UENhAdBuSTFTctA1vkr&s" alt={1} ></img>
                    </div>
                    <span className={styles.spanTitle}> Discover Spaces </span>
                </div>
            </div>

        </>
    )
}

export default SpaceList