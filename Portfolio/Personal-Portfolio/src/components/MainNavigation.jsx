import { NavLink } from "react-router-dom";

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink 
                        to='/' 
                        className={({isActive}) =>
                        (isActive ? 'active': undefined)
                    } end>
                        Home
                    </NavLink></li>
                    <li><NavLink 
                        to='/projects'
                        className={({isActive}) =>
                        (isActive ? 'active': undefined)}>
                        Projects
                    </NavLink></li>
                    <li><NavLink
                        to='/about'
                        className={({isActive}) =>
                        (isActive ? 'active': undefined)} end>
                        About Me
                    </NavLink></li>
                    <li><NavLink
                        to='/contact'
                        className={({isActive}) =>
                        (isActive ? 'active': undefined)} end>
                        Contact Page
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;