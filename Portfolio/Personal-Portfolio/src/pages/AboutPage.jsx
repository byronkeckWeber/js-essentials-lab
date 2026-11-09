const SKILLS = [
    'JavaScript',
    'C++',
    'C#',
    'SQL',
    'React',
    'HTML & CSS',
    'Firebase',
    'Git & GitHub',
    'Unity',
    'Airtable',
];

function AboutPage() {
    return (
        <section>
            <h1>About Me</h1>
            <p>
                Hello any and everyone! My name is <strong>Byron Keck</strong> and I'm a beginning software developer.<br/>
                I will receive my Bachelor's Degree in Computer Science from Weber State University this December, and I'm excited to continue into the field.<br/>
            </p>

            <h2>Technical Skills</h2>
            <ul className="tag-list">
                {SKILLS.map((skill) => (
                    <li key={skill} className="tag">{skill}</li>
                ))}
            </ul>

            <h2>Education</h2>
            <p>
                <strong>Weber State University</strong><br/>
                Bachelor of Science in Computer Science, graduating this December.<br/>
                Associate of Science, received Spring of 2024.<br/>
                Associate of Science in Computer Science, graduating this December.<br/>
            </p>
            <p>
                Throughout my time as a Student at Weber State University, there have been a few classes and activities I've done that have stood out.<br/><br/>
                Specifically I've enjoyed my computational structures class and learning the underlying theorums and reasons behind how a computer works and the computations it does.
                I've also really enjoyed what I learned in my various Web development classes. I've found it very rewarding to not only develop them in HTML, but also incorporating Java Script as a backend, as well as implamenting React for more streamline webpages.
                Since I can't just list every class I've enjoyed, I'll end this short list with my database classes. I've been able to learn how to work with them entirely with SQL, how to access them using Java Script as well as with React Routers. I've developed my own databases, and streamlined what's been made by others.
            </p>

            <h2>Career Objectives</h2>
            <p>
                In my professional life, the biggest things I am looking forward to is constantly learning and watching how technology grows.
                I feel like there is still a lot of room for web development to grow, and would love to be able to help in the development of that.
                Another field I would love to break into, learn more about and help grow would be the auto and self-driving car industry.
                I think there is a lot to improve on, and I would love to be able to learn how it works and help improve upon what is there.
            </p>
        </section>
    );
}

export default AboutPage;
