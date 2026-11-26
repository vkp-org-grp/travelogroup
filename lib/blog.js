import { blogPosts } from '@/data/blogPosts';

// Blog is fully local: post details live in data/blogPosts.js and each
// article body is a component in components/blog/articles/.
export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}
