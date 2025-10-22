import images from "../data/images"
import Resources from "../components/Resources"

function Library() {
    return (
        <div className="library-main">

            <div className="library-head">

                <div className="library-title">

                    <h1>New in the Library</h1>

                </div>
                <div className="view-all">
                    <a href="#">VIEW ALL</a>
                </div>
            </div>

            <div className="all-resources">

                {images.map((image) => {
                    return <Resources
                        key={image.id}
                        img={image.img}
                        name={image.name}
                    />
                })}

            </div>

        </div>
    )
}

export default Library