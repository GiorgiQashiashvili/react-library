import Collections from "./Collections"
import Library from "./Library"

function Center() {
    return (

        <div className="center-main">

            <div className="center-left">
                <div className="search">
                    <p>Search Library</p>
                    <input type="search" />
                </div>

                <div className="left-links">
                    <a href="#">Home</a>
                    <a href="#">Collections</a>
                    <select>
                        <option value="Categories">
                            Categories
                        </option>
                    </select>
                </div>

                <div className="contribute-stark">
                    <h3>Contribute to Stark</h3>
                    <p>Got any accessibility recources <br />
                        or news?
                    </p>

                    <button className="submit-btn">Submit a Recource</button>
                </div>
            </div>

            <div className="center-div">
                <Library />

                <Collections />

            </div>

        </div>

    )
}

export default Center