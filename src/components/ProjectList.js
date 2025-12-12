import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, updateStatus, deleteProject, addProject, loading }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    // Call addProject function passed from App.js
    addProject({
      title: newTitle,
      description: newDescription,
      status: "Pending"
    });

    setNewTitle("");
    setNewDescription("");
  };

  if (loading) return <p>Loading projects...</p>;
  if (!projects || projects.length === 0) return <p>No project logs available yet.</p>;

  return (
    <section className="project-list container">
      <h2 className="section-title">Project Development Logs</h2>

      {/* NEW PROJECT FORM */}
      <form onSubmit={handleAddProject} className="new-project-form">
        <input
          type="text"
          placeholder="Project title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit" className="btn add-btn">Add Project</button>
      </form>

      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            project={project}
            updateStatus={updateStatus}
            deleteProject={deleteProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
