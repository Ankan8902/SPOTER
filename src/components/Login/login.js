import React, {useState} from 'react';
import Styles from './login.module.css'
import profile from '../../images/signup.jpg'
import emal from '../../images/email.jpg'
import pass from '../../images/pass.png'
import { Link } from 'react-router-dom';

import axios from 'axios'
import Cookies from 'js-cookie'


const Login = (props) => {
    const { setAuth } = props

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const login = async (e) => {
        e.preventDefault()
        const logindetails = {
            email: email,
            password: password
        }
        //console.log(logindetails)
        await axios.post('https://fitifyy.herokuapp.com/user/signin', logindetails)
            .then(res => {
                if (res.data.uid) {
                    Cookies.set('user', res.data.uid)
                    setAuth(res.data.uid)
                }
            });
    }



    return (
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
                            <img src={emal} alt="email" className={Styles.email}/>
                            <input type="Email" placeholder="Email" className={Styles.name} 
                                onChange={(e) => {
                                    setEmail(e.target.value) 
                                }} /> 
                        </div>
                        <div className={Styles.second_input}>
                            <img src={pass} alt="pass" className={Styles.email}/>
                            <input type="password" placeholder="password" className={Styles.name} 
                                onChange={(e) => {
                                    setPassword(e.target.value) 
                                }} /> 
                        </div>
                        <div className={Styles.login_button}>
                            <button onClick={(e)=>login(e)} >Login</button>
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
