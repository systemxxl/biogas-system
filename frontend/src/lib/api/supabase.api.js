import { supabase } from '../supabase';

/**
 * Storage API
 */
export async function uploadImage(file, path = 'uploads') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
  const filePath = `${path}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('biogas-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('biogas-images')
    .getPublicUrl(filePath);

  return data.publicUrl;
}

/**
 * Generic CRUD operations
 */
async function insertItem(table, item) {
  const { data, error } = await supabase
    .from(table)
    .insert([item])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function updateItem(table, id, item) {
  const { data, error } = await supabase
    .from(table)
    .update(item)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function deleteItem(table, id) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
}

/**
 * Projects API
 */
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export const addProjectApi = (project) => insertItem('projects', project);
export const updateProjectApi = (id, project) => updateItem('projects', id, project);
export const deleteProjectApi = (id) => deleteItem('projects', id);

/**
 * Blogs API
 */
export async function getBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getBlogBySlug(slug) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}

export const addBlogApi = (blog) => insertItem('blogs', blog);
export const updateBlogApi = (id, blog) => updateItem('blogs', id, blog);
export const deleteBlogApi = (id) => deleteItem('blogs', id);

/**
 * Services API
 */
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
}

export const addServiceApi = (service) => insertItem('services', service);
export const updateServiceApi = (id, service) => updateItem('services', id, service);
export const deleteServiceApi = (id) => deleteItem('services', id);

/**
 * Testimonials API
 */
export async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export const addTestimonialApi = (testimonial) => insertItem('testimonials', testimonial);
export const updateTestimonialApi = (id, testimonial) => updateItem('testimonials', id, testimonial);
export const deleteTestimonialApi = (id) => deleteItem('testimonials', id);
