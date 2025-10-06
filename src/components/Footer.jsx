import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { GrYoutube } from "react-icons/gr"

function Footer() {
    return (
        <div className="footer-main">

            <div className="footer-title">

                <h1>Made remotely with love by <br /> Stark Lab, Inc.</h1>

            </div>

            <div className="footer-links">

                <div className="product">
                    <p>PRODUCT</p>
                    <p>Stark for Figma</p>
                    <p>Stark for FigJam</p>
                    <p>Stark for Sketch</p>
                    <p>Stark for Chrome</p>
                    <p>Stark for Firofox</p>
                    <p>Stark for Edgo</p>
                    <p>Stark for Safari</p>
                    <p>Stark for Arc</p>
                    <p>Stark for Brave</p>
                </div>

                <div className="product">
                    <p>RESOURCES</p>
                    <p>Blog</p>
                    <p>Library</p>
                    <p>Release Notes</p>

                </div>

                <div className="product">
                    <p>HELP</p>
                    <p>My account</p>
                    <p>Support Docs</p>
                    <p>Contact Us</p>
                    <p>Feature Requests</p>

                </div>

                <div className="product">
                    <p>COMPANY</p>
                    <p>Press Releases</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Security Overview</p>
                    <p>Status</p>
                    <p>Terms of Services</p>
                    <p>Code of Conduct</p>
                </div>

            </div>

            <div className="footer-social">

                <div className="twiter">
                    <FaTwitter />

                </div>

                <div className="instagram">
                    <AiFillInstagram />

                </div>
                <div className="linkdin">
                    <FaLinkedin />

                </div>
                <div className="youtube">
                    <GrYoutube />

                </div>

            </div>

        </div>
    )
}

export default Footer