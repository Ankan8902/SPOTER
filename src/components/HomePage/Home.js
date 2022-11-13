import React from 'react'
import Styles from '../HomePage/Home.module.css'
import Navbar from '../Navbar/Navbar'
import Progress from '../common/progress/Progress'


import workoutad from '../../images/adfeatures/workout.png'
import foodad from '../../images/adfeatures/food.png'

import water from '../../images/keyfeatures/water.png'
import trainer from '../../images/keyfeatures/personal.png'
import fitness from '../../images/keyfeatures/fitness.png'
import plan from '../../images/keyfeatures/plan.png'
import music from '../../images/keyfeatures/image 23.png'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={Styles.majorContainer}>
        <Navbar/>
        <div className={Styles.main}>
            <div className={Styles.dashboard}>
                <div className={Styles.progress}>
                    <Progress />
                </div>
            </div>
        </div>

        <div className={Styles.features}>
            <div className={Styles.adfeatures}>
                <div className={Styles.ad1}>
                    <div className={Styles.adbox}>
                        <div>
                            <img src={workoutad} alt="workoutad"/>
                        </div>
                        <div>
                            <span className={Styles.hed}>
                                Start<br />
                                Today's workout
                            </span>
                            <span className={Styles.ctr}>
                                1/2 completed
                            </span>
                        </div>
                    </div>
                    <div className={Styles.adbox}>
                        <div>
                            <img src={foodad} alt="foodad"/>
                        </div>
                        <div>
                            <span className={Styles.hed}>
                                Next Meal
                            </span>
                            <span className={Styles.ctr1}>
                                300gms chicken and rice
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.keyfeatures}>
                <div>
                    <span style={{ "backgroundColor": "#F6FFFF" }}>
                        <img src={water} alt='water'/>
                        <h4><Link className={Styles.Link} to="/water-count">Water Count</Link></h4>
                    </span>
                    <span style={{ "backgroundColor": "#FFFFF2" }}>
                        <img src={trainer} alt='trainer'/>
                        <h4><Link className={Styles.Link} to="/trainer">Online Trainer</Link></h4>
                    </span>
                </div>
            <div>
                <span style={{ "backgroundColor": "#FEF9FF" }}>
                    <img src={fitness} alt='fitness'/>
                    <h4><Link className={Styles.Link} to="/workout">Workout Plan</Link></h4>
                </span>
                <span style={{ "backgroundColor": "#FAFFF9" }}>
                    <img src={plan} alt='plan'/>
                    <h4><Link className={Styles.Link} to="/nutrition">Custom Diet Plan</Link></h4>
                </span>
                <span style={{ "backgroundColor": "#FBF1FF" }}>
                    <img src={music} alt='music'/>
                    <h4><Link className={Styles.Link} to="/musicplayer">Music Player</Link></h4>
                </span>
            </div>
        </div>


        </div>



    </div>
    
  )
}

export default Home