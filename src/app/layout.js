import "./globals.css";

export const metadata = {
  title: "Ricardo Matos",
  description: "Landing Page para uma Advocacia Ficticia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
