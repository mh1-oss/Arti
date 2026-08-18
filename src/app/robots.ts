export const dynamic = 'force-static'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arti-software.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/private/'], // Add any routes you want to hide from search engines here
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
