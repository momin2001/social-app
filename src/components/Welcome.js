import React from 'react'
import { Button } from 'react-bootstrap'
import style from '../style/welcome.module.css'
import Fade from 'react-reveal/Fade'


const Welcome = () => {
    return (
        <>
            <div className={style.logo}>
                <img src="/images/logo.png" width="100px" height="100px" alt="logo" />
            </div>
            <Fade top>
                <div className={style.heading}>
                    <h1>Welcome to Socializer</h1>
                    <h3 className={style.subHeading}>Let's Socialize</h3>
                </div>
            </Fade>


        </>
    )
}

export default Welcome