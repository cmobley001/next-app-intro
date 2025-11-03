import "../index.css";

export const metadata = {
  title: "React & Next.js Introduction",
  description: "Next.js App project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
