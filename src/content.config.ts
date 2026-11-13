import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'All levels']),
    duration: z.string(),
    price: z.number(),
    originalPrice: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tools: z.array(z.string()),
    outcomes: z.array(z.string()),
    paymentLink: z.string().default(''),
    icon: z.string().default('flask'),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Karthik Kodati'),
    topic: z.string(),
    readingTime: z.string().default('5 min read'),
    draft: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['Cheat sheet', 'Template', 'Checklist', 'Starter project', 'Question bank', 'Ebook']),
    access: z.enum(['free', 'paid']),
    price: z.number().optional(),
    link: z.string().default(''),
    topic: z.string(),
  }),
});

export const collections = { courses, blog, resources };
