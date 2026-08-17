import Head from 'next/head'
import getConfig from 'next/config'

export const Header = ({ seo }) => {
  const canonicalUrl = seo.url || 'https://jamestsetsekas.com/'
  const { publicRuntimeConfig = {} } = getConfig() || {}
  const analyticsPath = `${publicRuntimeConfig.basePath || ''}/ga.js`

  return (
    <Head>
      {publicRuntimeConfig.analyticsEnabled && <script async src={analyticsPath}></script>}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="theme-color" content="#f4f0e7" />
    </Head>
  )
}
