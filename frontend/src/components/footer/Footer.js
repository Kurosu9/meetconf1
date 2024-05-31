import React from 'react';
import classes from './Footer.module.css';
import logo from './img/logo_w.svg';
import insta from './img/instagram.svg';
import youtube from './img/youtube.svg';
import telegram from './img/telegram.svg';
import alatoo from './img/alatoo.png';
import kgma from './img/kgma.png';




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
                            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><img src={insta} alt='instagram' style={{width: "30px", height: "30px", borderRadius: "10px"}}/></a>
                            <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer"><img src={youtube} alt='youtube' style={{borderRadius: "6px"}}/></a>
                            <a href='https://telegram.org/' target='_blank' rel="noopener noreferrer"><img src={telegram} alt='telegram' style={{width: "30px", height: "30px", }}/></a>
                        </div>
                    </div>
                    <div className={classes.partner}>
                        <h4>Partners</h4>
                        <div className={classes.logos}>
                            <a href='https://alatoo.edu.kg/' target='_blank' rel="noopener noreferrer"><img src={alatoo} alt='instagram' style={{width: "50px", height: "50px", borderRadius: "10px"}}/></a>
                            <a href='https://www.kgma.kg/ru' target='_blank' rel="noopener noreferrer"><img src={kgma} alt='youtube' style={{width: "50px", height: "50px", borderRadius: "10px"}}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}