import React, { useState } from 'react'
import image from "../../images/Illustration.svg"
import halfeye from "../../images/pass-dis.svg"
import eye from "../../images/eye.svg"
import "./login.css"
import ButtonComponent from '../../components/button/ButtonComponent'



const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    function handlePassword(){
        let passwordDiv = document.getElementById("floatingPassword");
        
       if(passwordDiv.type == 'password'){
        passwordDiv.type = 'text'
        setShowPassword(true)
       }else if(passwordDiv.type == 'text'){
        passwordDiv.type = 'password'
        setShowPassword(false)
       }
    }

    return (
        <div className='main-container '>
            <div className='login-container'>
                <div className='left-side  '>
                    <div className='left-upper-section mb-4'>
                        <h1 id='heading'>Welcome Back</h1>
                        <span>Step into a world of possibilities</span>
                    </div>
                    <div>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                                <div className='halfeye-icon' onClick={e => handlePassword()}>
                                    {
                                        showPassword ? <img src={eye} /> : <img src={halfeye} />
                                    }
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-4 mb-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label common-style" for="gridCheck">
                                        Remember Me
                                    </label>
                                </div>
                                <div className='common-style' style={{ textDecoration: "underline" }}>
                                    Forgot password?
                                </div>
                            </div>
                            <ButtonComponent buttonType={"primary"} title={"log in"} />

                        </form>

                    </div>
                    <div className='mb-4 last-div-element'>
                        <p>Don’t have an account?<span> Sign Up</span></p>

                    </div>
                </div>




                <div className='right-side'>
                    <img src={image} />
                </div>
            </div>
        </div>
    )
}

export default Login