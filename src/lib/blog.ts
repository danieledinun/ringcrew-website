import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updated: string;
  description: string;
  keywords: string[];
  author: string;
  industry: string[];
  readingTime: number;
  ogImage: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        return getPostBySlug(slug);
      })
      .filter(post => post !== null) as BlogPost[];

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      updated: data.updated,
      description: data.description,
      keywords: data.keywords || [],
      author: data.author,
      industry: data.industry || [],
      readingTime: data.readingTime || Math.ceil(stats.minutes),
      ogImage: data.ogImage || '/og-image.png',
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getRelatedPosts(currentSlug: string, industry: string[], limit = 3): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => post.industry.some(ind => industry.includes(ind)))
    .slice(0, limit);
}
