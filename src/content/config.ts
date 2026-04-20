import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    company:     z.string(),
    companySlug: z.string(),
    role:        z.string(),
    startYear:   z.number(),
    endYear:     z.union([z.number(), z.literal('present')]),
    order:       z.number(),
    tags:        z.array(z.string()),
    domains:     z.array(z.string()),
    summary:     z.string(),
    heroImage:   z.string().optional(),
    heroVideo:   z.string().optional(),
    youtubeUrls: z.array(z.string()).optional(),
    images:      z.array(z.string()).optional(),
    videos:      z.array(z.string()).optional(),
    externalUrl: z.string().url().optional(),
    featured:    z.boolean().default(false),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    date:       z.coerce.date(),
    summary:    z.string(),
    category:   z.string().optional(),
    heroImage:  z.string().optional(),
    externalUrl: z.string().url().optional(),
    featured:   z.boolean().default(false),
    draft:      z.boolean().default(false),
  }),
});

export const collections = { projects, news };
