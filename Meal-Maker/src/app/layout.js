import "./globals.css";

export const metadata = {
  title: "Meal Maker",
  description: "Find your favourite recipie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

