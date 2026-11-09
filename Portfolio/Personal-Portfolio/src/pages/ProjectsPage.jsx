import { Link, useLoaderData } from "react-router-dom";

function ProjectsPage() {
    const projects = useLoaderData();

    return (
        <section>
            <h1>Projects</h1>
            <p>Select a project to see more details.</p>
            {projects.length === 0 && <p>No projects have been added yet.</p>}
            <ul className="project-grid">
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`}>
                            <img src={project.image} alt={project.title} />
                            <h2>{project.title}</h2>
                            <p>{project.summary}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProjectsPage;

export async function projectsLoader() {
    const response = await fetch('https://portfolio-bd1f8-default-rtdb.firebaseio.com/projects.json');

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Load error', message: 'Unable to load project data.' }), { status: 500 }
        );
    }

    const resData = await response.json();

    const loadedProjects = [];

    for (const key in resData) {
        loadedProjects.push({
            id: key,
            ...resData[key],
            technologies: resData[key].technologies || [],
        });
    }

    return loadedProjects;
}
