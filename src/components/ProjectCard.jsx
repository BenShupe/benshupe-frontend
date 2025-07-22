import "./ProjectCard.css";

export default function ProjectCard({ title, description, image_path, github, tags }) {
  return (
    <div className="project-card">
      <img src={image_path} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
        <a href={github} className="project-link" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}