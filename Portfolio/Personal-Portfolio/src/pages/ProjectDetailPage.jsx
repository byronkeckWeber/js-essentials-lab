import { Link, useLoaderData } from "react-router-dom";

function ProjectDetailPage() {
    const project = useLoaderData();

    return (
        <section>
            <article className="project-detail">
                <h1>{project.title}</h1>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>

                <h2>Built With</h2>
                <ul className="tag-list">
                    {project.technologies.map((technology) => (
                        <li key={technology} className="tag">{technology}</li>
                    ))}
                </ul>

                <div className="detail-actions">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button">
                            View on GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button">
                            Live Site
                        </a>
                    )}
                    <Link to="/projects" className="button secondary">Back to Projects</Link>
                </div>
            </article>
        </section>
    );
}

export default ProjectDetailPage;

export async function projectDetailLoader({ params }) {
    const id = params.projectId;
    const response = await fetch(`https://portfolio-bd1f8-default-rtdb.firebaseio.com/projects/${id}.json`);

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Load error', message: 'Unable to load selected project data.' }), { status: 500 }
        );
    }

    const project = await response.json();

    if (!project) {
        throw new Response('Not Found', { status: 404 });
    }

    return { id: id, ...project, technologies: project.technologies || [] };
}
