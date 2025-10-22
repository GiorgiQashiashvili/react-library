import { IoCheckmarkCircle } from "react-icons/io5";
import Login from "./Login";

function FreeTrial() {
    return (
        <div className="free-trial-main">
            <div className="trial-right">
                <p>STEP 1 OF 3</p>
                <h1>Let's start your <br /> free trial</h1>

                <div className="trial-txt">
                    <p><IoCheckmarkCircle />Get full access to Stark's Launch Plan for 14 days free.</p>
                    <p><IoCheckmarkCircle />Add as many team members as you need.</p>
                    <p><IoCheckmarkCircle />We won't charge your credit card, you can cancel any time.</p>
                </div>
            </div>
            <div className="trial-left">
                <Login/>
            </div>
        </div>
    )
}

export default FreeTrial