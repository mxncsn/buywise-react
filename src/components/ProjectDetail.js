import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProjectDetail = ({ projects, updateStatus, deleteProject }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p._id === id);

  if (!project) {
    return (
      <div className="container">
        <h2>Project Not Found</h2>
        <Link to="/" className="btn">Back to Projects</Link>
      </div>
    );
  }

  return (
    <section className="container project-detail">
      <h2>{project.title}</h2>
      <p><strong>Status:</strong> {project.status}</p> 
      <p>_______________________________________________________________________________________________________________________</p>
      <p><strong>Description:</strong> {project.description}</p>

      <button className="btn status-btn" onClick={() => updateStatus(project._id)}>
        Change Status
      </button>

      <button
        className="btn delete-btn"
        onClick={() => {
          if (window.confirm("Delete this project?")) {
            deleteProject(project._id);
            // after deletion, go back to home/list
            navigate("/");
          }
        }}
        style={{ marginLeft: "0.75rem" }}
      >
        Delete
      </button>

      <br /><br />
      <Link to="/" className="btn back-btn">← Back to List</Link>
    </section>
  );
};

export default ProjectDetail;
