import Head from 'next/head'

export const Header = ({ seo }) => {
  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3DEGVN62JJ"></script>
      <script async src="./ga.js"></script>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
    </Head>
  )
}
