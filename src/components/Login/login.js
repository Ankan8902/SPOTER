import React from 'react';
import Styles from './login.module.css'
import profile from '../../images/signup.jpg'
import email from '../../images/email.jpg'
import pass from '../../images/pass.png'
import { Link} from 'react-router-dom';


const Login = (props) => {


    return (
        // <div className={Styles.main}>
        //     <div className={Styles.container}>
        //         <img src={food} alt="food"></img>
        //         <h1>Welcome Back!</h1>
        //         <form className={Styles.form}>

        //             <div className={Styles.fiels}>
        //                 <FontAwesomeIcon icon={faVoicemail} className={Styles.contact} />
        //                 <input type="textfield" className={Styles.input} placeholder="Email"/>
        //                     {/* // onChange={(e) => {
        //                         setemail(e.target.value)
        //                     }} /> */}
        //             </div>

        //             <div className={Styles.fiels}>
        //                 <FontAwesomeIcon icon={faLock} className={Styles.password} />

        //                 <input className={Styles.input} type="password" placeholder="Password"/>
        //                     {/* onChange={(e) => {
        //                         setpassword(e.target.value)
        //                     }} /> */}
        //             </div>



        //             <h6 className={Styles.Fpass}>Forgot Password?</h6>
        //             <div><button className={Styles.login}>Login</button></div>
        //             <h6 className={Styles.h6}>Dont Have Account? <Link to="/signup"><span>Sign Up</span></Link></h6>
        //         </form>


        //     </div>
        // </div>

        <div className={Styles.main}>
            <div className={Styles.sub_main}>
                <div>
                    <div className={Styles.imgs}>
                        <div className="Styles.container-image">
                            <img src={profile} alt="profile" className={Styles.profile}/>

                        </div>


                    </div>
                    <div>
                        <h1>Login Page</h1>
                        <div>
                            <img src={email} alt="email" className={Styles.email}/>
                            <input type="text" placeholder="Username" className={Styles.name}/>
                        </div>
                        <div className={Styles.second_input}>
                            <img src={pass} alt="pass" className={Styles.email}/>
                            <input type="password" placeholder="Email" className={Styles.name}/>
                        </div>
                        <div className={Styles.login_button}>
                            <button>Login</button>
                        </div>
           
                        <p className={Styles.link}>
                            <h6>Forgot password ?</h6> Or <Link to="/signup">Sign Up</Link>
                        </p>
           
 
                    </div>
                </div>
       

            </div>
        </div>
    )
}
export default Login
