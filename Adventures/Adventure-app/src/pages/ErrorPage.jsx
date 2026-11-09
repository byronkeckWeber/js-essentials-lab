import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>Error</h1>
                <p>The Great Computer Overlords overlooked this particular url...<br/>
                Please let the great Computer know where to go, or remove everything after 'http://localhost:5173/'</p>
            </main>
        </>
    )
}

export default ErrorPage;