import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
