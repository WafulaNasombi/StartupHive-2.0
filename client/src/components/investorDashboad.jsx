import React, { useState, useEffect } from 'react';

function InvestorDashboard() {
  const [developers, setDevelopers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([]);
  
  // Function to fetch developer profiles from the server
  const fetchDevelopers = async () => {
    const response = await fetch('/api/developers');
    const data = await response.json();
    setDevelopers(data);
  };
  
  // Function to fetch projects from the server
  const fetchProjects = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
  };
  
  // Function to fetch ideas from the server
  const fetchIdeas = async () => {
    const response = await fetch('/api/ideas');
    const data = await response.json();
    setIdeas(data);
  };
  
  // Fetch developer profiles, projects, and ideas on component mount
  useEffect(() => {
    fetchDevelopers();
    fetchProjects();
    fetchIdeas();
  }, []);
  
  return (
    <div>
      <h1>Investor Dashboard</h1>
      <h2>Developers</h2>
      <ul>
        {developers.map(developer => (
          <li key={developer.id}>
            {developer.firstName} {developer.lastName}
          </li>
        ))}
      </ul>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
      <h2>Ideas</h2>
      <ul>
        {ideas.map(idea => (
          <li key={idea.id}>
            {idea.name} - {idea.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvestorDashboard;
