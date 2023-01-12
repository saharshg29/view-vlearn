import "./index.css"

import React from 'react'

function Login() {
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                       
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <span className="underlineHover">Forgot Password?</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login