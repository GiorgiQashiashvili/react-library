import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header-div">

            <div className="logo">
                <p >s</p>
            </div>

            <div className="links">
                <select>
                    <option value="Pricing">Pricing</option>
                </select>
                <a href="#">blog</a>
                <a href="#">library</a>
                <a href="#">support</a>
            </div>

            <div className="header-btn">
                <Link to={"login"}>
                    <button>log in</button>
                </Link>
            </div>

            <div className="free-trial-btn">
                <Link to={"freetrial"}>
                    <button>30-day free team trial</button>
                </Link>
            </div>

        </div>
    )
}

export default Header