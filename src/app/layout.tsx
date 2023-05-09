import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./porticon.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="My personal portfolio."
          content="Web site created using create-next-app"
        />
        <link rel="apple-touch-icon" href="./porticon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/a388be2306.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <title>Phạm Bình Minh | Front-end Developer</title>
        <script defer src="/main.2723b3f1.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
