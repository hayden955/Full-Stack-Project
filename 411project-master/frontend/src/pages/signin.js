import React from 'react';
import '../App.css';
import beachPic from "./signinPageBeachPic.jpg";


const Signin = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >

            <img style = {{
                    height: "100vh",
                    width: "100%"
                    }} 
                    src = {beachPic}>
            </img>

            <form action="action_page.php" method="post" style = {{
                position: "absolute", 
                top: 275, 
                left: 450,
                }}>

                <div class="container" style = {{
                    width: "550px",
                }}>

                    <label for="uname"><b> Username </b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit"> Login </button>
                    <label>
                        <input type="checkbox" name="remember"/> 
                        Remember me
                    </label>
                </div>

                <div class="container">
                    <button type="button" class="cancelbtn" style = {{
                        position: "absolute",
                        top: 245,
                        left: 260,
                        }}> 
                        Cancel
                    </button>

                    <span class="psw"> 
                        <a href="#" style = {{
                            position: "absolute",
                            top: 260,
                            left: 425, 
                            }}> 
                            Forgot password?
                        </a>
                    </span>
                    
                </div>
            </form>

        </div>
    );
}

export default Signin;