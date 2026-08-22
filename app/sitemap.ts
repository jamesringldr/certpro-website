import type { MetadataRoute } from 'next'
import { SERVICES } from '@/data/services'
import { INDEXABLE_PATHS } from '@/lib/seo/constants'
import { absoluteUrl } from '@/lib/seo/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = INDEXABLE_PATHS.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/privacy' || path === '/terms' ? 0.3 : 0.8,
  }))

  const services: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...core, ...services]
}
