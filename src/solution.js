import './App.css';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Register from "./Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Login() {
    return (
        <Container component="main" maxWidth="xs" sx= {{mt:5}}>
            <Typography component="h1" variant="h5" align="center">
                Sign In
            </Typography>
            <TextField
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
            />
            <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
            />
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
            >
                Sign In
            </Button>
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
            >
                Sign In With Google
            </Button>
            <Link to="/register">
                Don't have an account? Sign Up
            </Link>
        </Container>
    )
}

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
