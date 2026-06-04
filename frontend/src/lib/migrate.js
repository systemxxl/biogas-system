import { supabase } from './supabase';
import { projectsGallery, projectCategories } from './projects';
import { blogPosts } from './blogs';
import { mainServices } from './services';

/**
 * Utility script to migrate existing static data to Supabase.
 * You can run this from the browser console in development mode:
 * 
 * import { migrateAll } from './src/lib/migrate';
 * await migrateAll();
 */

export async function migrateProjects() {
  console.log('Migrating projects...');
  const { error } = await supabase.from('projects').insert(
    projectsGallery.map(p => ({
      title: p.title,
      category: p.cat,
      excerpt: p.text,
      description: p.description,
      main_image: p.image,
      images: p.images,
      icon: p.icon.name || 'Leaf' // Store icon name as string
    }))
  );
  if (error) console.error('Error migrating projects:', error);
  else console.log('Projects migrated successfully!');
}

export async function migrateBlogs() {
  console.log('Migrating blogs...');
  const { error } = await supabase.from('blogs').insert(
    blogPosts.map(b => ({
      slug: b.slug,
      title: b.title,
      category: b.category,
      excerpt: b.excerpt,
      content: b.content,
      author: b.author,
      date: b.date,
      read_time: b.readTime,
      image: b.image,
      tags: b.tags
    }))
  );
  if (error) console.error('Error migrating blogs:', error);
  else console.log('Blogs migrated successfully!');
}

export async function migrateServices() {
  console.log('Migrating services...');
  const { error } = await supabase.from('services').insert(
    mainServices.map(s => ({
      title: s.title,
      text: s.text,
      image: s.image,
      icon: s.icon.name || 'Wrench'
    }))
  );
  if (error) console.error('Error migrating services:', error);
  else console.log('Services migrated successfully!');
}

export async function migrateAll() {
  await migrateProjects();
  await migrateBlogs();
  await migrateServices();
  console.log('All migrations completed!');
}
