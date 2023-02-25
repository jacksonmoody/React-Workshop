import './App.css';
import { Link } from "react-router-dom";
import goal from "./goal.jpg";

// Here are some MUI components that might be useful
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Feel free to import your own Layout components too
import Container from "@mui/material/Container";

// This is the Login function. Modify the code on this page to rewrite the form using Material UI! 

function Login() {
    return (
        <div className="App">
            <h1>React Workshop</h1>
            <h3>Below is a basic sign-in form:</h3>
            

            {/* Change the code below to use Material UI! */}
            <input
                type="text"
                placeholder="Email Address"
            />
            <input
                type="text"
                placeholder="Password"
            />
            <button
                type="submit"
            >
                Sign In
            </button>
            <button
                type="submit"
            >
                Sign In With Google
            </button>
            <a href="/register">Don't Have an Account? Sign Up</a> {/** This link should be changed to use React Router! */}
            {/* Change the code above to use Material UI! */}


            <h3>Try using Material UI to make it look more like this!</h3>
            <img src={goal} width="400" alt="Goal"></img>
            
            <h4>Done with that? Try using React Router to add a route called "/register" that returns the component in Register.js. Then, change the link above so that it navigates to that page!</h4>
        </div>
    );
}

export default Login;
