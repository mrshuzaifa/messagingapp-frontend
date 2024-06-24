import { Button } from '@mui/material'
import './Login.css'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
const Login = () => {
    const [{user}, dispatch] = useStateValue()
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="logo.png" alt="whatsapp" />
                <div className="login__text">
                    <h1>Sign in to Messaging App</h1>
                </div>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}
export default Login