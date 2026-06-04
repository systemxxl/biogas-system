import React, { createContext, useContext, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blogPosts as initialBlogs } from '../../lib/blogs';
import { projectsGallery as initialProjects } from '../../lib/projects';
import { mainServices as initialServices } from '../../lib/services';
import * as api from '../../lib/api/supabase.api';
import { toast } from 'sonner';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const queryClient = useQueryClient();

  // Queries
  const { data: blogs = [] } = useQuery({
    queryKey: ['blogs'],
    queryFn: api.getBlogs,
    initialData: initialBlogs,
  });

  const { data: projects = [] } = useQuery({
    queryKey: ['projects'],
    queryFn: api.getProjects,
    initialData: initialProjects,
  });

  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: api.getServices,
    initialData: initialServices,
  });

  // Helper to map UI data to Supabase schema
  const mapProjectToDb = (p) => ({
    title: p.title,
    category: p.cat || p.category,
    excerpt: p.text || p.excerpt,
    description: p.description,
    main_image: p.image || p.main_image,
    images: p.images || [],
    icon: typeof p.icon === 'string' ? p.icon : (p.icon?.name || 'Leaf')
  });

  const mapBlogToDb = (b) => ({
    title: b.title,
    slug: b.slug,
    category: b.category,
    excerpt: b.excerpt,
    content: b.content,
    author: b.author || 'Admin',
    date: b.date || new Date().toLocaleDateString(),
    read_time: b.readTime || b.read_time || '5 min read',
    image: b.image,
    tags: b.tags || []
  });

  const mapServiceToDb = (s) => ({
    title: s.title,
    text: s.text,
    image: s.image,
    icon: typeof s.icon === 'string' ? s.icon : (s.icon?.name || 'Wrench')
  });

  // Mutations
  const addProjectMutation = useMutation({
    mutationFn: (data) => api.addProjectApi(mapProjectToDb(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project added successfully');
    },
    onError: (e) => toast.error(`Error: ${e.message}`)
  });

  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateProjectApi(id, mapProjectToDb(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project updated successfully');
    },
    onError: (e) => toast.error(`Error: ${e.message}`)
  });

  const deleteProjectMutation = useMutation({
    mutationFn: (id) => api.deleteProjectApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project deleted');
    },
  });

  const addServiceMutation = useMutation({
    mutationFn: (data) => api.addServiceApi(mapServiceToDb(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
      toast.success('Service added successfully');
    },
    onError: (e) => toast.error(`Error: ${e.message}`)
  });

  const updateServiceMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateServiceApi(id, mapServiceToDb(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
      toast.success('Service updated successfully');
    },
    onError: (e) => toast.error(`Error: ${e.message}`)
  });

  const deleteServiceMutation = useMutation({
    mutationFn: (id) => api.deleteServiceApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
      toast.success('Service deleted');
    },
  });

  const addBlogMutation = useMutation({
    mutationFn: (data) => api.addBlogApi(mapBlogToDb(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast.success('Blog added successfully');
    },
    onError: (e) => toast.error(`Error: ${e.message}`)
  });

  const updateBlogMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateBlogApi(id, mapBlogToDb(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast.success('Blog updated successfully');
    },
    onError: (e) => toast.error(`Error: ${e.message}`)
  });

  const deleteBlogMutation = useMutation({
    mutationFn: (id) => api.deleteBlogApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast.success('Blog deleted');
    },
  });

  const value = useMemo(() => ({
    blogs,
    addBlog: addBlogMutation.mutate,
    updateBlog: (id, data) => updateBlogMutation.mutate({ id, data }),
    deleteBlog: deleteBlogMutation.mutate,

    projects,
    addProject: addProjectMutation.mutate,
    updateProject: (id, data) => updateProjectMutation.mutate({ id, data }),
    deleteProject: deleteProjectMutation.mutate,

    services,
    addService: addServiceMutation.mutate,
    updateService: (id, data) => updateServiceMutation.mutate({ id, data }),
    deleteService: deleteServiceMutation.mutate,
  }), [blogs, projects, services, addBlogMutation, updateBlogMutation, deleteBlogMutation, addProjectMutation, updateProjectMutation, deleteProjectMutation, addServiceMutation, updateServiceMutation, deleteServiceMutation]);

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
