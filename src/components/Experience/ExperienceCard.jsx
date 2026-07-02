import "./Experience.css";

function ExperienceCard({ role, company, location, period, highlights, technologies }) {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <h2 className="experience-role">{role}</h2>
        <p className="experience-company">{company}</p>
        <p className="experience-meta">
          {location} · {period}
        </p>
      </div>
      <ul className="experience-highlights">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="experience-technologies">
        <strong>Technologies:</strong> {technologies}
      </p>
    </div>
  );
}

export default ExperienceCard;
