import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contacts from './components/Contacts';

import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";

function App() {

  // Correct usage of env variable (no quotes!)
  const API_URL = process.env.REACT_APP_API_URL;

  // ---------------------------
  // PROJECT STATE (from backend)
  // ---------------------------
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  // ---------------------------
  // Fetch projects from backend on mount
  // ---------------------------
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/api/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoadingProjects(false);
      }
    };
    if (API_URL) fetchProjects();
  }, []); // added API_URL to dependency array

  // ---------------------------
  // ADD NEW PROJECT (POST)
  // ---------------------------
  const addProject = async (newProject) => {
    try {
      const res = await fetch(`${API_URL}/api/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject)
      });
      if (!res.ok) throw new Error("Failed to create project");
      const created = await res.json();
      setProjects(prev => [...prev, created]);
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  // ---------------------------
  // UPDATE FUNCTION (PATCH)
  // ---------------------------
  const updateStatus = async (id) => {
    try {
      const project = projects.find(p => p._id === id);
      if (!project) return;

      // Cycle status
      let nextStatus;
      if (project.status === "Pending") nextStatus = "In Progress...";
      else if (project.status === "In Progress...") nextStatus = "Completed";
      else nextStatus = "Pending";

      const response = await fetch(`${API_URL}/api/projects/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });

      if (!response.ok) throw new Error("Failed to update project");
      const updatedProject = await response.json();

      setProjects(prev =>
        prev.map(p => (p._id === updatedProject._id ? updatedProject : p))
      );
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------------------
  // DELETE FUNCTION
  // ---------------------------
  const deleteProject = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/projects/${id}`, {
        method: 'DELETE'
      });
      if (response.status !== 204) throw new Error('Failed to delete project');
      setProjects(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------------------
  // Theme loader
  // ---------------------------
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme === "light" ? "light-mode" : "dark-mode");
  }, []);

  return (
    <Router>
      <Header title="BuyWise AI" />
      <main>
        <Routes>

          {/* HOME */}
          <Route path="/" element={
            <>
              <Hero
                heading="BuyWise AI: Your Smart Shopping partner!"
                leadText="AI-powered shopping assistant designed to help users compare prices, evaluate seller trustworthiness, and make smarter purchasing decisions with minimal effort."
              />
              <Features />
              <ProjectList
                projects={projects}
                updateStatus={updateStatus}
                deleteProject={deleteProject}
                addProject={addProject}
                loading={loadingProjects}
              />
            </>
          }/>

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* CONTACTS */}
          <Route path="/contacts" element={<Contacts />} />

          {/* PROJECT DETAIL PAGE */}
          <Route path="/project/:id"
            element={<ProjectDetail projects={projects} updateStatus={updateStatus} deleteProject={deleteProject} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
