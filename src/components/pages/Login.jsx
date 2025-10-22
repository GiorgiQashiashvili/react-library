import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login() {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const handleClick = () => {

        if (value.trim() === "") {
            setError("Please enter a valid email address")
            return;
        }
        
        setError("")
        navigate("/")
    }

    return (
        <div className="login-main">
            <div className="login-form">
                <div className="login-logo">
                    <p >s</p>
                </div>
                <div className="login-txt">
                    <p>Create a free Stark account or sign in with your <br /> credentials</p>
                </div>
                <div className="login-input">
                    <p>Buissnes or SSO Email</p>
                    <input
                        type="text"
                        placeholder="Enter your work email"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {error && <p style={{
                        color:"red",
                        fontSize:"14px"
                    }}>{error}</p>}
                </div>
                <div className="login-btn">
                        <button onClick={handleClick}>Continue</button>
                </div>
                <div className="login-links">
                    <a href="#">Terms of Service</a>
                    <p>and</p>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Login