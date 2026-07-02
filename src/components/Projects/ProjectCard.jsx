import "./Projects.css";

function ProjectCard({
  projectName,
  projectDescription,
  imageUrl,
  projectUrl,
  skills,
  sourceUrl,
  confidential = false,
}) {
  const imageContent = (
    <img
      src={imageUrl}
      alt={projectName}
      className="project-image"
      loading="lazy"
    />
  );

  return (
    <div className="project-card">
      <div className="image-container">
        {confidential ? (
          imageContent
        ) : (
          <a
            href={projectUrl}
            className="project-external-link"
            target="_blank"
            rel="noreferrer"
          >
            {imageContent}
          </a>
        )}
      </div>
      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <ul className="languages-list">
          <li>{skills}</li>
        </ul>
        <div className="project-stack">
          {confidential ? (
            <span className="project-confidential-note">
              Confidential — details available upon request
            </span>
          ) : (
            <>
              <a
                href={projectUrl}
                className="project-live-link"
                target="_blank"
                rel="noreferrer"
              >
                View live
              </a>
              <a
                href={sourceUrl}
                className="project-live-link"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
