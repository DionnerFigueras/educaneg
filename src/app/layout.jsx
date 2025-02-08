import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-100'>
      <head>
        <title>Educaneg</title>
      </head>
      <body className='bg-gray-100'>
        {children}
      </body>
    </html>
  );
}