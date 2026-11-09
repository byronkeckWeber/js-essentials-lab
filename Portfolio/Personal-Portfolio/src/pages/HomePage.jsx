import { Link } from "react-router-dom";
import profilePicture from "../assets/profile.jpg";

function HomePage() {
    return (
        <section className="myself">
            <img
                src={ profilePicture }
                alt="Byron Keck"
                className="profile-picture"
            />
            <div className="intro-text">
                <p className="eyebrow">Hello, I'm</p>
                <h1>Byron Keck</h1>
                <p className="tagline">
                    Beginning software developer and soon-to-be Weber State University graduate.
                </p>
                <p>
                    More importantly I'm a new dad and excited for this new chapter of my life!<br/>
                    It's been hard balancing work, school, and family time recently, but with school ending soon I'll have more time for everything.<br/>
                    I am looking forward to break into the software developing field, and would particularly like to work designing websites<br/>
                    Eventually I hope to work as an independent contractor developing video games, but will probably just be something I eventually do on the side.<br/>
                </p>
                <div className="actions">
                    <Link to="/projects" className="button">View My Projects</Link>
                    <Link to="/contact" className="button secondary">Contact Me</Link>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
