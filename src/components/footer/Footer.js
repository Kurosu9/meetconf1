import React from 'react';
import classes from './Footer.module.css';
import logo from './img/logo_w.svg';
import insta from './img/instagram.svg';
import youtube from './img/youtube.svg';




export function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.footer_inner}>
                    <div className={classes.logo}>
                        <img src={logo} alt='logo'/>
                        <h4>Copyright 2024. Meet Conference</h4>
                        <p>Meet Conference is a platform for knowledge and innovation exchange,
                            featuring conferences, engaging talks, and a project exhibition.</p>
                    </div>
                    <div className={classes.contacts}>
                        <h4>Contact Us</h4>
                        <p>+996566799999</p>
                        <p>Adress st. Lenin 88</p>
                    </div>
                    <div className={classes.social}>
                        <h4>Our Social</h4>
                        <div className={classes.logos}>
                            <img src={insta} alt='instagram' style={{width: "30px", height: "30px", borderRadius: "10px"}}/>
                            <img src={youtube} alt='youtube' style={{borderRadius: "6px"}}/>
                        </div>
                    </div>
                    <div className={classes.partner}>
                        <h4>Partners</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}