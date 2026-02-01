import { defineConfig, defineCollection, s } from 'velite'

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.{md,mdx}',
  schema: s.object({
    // Existing fields
    title: s.string(),
    slug: s.path(),
    date: s.isodate(),
    cover: s.string(),
    description: s.string(),
    content: s.mdx(),

    // Client & Project Metadata
    client: s.string().optional(),
    industry: s.string().optional(),
    liveUrl: s.string().optional(),
    repoUrl: s.string().optional(),
    role: s.string().optional(),

    // Technical Information
    techStack: s.array(s.string()).default([]),

    // Modal Image Gallery
    images: s.array(s.string()).default([]),

    // Detailed Project Content (for modal)
    overview: s.string().optional(),
    challenge: s.string().optional(),
    solution: s.string().optional(),
    results: s.string().optional(),
  })
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
    title: s.string(),
    slug: s.slug('posts'),
    date: s.isodate(),
    content: s.mdx(),
  })
})

const testimonials = defineCollection({
  name: 'Testimonial',
  pattern: 'testimonials.yml',
  schema: s.object({
    name: s.string(),
    role: s.string(),
    quote: s.string(),
    company: s.string().optional(),
    location: s.string().optional(),
    date: s.string().optional(),
    featured: s.boolean().default(false),
    rating: s.number().min(1).max(5).default(5),
  })
})

const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s.object({
    title: s.string(),
    slug: s.slug('pages').refine((slug) => !['projects', 'blog', 'contact', 'admin'].includes(slug), {
      message: 'Slug is reserved'
    }),
    description: s.string().optional(),
    content: s.mdx(),
  })
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { projects, posts, testimonials, pages },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: []
  }
})
