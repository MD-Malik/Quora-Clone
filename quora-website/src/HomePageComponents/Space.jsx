import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styles from './homeLeftSpace.module.css'

const Space = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.LeftContainer}>
                <div className={styles.LinksDiv} >
                    <div className={styles.divOut} >
                        <span className={styles.spanCSplus}> + </span>
                        <span className={styles.spanTitle}> Create Space </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Visiting and Travel </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Cooking </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Psychology </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> History </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Business </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Food </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Books </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Health </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Music </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Movies </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Science </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Technology </span>
                    </div>
                    <div className={styles.divOut} >
                        <span className={styles.spanImg}> + </span>
                        <span className={styles.spanTitle}> Discover Spaces </span>
                    </div>
                </div>

                <hr />

                <div className={styles.FooterDiv}>
                    <span className={styles.foot_item} onClick={() => navigate("/about")}>About</span>.
                    <span className={styles.foot_item} onClick={() => navigate("/careers")} >Careers</span>.
                    <span className={styles.foot_item}>Terms</span>.
                    <span className={styles.foot_item}>Privacy</span>.
                    <span className={styles.foot_item}>Acceptable Use</span>.
                    <span className={styles.foot_item}>Business</span>.
                    <span className={styles.foot_item}>Press</span>.
                    <span className={styles.foot_item}>Your ad choices</span>.

                </div>
            </div>
        </>
    )
}

export default Space