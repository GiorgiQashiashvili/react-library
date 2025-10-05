import Resources from "./ Resources"

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

                <div className="line1">
                    <Resources />
                    <Resources />
                    <Resources />
                </div>

                <div className="line1">
                    <Resources />
                    <Resources />
                    <Resources />
                </div>

            </div>

        </div>
    )
}

export default Library