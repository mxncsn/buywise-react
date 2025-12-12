import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, updateStatus, deleteProject }) => {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p className="project-status">
        <strong>Status:</strong> {project.status}
      </p>

      <div className="project-actions">
        <Link to={`/project/${project._id}`} className="btn view-btn">
          View Details
        </Link>

        <button 
          className="btn status-btn"
          onClick={() => updateStatus(project._id)}
        >
          Change Status
        </button>

        <button
          className="btn delete-btn"
          onClick={() => {
            // small confirm to avoid accidental deletion
            if (window.confirm("Delete this project?")) {
              deleteProject(project._id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
