import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" / >
            <link rel="apple-touch-icon" href="images/apple-touch-icon.png"/>
            <link rel="stylesheet" href="css/bootstrap.min.css"/>
        </Head>
        <body>
            <Main/>
            <script src="js/jquery-3.2.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument