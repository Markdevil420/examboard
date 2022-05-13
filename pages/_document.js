import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(_ctx) {
    const initialProps = await Document.getInitialProps(_ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" / >
            <link rel="apple-touch-icon" href="images/apple-touch-icon.png"/> */}
        </Head>
        <body>
            <Main/>
            <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"></script>
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument