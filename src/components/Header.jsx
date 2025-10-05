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
                <button>log in</button>
            </div>

            <div className="free-trial-btn">
                <button>30-day free team trial</button>
            </div>

        </div>
    )
}

export default Header