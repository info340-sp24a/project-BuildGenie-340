import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
export function SignInPage(props) {

    const auth = getAuth();

    const firebaseUIConfig = {
        signInOptions: [ //array of sign in options supported
          //array can include just "Provider IDs", or objects with the IDs and options
          GoogleAuthProvider.PROVIDER_ID,
          EmailAuthProvider.PROVIDER_ID
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
          signInSuccessWithAuthResult: (redirectUrl) => {
            window.location.assign('/search');
            
            // have profile picture default to null profile picture

            return true; //don't redirect after authentication
          }
        }
      }

    return(
    <div className='signIn'>
        <div className='signInHeader'>
            <h1><span className='coloring-header'> B</span>G</h1> 
            <p> Please choose a sign in method:</p>
        </div>
        <div className='signInCard' >
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={firebaseUIConfig} />
        </div>
    </div>

    )
}