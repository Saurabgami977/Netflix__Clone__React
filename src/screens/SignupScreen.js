import React, { useRef, useState } from 'react';

import './SignupScreen.css'
import { auth } from '../firebase';

const SignupScreen = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [login, setLogin] = useState(!props.login)

    const submitHandler = e => {
        e.preventDefault();
        login && auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
        }).catch(error => {
            alert(error.message)
        })
        !login && auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
        }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>{login ? 'Sign In' : 'Sign Up'}</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button
                    type="submit"
                    onClick={submitHandler}
                >
                    {login ? 'Sign In' : 'Sign Up'}
                </button>
                <h4>
                    <span className="signupScreen__gray">{login ? 'New to Netflix?' : 'Already have an account?'} </span>
                    <span
                        onClick={() => setLogin(!login)}
                        className="signupScreen__link"
                    >
                        {login ? 'Sign up  now.' : 'Sign in'}
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
