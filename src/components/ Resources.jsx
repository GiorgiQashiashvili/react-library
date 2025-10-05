import resource from "../assets/Resource-Management.jpeg"

function Resources() {
    return (
        <div className="resource-main">

            <div className="resource-photo">

                <img src={resource} alt="" />

            </div>

            <div className="resource-desc">
                <p>RESOURCES</p>
                <h3>Making <br />
                    Accesible Books
                </h3>
            </div>

        </div>
    )
}

export default Resources