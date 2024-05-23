import React from "react";
import classes from "./MainPage.module.css";



export function MainPage() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                {/* header */}
                <div className={classes.header}>
                    <div className={classes.container}>
                        <div className={classes.header_inner}>
                            <div className={classes.header_text}>
                                <h1>Meet Conference</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}