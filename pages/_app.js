import '../styles/custom.global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
