import React, {useState} from 'react'
import LoginForm from '../auth/LoginForm.js'
import { useHistory } from 'react-router-dom'
import './SplashPage.css'
import { demoLogin, login } from '../../store/session.js'
import {useDispatch} from 'react-redux'


function Splash({ authenticated, setAuthenticated }) {
    const dispatch = useDispatch()

    const [errors, setErrors] = useState([]);

    let history = useHistory()

    const signUpRedirect = () => {
        history.push('/sign-up')
    }

    const loginDemo = async(e) => {
        e.preventDefault()
        const user = await dispatch(login('demo@aa.io','password'))
        if (!user.errors) {
            setAuthenticated(true)
        } else {
            setErrors(user.errors)
        }
    }


    return (
        <>
            <div className="SplashContainer">
                <div className="centerPiece">

                    <div className="splashMid">

                        <div className="login">
                            {/* <div className="login__logo">
                                <h1 className="login__heading">a Better Me</h1>
                            </div> */}
                            <LoginForm authenticated={authenticated}
                                setAuthenticated={setAuthenticated} />
                            <h2 className="wordSeperator"></h2>

                            <div className="Demo-Login">
                                <form>
                                    <input type="submit" value="Demo Login" onClick={loginDemo} />
                                </form>
                            </div>

                            <div className="signup">
                                <div>
                                    <span onClick={signUpRedirect} style={{ cursor: 'pointer', color: '#0095f6' }}>Sign Up</span>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}
export default Splash
