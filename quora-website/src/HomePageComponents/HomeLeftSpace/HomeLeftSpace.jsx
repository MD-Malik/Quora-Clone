import React from 'react'
import styles from './homeLeftSpace.module.css'
import SpaceList from './SpaceList'
import HomeFooter from './HomeFooter'

const HomeLeftSpace = () => {

    return (
        <>
            <div className={styles.LeftContainer} >

                <SpaceList />

                <hr />

                <HomeFooter />

            </div>
        </>
    )
}

export default HomeLeftSpace