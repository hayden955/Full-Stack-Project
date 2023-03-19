import React from 'react';
import '../App.css';
import beachPic from "./signupPageBeachPic.jpg";
import firebase from "../firebase";

function setUpRecaptcha(){
    console.log("Called");
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("Captcha resolved");
          this.onSignInSubmit();
        }
      });
};

function onSignInSubmit(event){
    // const phoneNumber = getPhoneNumberFromUserInput();
    event.preventDefault();
    setUpRecaptcha();
    const phoneNumber = "+911234567899";
    // const phoneNumber = "+19784960602";
    const appVerifier = window.recaptchaVerifier;
    console.log(phoneNumber);
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        var code = window.prompt("Enter verification code")

        // const code = getCodeFromUserInput();
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("Signed in");
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });

        // ...
        }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
    });
}

const Signup = () => {

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-6 text-left">
                    <h2>Phone Login</h2>
                    <form onSubmit={onSignInSubmit}>
                        <div id="recaptcha-container"></div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input type="number" className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );

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

            <form action= "action_page.php" method = "post" style = {{
                position: "absolute", 
                top: 225, 
                left: 475,
                }}>

                <div class = "container" style = {{
                    width: "450px",
                    }}>
                    
                    <h1 style = {{
                        fontSize: "20px",
                        }}> 
                    Fill out the following information to create an account! 
                    </h1>


                    <label for = "uname"> 
                        <b> Username </b> 
                    </label>
                    <input type = "text" placeholder = "Enter Username" name = "uname" required/>

                    <label for = "psw">
                        <b> Password </b>
                    </label>
                    <input type = "password" placeholder = "Enter Password" name = "psw" required/>

                    <label for = "password">
                        <b> Confirm Password </b>
                    </label>
                    <input type = "text" placeholder = "Confirm Password" name = "psw" required/>

                    <button type = "submit"> Create Account </button>
                </div>

            </form>

        </div>
    );
}

export default Signup;