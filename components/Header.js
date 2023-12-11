import Head from 'next/head'

export const Header = ({ seo }) => {
  return (
    <Head>
      <script type="text/javascript">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "k4axbvd7w1");`}
      </script>
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
