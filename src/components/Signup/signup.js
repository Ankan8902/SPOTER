import React from 'react'
import Styles from './signup.module.css'
import login from '../../images/login.jpg'
import email from '../../images/email.jpg'
import pass from '../../images/pass.png'



import { Link} from 'react-router-dom';

const signup = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.sub_main}>
        <div>
          <div className={Styles.imgs}>
            <div className="Styles.container-image">
              <img src={login} alt="profile" className={Styles.profile}/>

            </div>


          </div>
          <div>
            <h1>Sign Up Page</h1>

            <div>
              <img src={email} alt="email" className={Styles.email}/>
              <input type="text" placeholder="Full Name" className={Styles.name}/>
            </div>

            <div className={Styles.second_input}>
              <img src={email} alt="email" className={Styles.email}/>
              <input type="text" placeholder="Email" className={Styles.name}/>
            </div>

            <div className={Styles.second_input}>
              <img src={pass} alt="pass" className={Styles.email}/>
              <input type="password" placeholder="Password" className={Styles.name}/>
            </div>

            <div className={Styles.second_input}>
              <img src={pass} alt="pass" className={Styles.email}/>
              <input type="password" placeholder="Confirm Password" className={Styles.name}/>
            </div>

            <div className={Styles.login_button}>
              <button>Sign Up</button>
            </div>
           
            <p className={Styles.link}>
              <h6>Already have account ?</h6> Or <Link to="/">Login</Link>
            </p>
           
 
          </div>
        </div>
       

      </div>
    </div>
    
  )
}

export default signup