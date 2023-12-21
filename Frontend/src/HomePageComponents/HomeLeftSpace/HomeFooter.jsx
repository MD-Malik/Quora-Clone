import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styles from './homeFooter.module.css'

const HomeFooter = () => {
    const navigate = useNavigate()
    return (
        <>

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

        </>
    )
}

export default HomeFooter