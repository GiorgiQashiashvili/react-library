import employment from "../assets/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png"
import combos from "../assets/library_collection_making_accessible_color_combos_42c8d90a99.png"
import social from "../assets/library_collection_Inclusive_Social_Media_b9669e6d39.png"

function Collections() {
    return (
        <div className="collection-main">
            <div className="collection-title">
                <h1>Featured Collections</h1>
                <p>Handpicked and curated collections around accessibility.</p>
            </div>
            <div className="collection-content">
                <div className="employment">
                    <h3>Disability <br /> Employment</h3>
                    <img src={employment} alt="" />
                </div>
                <div className="employment">
                    <h3>Disability <br /> Employment</h3>
                    <img src={employment} alt="" />
                </div>
                <div className="employment">
                    <h3>Disability <br /> Employment</h3>
                    <img src={employment} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Collections