import "../styles/project.css";

const technologies = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/node-dot-js.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg' },
    { name: 'Java', logo: 'https://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Java-Coffee-Cup-Logo-Copyrighted-icon.png' },
    { name: 'Spring', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spring.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
    { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg' },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jenkins.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg' },
    { name: 'Sass', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sass.svg' },
];


export const Project = ({ imageUrl = "", videoUrl, title, description, useTechnologies, linkChildren }) => {
    return (
        imageUrl === "" ? (
            <div className="card">
                <video controls width="80%">
                    <source src={videoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="title title-light-blue">{title}</div>
                <div className="description description-container">{description}</div>
                <div className="technologies">
                    {technologies
                        .filter(tech => useTechnologies.includes(tech.name))
                        .map((tech, index) => (
                            <img key={index} src={tech.logo} alt={`${tech.name} logo`} className="technology-logo" />
                        ))}
                </div>
                <div className="link-container">
                    {linkChildren}
                </div>
            </div>) :
            (<div className="card">
                <img className="image" src={imageUrl} alt={`${title} project image`} />
                <div className="title title-light-blue">{title}</div>
                <div className="description description-container">{description}</div>
                <div className="technologies">
                    {technologies
                        .filter(tech => useTechnologies.includes(tech.name))
                        .map((tech, index) => (
                            <img key={index} src={tech.logo} alt={`${tech.name} logo`} className="technology-logo" />
                        ))}
                </div>
                <div className="link-container">
                    {linkChildren}
                </div>
            </div>)
    );
};