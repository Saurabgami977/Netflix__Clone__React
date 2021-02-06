import React, { useRef, useState } from 'react';


import './LoginScreen.css'
import SignupScreen from './SignupScreen';
import { auth } from '../firebase'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const emailRef = useRef(null);

    const checkEmail = (e) => {
        e.preventDefault();
        auth.fetchSignInMethodsForEmail(emailRef.current.value)
            .then(res => {
                if (res.length === 0) {
                    setIsNew(true)
                    setSignIn(true)
                } else {
                    setIsNew(false)
                    setSignIn(true)
                }
            })
            .catch(err => {
                if (err.code === 'auth/invalid-email') {
                    alert('Please Enter Valid Email Address')
                }
            })
    }
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix"

                />
                {
                    !signIn &&
                    <button
                        onClick={() => setSignIn(true)}
                        className="loginScreen__button"
                    >
                        Sign in
                        </button>
                }
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {
                    signIn ? (
                        <SignupScreen login={isNew} email={emailRef.current.value} />
                    ) : (
                            <>
                                <h1>Unlimited films, TV programmes and more.</h1>
                                <h2>Watch anywhere. Cancel at any time</h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                                <div className="loginScreen_input">
                                    <form>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                        <button
                                            onClick={checkEmail}
                                            className="loginScreen__getStarted"
                                        >
                                            GET STARTED
                                        </button>
                                    </form>
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default LoginScreen
