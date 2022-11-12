import React from 'react';
import Styles from './madition.module.css'
import medition from '../../../images/medition/Meditation.png'

function Madition() {
    return (
        <div className={Styles.majorcontainer}>
            <div className={Styles.data}>
                <h1 className={Styles.head}>
                    Stay Kalm And Composed!
                </h1>
                <p className={Styles.para}>Meditation brings the brainwave design into an alpha express that advances healing. The psyche turns out to be new, fragile, and delightful.
                </p>
            </div >
            <div className={Styles.data2}><img style={{ "width": "36.9vw", "height": "71.08vh", }} src={medition} alt="meditation image"></img>
            </div>

        </div>
    )
}

export default Madition
