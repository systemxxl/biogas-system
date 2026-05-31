import React, { createContext, useContext, useState, useEffect } from 'react';
import { blogPosts as initialBlogs } from '../../lib/blogs';
import { projectsGallery as initialProjects } from '../../lib/projects';
import { mainServices as initialServices } from '../../lib/services';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [projects, setProjects] = useState(initialProjects);
  const [services, setServices] = useState(initialServices);

  // Blogs CRUD
  const addBlog = (blog) => {
    const newBlog = { ...blog, id: Date.now(), date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) };
    setBlogs([newBlog, ...blogs]);
  };
  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(b => b.id === id ? { ...b, ...updatedBlog } : b));
  };
  const deleteBlog = (id) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  // Projects CRUD
  const addProject = (project) => {
    const newProject = { ...project, id: Date.now() };
    setProjects([newProject, ...projects]);
  };
  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedProject } : p));
  };
  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Services CRUD
  const addService = (service) => {
    const newService = { ...service, id: Date.now() };
    setServices([newService, ...services]);
  };
  const updateService = (id, updatedService) => {
    setServices(services.map(s => s.id === id ? { ...s, ...updatedService } : s));
  };
  const deleteService = (id) => {
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <AdminContext.Provider value={{
      blogs, addBlog, updateBlog, deleteBlog,
      projects, addProject, updateProject, deleteProject,
      services, addService, updateService, deleteService
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
