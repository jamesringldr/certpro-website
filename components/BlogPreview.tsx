'use client'

import { motion } from 'framer-motion'

const POSTS = [
  {
    date:     'March 15, 2026',
    category: 'Maintenance',
    title:    '5 Signs Your Water Heater Needs Replacing (Don\'t Wait for a Flood)',
    excerpt:  'Most water heaters fail without warning. Here\'s how to spot the early signals before it becomes a disaster.',
    bg:       '#1A2555',
  },
  {
    date:     'February 28, 2026',
    category: 'Seasonal Tips',
    title:    'How to Prevent Frozen Pipes This Winter: A Kansas City Homeowner\'s Guide',
    excerpt:  'When temps drop below freezing, your pipes are at serious risk. We cover the five most effective prevention strategies.',
    bg:       '#0A0F2C',
  },
  {
    date:     'February 10, 2026',
    category: 'Troubleshooting',
    title:    'Low Water Pressure? Here\'s What\'s Causing It and How We Fix It Fast',
    excerpt:  'Low pressure is more than an annoyance — it often signals a deeper problem. Learn the common culprits and solutions.',
    bg:       '#2A3570',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6" style={{ backgroundColor: '#00D4FF' }} />
              <span
                className="font-body font-semibold text-xs tracking-[0.22em] uppercase"
                style={{ color: '#00D4FF' }}
              >
                Blog
              </span>
            </div>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase leading-[1]"
              style={{ color: '#0A0F2C' }}
            >
              STAY AHEAD WITH SMART PLUMBING<br className="hidden sm:block" />
              ADVICE FROM INDUSTRY EXPERTS
            </h2>
          </div>

          <a
            href="#"
            className="flex-shrink-0 font-body font-semibold text-sm px-6 py-2.5 rounded border cursor-pointer transition-all duration-200 hover:bg-brand-navy hover:text-white"
            style={{ borderColor: '#0A0F2C', color: '#0A0F2C' }}
          >
            View All Posts
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.10)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
            >
              {/* Image placeholder */}
              <div
                className="h-44 relative flex items-center justify-center"
                style={{ backgroundColor: post.bg }}
              >
                <svg viewBox="0 0 24 24" className="w-12 h-12 opacity-15" fill="#00D4FF">
                  <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31z" />
                </svg>
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: '#00D4FF' }}
                >
                  <span className="font-body text-[10px] font-bold uppercase tracking-wide" style={{ color: '#0A0F2C' }}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="font-body text-xs text-gray-500 mb-2">{post.date}</div>
                <h3
                  className="font-body font-bold text-gray-800 leading-snug mb-3 transition-colors duration-200 group-hover:text-[#00D4FF]"
                  style={{ color: '#0A0F2C' }}
                >
                  {post.title}
                </h3>
                <p className="font-body text-xs text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-sm transition-colors duration-200"
                  style={{ color: '#00D4FF' }}
                >
                  Read More
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
