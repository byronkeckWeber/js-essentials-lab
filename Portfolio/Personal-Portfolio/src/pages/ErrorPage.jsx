import { Link, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();

    let title = 'Error';
    let message = 'An unexpected error occurred.';

    if (error.status === 500) {
        title = JSON.parse(error.data).title;
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Page not Found';
        message = 'Unable to locate that page. Check the address, or use the links above.';
    }

    return (
        <>
            <MainNavigation />
            <main>
                <section className="error-box">
                    <h1>{ title }</h1>
                    <p>{ message }</p>
                    <Link to="/" className="button">Back to Home</Link>
                </section>
            </main>
        </>
    );
}

export default ErrorPage;
