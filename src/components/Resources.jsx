
function Resources({img, name, id}) {
    return (
        <div className="resource-main">

            <div className="resource-photo">

                <img src={img} alt="" />

            </div>

            <div className="resource-desc">
                <p>RESOURCES</p>
                <h3>{name}</h3>
            </div>

        </div>
    )
}

export default Resources